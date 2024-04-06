"use server";

import newJob from "@/db/models/Job";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function addJob(Branches: Set<string>, formData: FormData) {
  // console.log(Branches);
  let a: any[] = [];
  Branches.forEach((ele: any) => {
    a.push(ele);
  });
  // console.log(a);

  // console.log(formData);
  const psb = formData.get("batch");
  const l=formData.get("applyLink");
  const dm=formData.get("driveMode");
  // console.log(l+" "+dm);
  

  try {
    const njob = new newJob({
      companyName: formData.get("companyName"),
      jobRole: formData.get("jobRole"),
      jobLocation: formData.get("jobLocation"),
      driveDate: formData.get("driveDate"),
      numberOfRounds: formData.get("numberOfRounds"),
      bond: formData.get("bond"),
      cgpa: formData.get("cgpa"),
      branches: a,
      backlogs: formData.get("backlogs"), // Ensure only one "backlogs" field
      ctc: formData.get("ctc"),
      batch: formData.get("batch"),
      lastDatetoApply: formData.get("lastDatetoApply"), // Corrected field name
      applyLink:l,
      driveMode: dm,
      jobDescription: formData.get("jobDescription"),
    });
  
    // console.log(njob);
  
    await njob.save();  
    return {success:true};
  } catch (error) {
    return {error:true}
  }
  
}
