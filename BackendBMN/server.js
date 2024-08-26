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
    origin: ["https://build-my-notes.vercel.app", "http://localhost:3000"], // Allowed origins
    methods: ["GET", "POST"],
    credentials: true // Required to allow cookies to be sent
  }
});

// Connect to MongoDB
connectDB();

// Enable CORS for cross-origin requests
app.use(cors({
  origin: ["https://build-my-notes.vercel.app", "http://localhost:3000"], // Frontend URLs
  methods: ["GET", "POST"],
  credentials: true, // Allow cookies
}));

app.use(express.json()); // Body parser to handle JSON

// Log Mongo URI for debugging purposes
console.log('Mongo URI:', process.env.MONGODB_URI);

// Ensure proper session handling with MongoDB and secure cookies
app.use(session({
  secret: process.env.SESSION_SECRET || 'defaultSecret', // Fallback session secret
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/myLocalDatabase', // Fallback to local DB if necessary
    autoRemove: 'interval',
    autoRemoveInterval: 10, // Every 10 minutes
  }),
  cookie: { 
    secure: process.env.NODE_ENV === 'production',  // Use secure cookies in production
    httpOnly: true, // Prevent client-side JavaScript from accessing the cookie
    sameSite: 'none',  // Required for cross-origin cookies
    maxAge: 24 * 60 * 60 * 1000, // Session expires after 24 hours
  }
}));

// Passport initialization after session middleware
app.use(passport.initialize());
app.use(passport.session());

app.set('trust proxy', 1); // Trust first proxy if running behind a proxy (Heroku, Render, etc.)

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('A user connected');
});

io.on('connect_error', (error) => {
  console.error('Socket.IO connection error:', error);
});

// Auth routes for handling authentication
app.use('/auth', authRoutes);

// Video processing route
app.post('/process-video', async (req, res) => {
  const { sbatId, userId } = req.body;  // Destructure sbatId and userId from request

  if (!sbatId || !userId) {
    return res.status(400).json({ error: 'Missing sbatId or userId' });
  }

  try {
    // Check if the video is already processed
    let video = await Video.findOne({ sbatId });
    
    if (video) {
      const user = await User.findById(userId);
      if (!user.videos.includes(video._id)) {
        user.videos.push(video._id);
        await user.save(); // Save user's processed video list
      }

      return res.json({
        message: 'Video already processed, returning existing notes',
        notes: video.notes,
        transcription: video.transcription,
        videoLink: video.videoLink,
      });
    }

    // If video isn't already processed, process it
    const result = await processVideo(sbatId, io);

    video = new Video({
      sbatId,
      notes: result.notes,
      transcription: result.transcription,
      videoLink: `https://scaler.com/class/${sbatId}`
    });

    await video.save(); // Save the video to the database

    const user = await User.findById(userId);
    user.videos.push(video._id); // Add video to user's list
    await user.save();

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

// Route to check if the user is authenticated
app.get('/auth/check-session', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ loggedIn: true });
  } else {
    res.json({ loggedIn: false });
  }
});

// Start the server
const PORT = process.env.PORT || 5009;
const HOST = '0.0.0.0';

server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
