const mongoose = require("mongoose");


const urlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 1000,
  },
  customRoute : {
    type: String,
    required: true
  },
  visitors: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  }
});

const URL = new mongoose.model("url", urlSchema);

module.exports = URL;