"use client";

import { BellIcon, BellRingIcon, Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { ApplyJob } from "@/actions/applyJob";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from 'next/navigation'


export function ApplyForm(job: any) {
    const router = useRouter()
    const { userId } = useAuth()
    return <div>
        <form className="flex flex-row gap-2" >
            <Button className='w-[160px] bg-[#0A65CC] rounded-lg text-white underline-[#ffff2]' onClick={() => {
                ApplyJob(job, userId!);
            }}>
                Apply Now
            </Button>
        </form>
    </div>
}