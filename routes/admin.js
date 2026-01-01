const express = require("express");
const QRCode = require("qrcode");
const { v4: uuidv4 } = require("uuid");
const Medicine = require("../models/Medicine");

const router = express.Router();

router.post("/generate", async (req, res) => {
  try {
    const code = uuidv4();

    const medicine = new Medicine({
      code,
      batch: req.body.batch,
      expiry: req.body.expiry
    });

    await medicine.save();

    const qr = await QRCode.toDataURL(code);

    res.json({
      message: "Medicine QR Generated",
      code,
      qr
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
