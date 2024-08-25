const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  notesGenerated: {
    type: Number,
    default: 0
  },
  isPremium: {
    type: Boolean,
    default: false
  },
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Video'  // Referencing the Video model
    }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);