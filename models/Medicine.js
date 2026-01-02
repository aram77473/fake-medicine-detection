const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },

  used: {
    type: Boolean,
    default: false
  },

  usedAt: {
    type: Date,
    default: null
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Medicine", medicineSchema);
