"use server";

import newUser from "@/db/models/User";
import { connect } from "@/dbConfig/dbConfig";
import { revalidatePath } from "next/cache";

type idType = {
      id : string
}

connect();
export async function SaveJob(  job : any  , userId : string){
     
      const obj = await newUser.findOne({userId : userId});
      let SavedJobs = obj.SavedJobs
      // console.log(job)
      // console.log(job.job._id)

      SavedJobs.push(job.job._id);
      // console.log(AppliedJobs)
      await newUser.findOneAndUpdate( { userId : userId} , {SavedJobs: SavedJobs});
      revalidatePath("/student/ssaved")
}