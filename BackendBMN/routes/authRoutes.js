const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: 'http://build-my-notes.vercel.app' }),
  (req, res) => {
    // Redirect to home or dashboard after successful login
    res.redirect('http://build-my-notes.vercel.app');
  }
);

router.get('/current-user', (req, res) => {
  if (req.isAuthenticated()) {
    return res.json(req.user);
  }
  return res.status(401).json({ message: 'Not authenticated' });
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