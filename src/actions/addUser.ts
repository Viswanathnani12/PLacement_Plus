"use server";

import UserModel from "@/db/models/User";
import { connect } from "@/dbConfig/dbConfig";

connect();
export async function AddUser(  userId : string, formData1 : FormData){
    
           
      console.log(userId)
     
      console.log(formData1);
        try{
              const newUser = new UserModel({
                userId : userId,
                RollNo :  formData1.get("rollno"),
                Name : formData1.get("name"),
                Branch : formData1.get("branch"),
                College : formData1.get("college"),
                PassedOutBatch : formData1.get("passedoutbatch"),
                AppliedJobs : [""],
                SavedJobs : [""]
              });
               
              console.log(newUser) 
              await newUser.save();
              
        }catch(e){
          console.log("Error Occured " + e);
        }
}