const express = require("express");
// const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const enforce = require("express-sslify");

const connectDB = require("./db/db");

const testRouter = require("./api/routes/test");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
connectDB();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// db.on("error", console.error.bind(console, "MongoDB connection error:"));

if (process.env.NODE_ENV === "production") {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, "client/build")));
  app.use(compression());

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.use("/api", testRouter);

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`shits up on port ${port}!`);
});

app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});
