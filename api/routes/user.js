const express = require("express");
const router = express.Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

// Update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    const { password, ...others } = updatedUser._doc;

    console.log(others);
    res.json(others);
  } catch (err) {
    res.json(err);
  }
});

// Delete
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json("User has been deleted");
  } catch (err) {
    res.json(err);
  }
});

// Get User
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.json(others);
  } catch (err) {
    res.json(err);
  }
});

// Get all users
router.get("/", async (req, res) => {
  const query_new = req.query.new;
  try {
    const users = query_new
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.json(users);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
