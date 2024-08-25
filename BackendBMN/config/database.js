const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
      sslValidate: true,
    });
    console.log('MongoDB Atlas Connected...');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    console.error('Error details:', error.message);
    if (error.reason) console.error('Reason:', error.reason);
    if (error.code) console.error('Error code:', error.code);
    process.exit(1);
  }
};

module.exports = connectDB;