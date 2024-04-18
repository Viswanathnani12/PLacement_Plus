"use client";

import { BellIcon, BellRingIcon, Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { ApplyJob } from "@/actions/applyJob";
import { useAuth } from "@clerk/nextjs";


export function ApplyForm(job: any) {
    const { userId } = useAuth()
    return <div >
        <form className="flex flex-row m-2 gap-2" >
            <Button className='w-[48%] bg-[#0A65CC] rounded-lg' onClick={()=>{ApplyJob(job,userId!)}}>Apply Now</Button>
            <a href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${job.companyName} on ${job.driveDate}/${job.driveDate}`} target='_blank' className='mr-6'>
                <Button className='w-[120%] broder border-[#0A65CC] text-[#0A65CC]' variant='outline'>Remind Me<BellIcon size={15} className='mt-1 ml-2' /></Button>
            </a>
        </form>
    </div>
}