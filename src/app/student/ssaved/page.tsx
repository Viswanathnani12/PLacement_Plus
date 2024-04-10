import React from 'react'
import newJob from "@/db/models/Job"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { BellRingIcon, Bookmark, SaveIcon } from 'lucide-react';
import Link from 'next/link';

const page = async () => {
    const jobs = await newJob.find({})
    return (
        <>
            <p className='font-bold text-xl ml-40 mt-10'>Saved Jobs</p>
            <div className='grid grid-cols-3 ml-20 p-10 h-[100%] mb-[6%]'>
                {jobs.map((job: any) => (

                    // eslint-disable-next-line react/jsx-key
                    <Card className="mb-3 bg-[#FFFFFF] ml-10  hover:translate-x-4 transition-transform duration-300 shadow-md">
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
                            <Button className='mr-1 text-[#]' variant={'ghost'}><Bookmark strokeWidth={1}  fill='black' /></Button>
                            <Button className='mr-2 ' variant={'ghost'}><a href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${job.companyName} on ${job.driveDate}/${job.driveDate}`} target='_blank'><BellRingIcon strokeWidth={1} /></a></Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default page
