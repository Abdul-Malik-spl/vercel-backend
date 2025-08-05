const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: String,
  message: String,
  rating: Number,
  date: String,
  time: String
});

module.exports = mongoose.models.Feedback || mongoose.model("Feedback", feedbackSchema);
