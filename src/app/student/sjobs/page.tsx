import React from 'react'
import newJob from "@/db/models/Job"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { BellIcon, BellRingIcon, Bookmark, BookmarkIcon, SaveIcon } from 'lucide-react';
import Link from 'next/link';

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
                                <BookmarkIcon size={20} color='#0A65CC'/> 
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
                                <Button className='w-[48%] bg-[#0A65CC] rounded-lg'>Apply Now</Button>
                                <a href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${job.companyName} on ${job.driveDate}/${job.driveDate}`} target='_blank' className='mr-6'>
                                    <Button className='w-[120%] broder border-[#0A65CC] text-[#0A65CC]' variant='outline'>Remind Me<BellIcon size={15} className='mt-1 ml-2'/></Button>
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


{/* <Card className="mb-3 bg-[#FFFFFF] ml-10  hover:translate-x-4 transition-transform duration-300 shadow-md">
                        <CardContent className="p-6">
                            <p className="font-medium">{job.companyName}</p>
                            <p>Drive Date: {new Date(job.driveDate).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                            })}</p>
                            <p>CTC: {job.ctc}</p>
                            <p>Branches: {job.branches.join(", ")}</p>
                        </CardContent>
                        <CardFooter className='flex'>
                            <Button className='mr-2 bg-[#2C62EE] text-white' variant={'outline'}>Apply Now</Button>
                            <Button className='mr-1 text-[#]' variant={'ghost'}><Bookmark strokeWidth={1} /></Button>
                            <Button className='mr-2 ' variant={'ghost'}><a href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${job.companyName} on ${job.driveDate}/${job.driveDate}`} target='_blank'><BellRingIcon strokeWidth={1} /></a></Button>
                        </CardFooter>
                    </Card> */}