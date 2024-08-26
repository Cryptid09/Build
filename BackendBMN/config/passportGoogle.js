const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  console.log('Serializing user:', user);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log('Deserializing user id:', id);
  try {
    const user = await User.findById(id);
    console.log('Deserialized user:', user);
    done(null, user);
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
      callbackURL: `https://build-demg.onrender.com/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log('Google strategy callback. Profile:', profile);
      try {
        // Look for user in the database by googleId
        let user = await User.findOne({ googleId: profile.id });
        
        // If user doesn't exist, create a new one with default values for isPremium and notesGenerated
        if (!user) {
          user = new User({
            googleId: profile.id,
            username: profile.displayName,
            email: profile.emails[0].value,
            isPremium: false, // Set isPremium to false by default
            notesGenerated: 0, // Initialize notesGenerated to 0
          });
          await user.save();
        }

        console.log('User found or created:', user);
        return done(null, user); // Pass the user to the done callback
      } catch (err) {
        console.error('Error in Google strategy:', err);
        return done(err, null);
      }
    }
  )
);
