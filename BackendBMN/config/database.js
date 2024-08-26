const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    // Log the MongoDB URI for debugging purposes
    console.log('Attempting to connect to MongoDB URI:', process.env.MONGODB_URI);

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s
      socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
    });

    console.log('MongoDB Atlas Connected...');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    console.error('Error details:', error.message);

    if (error.reason) console.error('Reason:', error.reason);
    if (error.code) console.error('Error code:', error.code);

    process.exit(1); // Exit the process if connection fails
  }
};

module.exports = connectDB;
