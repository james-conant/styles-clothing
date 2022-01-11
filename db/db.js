const mongoose = require("mongoose");
const url = "mongodb://admin:Covina-16!@192.168.0.123";

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
    });
    console.log("MongoDB Connected....");
  } catch (err) {
    console.error(err.message);
    // exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
