const express = require("express");
const Medicine = require("../models/Medicine");

const router = express.Router();

router.get("/:code", async (req, res) => {
  try {
    const med = await Medicine.findOne({ code: req.params.code });

    if (!med) {
      return res.json({ status: "FAKE" });
    }

    if (med.isUsed) {
      return res.json({ status: "ALREADY USED" });
    }

    med.isUsed = true;
    await med.save();

    res.json({
      status: "ORIGINAL",
      batch: med.batch,
      expiry: med.expiry
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
