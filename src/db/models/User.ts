import mongoose from "mongoose";
import { JobSchema } from "./Job";

const UserSchema = new mongoose.Schema({
    RollNo:{
        type:String,
        required:[true, "Enter RollNo"],
    },
    Name:{
        type:String,
        required:[true, "Enter Name"],
    },
    Branch:{
        type:String,
        required:[true, "Enter Branch"],
    },
    College:{
        type:String,
        required:[true, "Enter College"],
    },
    PassedOutBatch:{
        type:String,
        required:[true, "Enter PassedOutBatch"],
    },
    AppliedJobs: {
        type: [JobSchema]
    },
    SavedJobs:{
        type:[JobSchema]
    }
})

