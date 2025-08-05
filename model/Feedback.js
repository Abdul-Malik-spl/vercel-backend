import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  name: String,
  message: String,
  rating: Number,
  date: String,
  time: String
});

export default mongoose.models.Feedback || mongoose.model("Feedback", feedbackSchema);
