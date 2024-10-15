'use client'
import { SignUp } from "@clerk/nextjs"

import Image from "next/image";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { CheckCircle2Icon, CheckCircleIcon } from "lucide-react";
// import f from '../../../../public/fonts/hf.ttf'

const myfont = localFont({ src: "../../../../public/fonts/hf.ttf" })

const Page = () => {
  return (
    <>
      <div className="flex h-20 w-screen p-2">
        <Image src='/mainlogo.png' alt="logo" height={10} width={40} className="mt-4 ml-3 mb-4" />
        <p className={cn("mt-4 ml-2 text-2xl text-[#103FEF]", myfont.className)}>Placementplus</p>
      </div>
      <div className="flex h-[78%]">
        <div className="h-full w-[60%] ml-6">
          <p className="text-2xl font-Inter text-[#103FEF] font-bold">Elevate your career journey with Placement Plus</p>
          <p className="text-sm font-Inter text-[#103FEF] font-bold mt-2">Unlock the Plus level Advantage</p>
          <div className="flex mt-4">
            <CheckCircle2Icon strokeWidth={1.5} size={20} />
            <p className="font-medium text-xs ml-2 mt-[2px]">Experience a user-friendly interface and custom tailored for each University.</p>
          </div>
          <div className="flex mt-4 ">
            <CheckCircle2Icon strokeWidth={1.5} size={20} />
            <p className="font-medium text-xs ml-2 mt-[2px]">Stay informed with alerts for exams and interviews.</p>
          </div><div className="flex mt-4">
            <CheckCircle2Icon strokeWidth={1.5} size={20} />
            <p className="font-medium text-xs ml-2 mt-[2px]">Access your  curated dashboard for insightful stats.</p>
          </div><div className="flex mt-4">
            <CheckCircle2Icon strokeWidth={1.5} size={20} />
            <p className="font-medium text-xs ml-2 mt-[2px]" >Monitor all your job applications effortlessly.</p>
          </div>
          <Image src='/hg2.gif' alt="gif" height={0} width={0} className="h-[70%] w-[50%] ml-48" />
        </div>
        <div className="flex items-center h-full w-[40%]">
          <SignUp path="/studentsignup" />
        </div>
      </div>
      <div className="flex justify-between items-center h-[10%] w-screen bg-[#103FEF] p-4 mt-[5%]">
        <p className="text-[12px] text-white">Copyright © 2024. All rights Reserved</p>
        <p className="text-[12px] text-white ml-[54%]">Contact us at demo@aec.edu.in </p>
        <p className="text-[12px] text-white mr-[5%]">Privacy Policy</p>
      </div>
    </>
  )
}


export default Page