const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // await mongoose.connect("mongodb://root:example@localhost:27017", {
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
