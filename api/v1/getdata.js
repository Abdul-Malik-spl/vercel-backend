import connectDB from "../../../lib/dbConnect.js";
import Feedback from "../../../model/Feedback.js";

export default async function handler(req, res) {
  await connectDB();
  const data = await Feedback.find();
  res.status(200).json({ message: "success", data });
}
