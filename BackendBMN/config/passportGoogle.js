const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  console.log('Serializing user:', user);
  done(null, user.id); // Stores user ID in session
});

passport.deserializeUser(async (id, done) => {
  console.log('Deserializing user id:', id);
  try {
    const user = await User.findById(id);
    console.log('Deserialized user:', user); // Ensure user is correctly fetched from DB
    done(null, user); // Populate req.user
  } catch (err) {
    console.error('Error deserializing user:', err);
    done(err, null);
  }
});

// Use Google OAuth strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.BACKEND_URL}/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log('Google strategy callback. Profile:', profile);
      try {
        // Find user by Google ID
        let user = await User.findOne({ googleId: profile.id });
        
        // If user does not exist, create a new one
        if (!user) {
          user = new User({
            googleId: profile.id,
            username: profile.displayName,
            email: profile.emails[0].value,
            isPremium: false, // Default premium status
            notesGenerated: 0, // Initialize with 0 notes generated
          });
          await user.save();
          console.log('New user saved:', user);
        } else {
          console.log('Existing user found:', user);
        }

        return done(null, user); // Pass the user to the done callback
      } catch (err) {
        console.error('Error in Google strategy:', err);
        return done(err, null);
      }
    }
  )
);
