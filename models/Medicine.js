const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  batch: String,
  expiry: String,
  isUsed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Medicine", medicineSchema);
