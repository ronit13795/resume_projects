import dbConnect from "../../lib/dbConnect";
import MeetupModel from "../../models/meetUp";

async function insertNewMeetup(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const data = req.body;

    let meetup = new MeetupModel(data);
    meetup = await meetup.save();
    res.status(201).json({ msg: "ok" });
  }
}

export default insertNewMeetup;
