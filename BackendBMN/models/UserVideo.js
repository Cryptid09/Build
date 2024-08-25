const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserVideoSchema = new Schema({
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  video: { 
    type: Schema.Types.ObjectId, 
    ref: 'Video', 
    required: true 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('UserVideo', UserVideoSchema);
