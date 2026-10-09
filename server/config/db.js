const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/scs_training_db');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    // If local MongoDB is not running, warn gracefully
    console.log("Tip: Make sure MongoDB Service is running locally or provide MongoDB Atlas URI in .env file.");
  }
};

module.exports = connectDB;
