"use server";

import newUser from "@/db/models/User";
import { connect } from "@/dbConfig/dbConfig";
import { revalidatePath } from "next/cache";

type idType = {
      id : string
}

connect();
export async function ApplyJob(  job : any  , userId : string){
     
      const obj = await newUser.findOne({userId : userId});
      let AppliedJobs = obj.AppliedJobs
      // console.log(job)
      console.log(job.job._id)

      AppliedJobs.push(job.job._id);
      // console.log(AppliedJobs)
      await newUser.findOneAndUpdate( { userId : userId} , {AppliedJobs: AppliedJobs});
      revalidatePath("/student/sapplied")
}