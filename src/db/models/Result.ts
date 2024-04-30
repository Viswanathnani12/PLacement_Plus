import mongoose from "mongoose";

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
        type: [String],
    },
    SavedJobs:{
        type:[String]
    }
})

const newUser =
  mongoose.models.users || mongoose.model("users", UserSchema);

export default newUser;