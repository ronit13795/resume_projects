import mongoose from "mongoose";

const meetupSchema = new mongoose.Schema({
  title: String,
  address: String,
  description: String,
  image: String,
});

module.exports =
  mongoose?.models?.meetups || mongoose.model("meetups", meetupSchema);
