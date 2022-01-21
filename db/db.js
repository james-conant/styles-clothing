const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
    console.log("MongoDB Connected....");
  } catch (err) {
    console.error(`DB ERROR ---> ${err.message}`);
    // exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
