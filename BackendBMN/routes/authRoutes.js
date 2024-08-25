const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
  (req, res, next) => {
    console.log('Callback hit. Full URL:', req.protocol + '://' + req.get('host') + req.originalUrl);
    console.log('Query:', req.query);
    next();
  },
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    console.log('Google auth successful, redirecting to:', `${process.env.FRONTEND_URL}?auth=success`);
    res.redirect(`${process.env.FRONTEND_URL}?auth=success`);
  }
);

router.get('/current-user', (req, res) => {
  console.log('Current user request. User:', req.user);
  if (req.isAuthenticated() && req.user) {
    res.json(req.user);
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
});

// Logout route
router.post('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: 'Logout failed' });
    }

    // Destroy session to clear user data
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to destroy session' });
      }

      // Redirect or send response after logout
      res.clearCookie('connect.sid'); // Clear session cookie
      return res.json({ message: 'Logged out successfully' });
    });
  });
});


module.exports = router;