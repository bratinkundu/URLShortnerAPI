const mongoose = require("mongoose");
require('dotenv').config();
const url = process.env.url;
module.exports = async (db) => {
  try {
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected!')
    return conn;
  } catch (err) {
    throw new Error('MongoDB connection err: ' + err);
  }
};