const mongoose = require("mongoose");

//create schema
const sportSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, "name is required field"],
    // unique: true,
  },
  description: {
    type: String,
  },

  duration: {
    type: Number,
    // required: [true, "duration is required"],
  },
  review: {
    type: Number,
    // default: 1,
  },
});

//create model with schema
const Sports = mongoose.model("Sports", sportSchema);

module.exports = Sports;
