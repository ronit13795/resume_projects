import mongoose from "mongoose";

const answersShcema = new mongoose.Schema({
title:String,
creator:String,
surveyId: String,
answers: Object,
})

module.exports = mongoose.models.surveysAnswered || mongoose.model("surveysAnswered", answersShcema);