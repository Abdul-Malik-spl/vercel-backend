const connectDB = require("../../lib/dbConnect");
const Feedback = require("../../model/Feedback");

module.exports = async (req, res) => {
  await connectDB();
  const data = await Feedback.find();
  res.status(200).json({ message: "success", data });
};
