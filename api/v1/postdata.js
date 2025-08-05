const connectDB = require("../../lib/dbConnect");
const Feedback = require("../../model/Feedback");

module.exports = async (req, res) => {
  await connectDB();

  if (req.method === "POST") {
    const { name, message, rating, date, time } = req.body;
    const newFeedback = new Feedback({ name, message, rating, date, time });
    await newFeedback.save();
    res.status(201).json({ message: "Saved successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
