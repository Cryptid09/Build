const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes); // For Google OAuth routes

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully', userId: user._id });
  } catch (error) {
    res.status(400).json({ message: 'Error registering user', error: error.message });
  }
});

module.exports = router;