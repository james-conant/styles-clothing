const express = require("express");
const router = express.Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    const { password, ...filtered } = savedUser._doc;

    res.json(filtered);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    const inputPassword = req.body.password;
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    inputPassword !== originalPassword &&
      res.status(401).send({ error: "Wrong Credentials" });

    const { password, ...filtered } = user._doc;
 
    res.json(filtered);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
