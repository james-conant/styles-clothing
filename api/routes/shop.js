const express = require("express");
const router = express.Router();
const Listing = require("../models/Listing");

// Get All Listings
router.get("/", async (req, res) => {
  const key = req.query.param;
  try {
    const allProducts = await Listing.find(
      key
        ? {
            tags: { $regex: req.query.param },
          }
        : null
    );
    res.json(allProducts);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
