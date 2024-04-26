import React from 'react'
import newJob from "@/db/models/Job"
import newUser from '@/db/models/User';

import { auth } from '@clerk/nextjs';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { BellIcon, BellRingIcon, Bookmark, BookmarkIcon, SaveIcon } from 'lucide-react';
import Link from 'next/link';
import { ApplyForm } from '@/components/ApplyJobForm';
import { ApplyJob } from '@/actions/applyJob';
import { SavedForm } from '@/components/SavedForm';
import { redirect } from 'next/navigation';

const page = async () => {
    const {userId} = auth()
    // console.log(userId)
    
    const requser =  await newUser.findOne({userId : userId});
    const Applied = requser.AppliedJobs;
    const Saved = requser.SavedJobs;
    // console.log(requser.Branch);
    
    const jobs = await newJob.find({})
    // console.log(Applied);
    const BranchJobs = jobs.filter(job => job.branches.includes(requser.Branch));
    // console.log(BranchJobs.length);
        

    
    const filteredJobs = BranchJobs.filter(job => !Applied.includes(job._id));
    const finalJobs = filteredJobs.filter(job => !Saved.includes(job._id));
    // console.log(finalJobs);
    
    return (
        <>
            <div className='grid grid-cols-3 ml-24 mt-10 h-[100%] mb-[20%]'>
                {finalJobs.map((job: any) => (
                    
                        // eslint-disable-next-line react/jsx-key
                    <Card className='w-[80%] mb-4 hover:border-[#0A65CC] shadow-md' key={job.companyName}>
                        <CardContent className='space-y-1'>
                            <div className='flex justify-between mt-4' >
                                <p className='font-Inter font-medium font-md'>{job.companyName}</p>
                                <SavedForm job = { JSON.parse(JSON.stringify(job) )} />
                            </div>
                            <p className='text-[#0A65CC] font-Inter font-medium'>{job.jobRole}</p>
                            <p className='text-[#767F8C]'>Location : {job.jobLocation}</p>
                            <p className='text-[#767F8C]'>Salary : {job.ctc}</p>
                            <p className='text-[#767F8C]'>Drive Date : {new Date(job.driveDate).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                            })}</p>
                            <div className='h-1'></div>
                            <div className=' flex gap-2'>
                                <ApplyForm job = { JSON.parse(JSON.stringify(job) )} />
                                <a href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${job.companyName} on ${job.driveDate}/${job.driveDate}`} target='_blank' className='mr-6'>
                                    <Button className='w-[120%] broder border-[#0A65CC] text-[#0A65CC]' variant='outline'>Remind Me <BellIcon size={15} className='mt-1 ml-2' /></Button>
                                </a>
                            </div>
                            
                        </CardContent>
                    </Card>   
                ))}
            </div>
        </>
    )
}

export default page
