const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minLength: 2,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  public_id: {
    type: String,
    required: true,
  },
});

module.exports = sliderSchema;
