const mongoose = require("mongoose");
const Colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected to ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
