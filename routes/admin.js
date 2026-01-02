const express = require("express");
const router = express.Router();
const Medicine = require("../models/Medicine");

// VERIFY MEDICINE (ONE-TIME USE)
router.get("/verify/:code", async (req, res) => {
  try {
    const code = req.params.code;

    const medicine = await Medicine.findOne({ code });

    if (!medicine) {
      return res.status(404).json({
        status: "FAKE",
        message: "Invalid QR / Medicine not found"
      });
    }

    // already used
    if (medicine.used === true) {
      return res.status(400).json({
        status: "FAKE",
        message: "This medicine was already verified earlier",
        usedAt: medicine.usedAt
      });
    }

    // mark as used
    medicine.used = true;
    medicine.usedAt = new Date();
    await medicine.save();

    return res.json({
      status: "ORIGINAL",
      message: "Medicine is original and verified successfully",
      verifiedAt: medicine.usedAt
    });

  } catch (error) {
    res.status(500).json({
      status: "ERROR",
      message: "Server error",
      error: error.message
    });
  }
});

module.exports = router;
