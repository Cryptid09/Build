const express = require('express');
const http = require('http');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const { Server } = require('socket.io');
const { processVideo } = require('./controllers/videoProcessor');
const authRoutes = require('./routes/authRoutes');
const Video = require('./models/Video');  // Import the Video model
const User = require('./models/User');    // Import the User model
const connectDB = require('./config/database');
const MongoStore = require('connect-mongo');
require('dotenv').config();
require('./config/passportGoogle'); // Google OAuth strategy setup

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [ "https://build-my-notes.vercel.app","http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Connect to MongoDB
connectDB();

app.use(cors({
  origin: [ "https://build-my-notes.vercel.app", "http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === 'production', 
    sameSite: 'none',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.set('trust proxy', true); // Added this line

io.on('connection', (socket) => {
  console.log('A user connected');
  // Your socket event handlers
});

io.on('connect_error', (error) => {
  console.error('Socket.IO connection error:', error);
});

app.use('/auth', authRoutes);

// Video processing route
app.post('/process-video', async (req, res) => {
  const { sbatId, userId } = req.body;  // Get the sbatId and userId from the request body
  
  if (!sbatId || !userId) {
    return res.status(400).json({ error: 'Missing sbatId or userId' });
  }

  try {
    // Check if the video has already been processed
    let video = await Video.findOne({ sbatId });
    
    if (video) {
      // If notes already exist, return the existing data instead of reprocessing
      console.log(`[${new Date().toISOString()}] Video already processed, fetching notes...`);
      
      const user = await User.findById(userId);
      if (!user.videos.includes(video._id)) {
        user.videos.push(video._id);
        await user.save();
      }

      return res.json({
        message: 'Video already processed, returning existing notes',
        notes: video.notes,
        transcription: video.transcription,
        videoLink: video.videoLink,
      });
    }

    // If the video hasn't been processed, process it
    const result = await processVideo(sbatId, io);

    // Create a new video entry in the Video model
    video = new Video({
      sbatId,
      notes: result.notes,
      transcription: result.transcription, // Save both notes and transcription
      videoLink: `https://scaler.com/class/${sbatId}` // Link to the original video, for example
    });

    await video.save();

    // Associate the video with the user
    const user = await User.findById(userId);
    user.videos.push(video._id);
    await user.save();

    // Return success response
    return res.json({
      message: 'Video processed successfully',
      notes: result.notes,
      transcription: result.transcription,
      videoLink: `https://scaler.com/class/${sbatId}`
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the video' });
  }
});

// Route to check if a user is logged in
app.get('/auth/check-session', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ loggedIn: true });
  } else {
    res.json({ loggedIn: false });
  }
});

const PORT = process.env.PORT || 5009;
const HOST = '0.0.0.0';  // Add this line

// Update the server.listen call
server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});