'use client'
import React from 'react'
import newJob from "@/db/models/Job"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { BellIcon, BellRingIcon, Bookmark, BookmarkIcon, SaveIcon } from 'lucide-react';
import Link from 'next/link';
import newUser from '@/db/models/User';
import { auth } from '@clerk/nextjs';

const page = async () => {
    const { userId } = auth()
    // console.log(userId)
    const requser = await newUser.findOne({ userId: userId });

    const savedJobs = requser.SavedJobs;
    const Applied = requser.AppliedJobs;

    async function getJobById(id: string) {
        let flag = true
        if (!Applied.includes(id)) {
            flag = false
        }
        if (id === "" || id === null) {
            return;
        }
        //   console.log(id)  
        const job = await newJob.findOne({ _id: id })
        return <Card className='w-[80%] mb-4 hover:border-[#0A65CC] shadow-md' key={job.companyName}>
            <CardContent className='space-y-1'>
                <div className='flex justify-between mt-4' >
                    <p className='font-Inter font-medium font-md'>{job.companyName}</p>
                    <BookmarkIcon size={20} color='#0A65CC' fill='#0A65CC' />
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
                <div className='flex justify-between'>
                    <a href={`${job.link}`} className='w-[100%] mr-2'><Button className='w-[100%] rounded-lg' variant={'outline'}>{flag ? 'Applied ✅' : 'Apply Now'}</Button></a>
                    <a href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${job.companyName} on ${job.driveDate}/${job.driveDate}`} target='_blank' className='mr-6'>
                        <Button className='w-[120%] broder border-[#0A65CC] text-[#0A65CC]' variant='outline'>Remind Me<BellIcon size={15} className='mt-1 ml-2' /></Button>
                    </a>
                </div>
            </CardContent>
        </Card>
    }
    return (
        <>
            {/* <p className='font-bold text-xl ml-28 mt-10'>Saved Jobs</p> */}
            <div className='grid grid-cols-3 ml-16 p-10 h-[100%] mb-[20%]'>
                {
                    savedJobs.map((jid: string) => {
                        return getJobById(jid)
                    })
                }
            </div>
        </>
    )
}

export default page
