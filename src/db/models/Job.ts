import mongoose from "mongoose";

export const JobSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "Enter Company name"],
  },
  jobRole: {
    type: String,
    required: [true, "Enter Job Role"],
  },
  jobLocation: {
    type: String,
    required: [true, "Enter Job Location"],
  },
  driveDate: {
    type: String,
    required: [true, "Enter Drive Date"],
  },
  numberOfRounds: {
    type: Number,
    required: [true, "Enter Number of Rounds"],
  },
  bond: {
    type: Number,
    required: [true, "Enter Number"],
  },
  cgpa: {
    type: String,
    required: [true, "Enter CGPA"],
  },
  branches: {
    type: [String],
    required: [true, "Enter Branches"],
  },
  backlogs: {
    type: Number,
    required: [true, "Enter Number of Backlogs"],
  },
  ctc: {
    type: String,
    required: [true, "Enter CTC"],
  },
  batch: {
    type: String,
    required: [true, "Enter Pass Out Batch"],
  },
  lastDatetoApply: {
    type: String,
    required: [true, "Enter Last Date to Apply"],
  },
  applyLink: {
    type: String,
    required: [true, "Enter Apply Link"],
  },
  driveMode: {
    type: String,
    required: [true, "Enter Drive Mode"],
  },
  jobDescription: {
    type: String,
    required: [true, "Enter Job Description"],
  },
});



const newJob =
  mongoose.models.jobschemas || mongoose.model("jobschemas", JobSchema);

export default newJob;
