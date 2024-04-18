    import React from 'react'
    import newJob from "@/db/models/Job"
    import { Card, CardContent, CardFooter } from "@/components/ui/card";
    import { Button } from '@/components/ui/button';
    import { BellIcon, BellRingIcon, Bookmark, BookmarkIcon, SaveIcon } from 'lucide-react';
    import Link from 'next/link';
    import { ApplyForm } from '@/components/ApplyJobForm';
    import { ApplyJob } from '@/actions/applyJob';
import { SavedForm } from '@/components/SavedForm';

    const page = async () => {
        const jobs = await newJob.find({})
        return (
            <>
                <div className='grid grid-cols-3 ml-24 mt-10 h-[100%] mb-[6%]'>
                    {jobs.map((job: any) => (
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
                                <ApplyForm job = { JSON.parse(JSON.stringify(job) )} />
                            </CardContent>
                        </Card>
                        
                    ))}
                </div>
            </>
        )
    }

    export default page
