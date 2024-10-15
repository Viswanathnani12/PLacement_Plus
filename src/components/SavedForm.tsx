"use client";

import { BellIcon, BellRingIcon, Bookmark, BookmarkIcon } from "lucide-react";
import { Button } from "./ui/button";
import { SaveJob } from "@/actions/savedJob";
import { useAuth } from "@clerk/nextjs";


export function SavedForm(job: any) {
    const { userId } = useAuth()
    return <div >
        <Button variant={'ghost'}><BookmarkIcon size={20} color='#0A65CC' onClick={() => { SaveJob(job, userId!) }} /> </Button>
    </div>
}