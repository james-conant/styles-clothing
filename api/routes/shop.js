const express = require("express");
const router = express.Router();
const Listing = require("../models/Listing");

// Get All Listings
router.get("/", async (req, res) => {
  try {
    const allProducts = await Listing.find();

    res.json(allProducts);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
