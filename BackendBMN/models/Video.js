const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  sbatId: {
    type: String,
    required: true,
    unique: true
  },
  videoLink: {
    type: String,
    required: true
  },
  transcription: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Video', VideoSchema);