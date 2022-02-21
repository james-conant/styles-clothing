require("dotenv").config();
const express = require("express");
// const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const enforce = require("express-sslify");

const connectDB = require("./db/db");

const userRoute = require("./api/routes/user");
const shopRoute = require("./api/routes/shop");
const authRoute = require("./api/routes/auth");
const { DOCKER } = require("./env");

console.log(DOCKER);
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
connectDB();

const port = process.env.PORT || 6000;

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
app.use("/api/user", userRoute);
app.use("/api/shop", shopRoute);

app.use("/api/auth", authRoute);

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`shits up on port ${port}`);
});

app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});
