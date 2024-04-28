"use client"
import { useUser } from "@clerk/clerk-react";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { redirect } from "next/navigation";
// import "../../public/fonts/f1.ttf"
const myfont = localFont({ src: "../../public/fonts/f1.ttf" })
// connect();

export default function Home() {
  const { isSignedIn } = useUser();
  if (isSignedIn) {
    redirect("/student/sdashboard");
  }
  return (
    // <div>
    //   {/* <UserButton afterSignOutUrl="/" /> */}
    //   Home Page
    //   <Link href={'/teachersign-in'}>Teacher Sign in</Link>
    //   <Link href={'/teachersign-up'}>Teacher Sign up</Link>
    // </div>
    <div className="absolute h-full mt-[-15px] mr-[-30px] w-screen">
      <div className="h-full m-[-20px] bg-no-repeat" style={{ backgroundImage: "url('./Vector.png')" }}>
        <div className="relative flex justify-evenly h-14 border border-[#E2E8F0] m-4 top-20 p-2 ml-72 shadow-md
          shadow-[#bde9f7af] rounded-md bg-[#FFFFFF] w-fit" >
          <div className="text-center p-3 mr-64 ">
            <p className="text-md font-normal ">Placementplus</p>
          </div>
          <div className="space-x-4 ml-64">
            {
              isSignedIn ? <div className="ml-60">
                <UserButton afterSignOutUrl="/" />
              </div> : <div className="space-x-4">
                <Button variant='link' className="underline"><Link href={'/teachersign-in'} className="text-xs">For Teachers</Link></Button>
                <Button variant='outline' className="border border-black w-28 h-8"><Link href={'/studentlogin'} className="text-xs">Login</Link></Button>
                <Button variant='default' className="border border-black w-28 h-8"><Link href={'/studentsignup'}><p className="font-light text-xs">Sign up</p></Link></Button>
              </div>
            }

          </div>
        </div>
      </div>
      <div className="relative flex ml-40  top-[-380px] w-full mt-[-100px] h-80">
        <div className="w-[60%] h-full ml-[-20px]">
          <p className={cn("text-6xl mb-4", myfont.className)}>Take your job profile to the <p className="text-[#103FEF]">Placementplus</p></p>
          <p className="text-lg font-light text-[#505B66]">Boost your job profile with Kudos from your peers for your skills<br />
            and traits. Land your dream job effortlessly. Our platform helps <br /> you keep track of all your jobs.
          </p>
        </div>
        <div className="relative w-[50%] h-full top-[-70px] ml-[-150px] mt-[20px]">
          <Image src={'/wel.gif'} alt="" width={0} height={0} className="h-[430px] w-[430px] "></Image>
        </div>
      </div>
      <div className="relative flex flex-col text-center ml-10  h-40 w-full top-[-300px] overflow-hidden">
        <p className="text-md font-bold font-inter text-[#505B66]">COMPANIES HIRING ON PLACEMENTPLUS</p>
        <style jsx>{`
          @keyframes marquee {
              0%  {
                transform: translateX(30%);
              }
              100% {
                transform: translateX(-30%);
              }
            }

            .animate-marquee {
              animation: marquee 23s linear infinite;
            }
          `}</style>
        <div className="flex animate-marquee  gap-8 items-center mt-2  h-24">
          <Image src={'/logo1.png'} alt="" height={200} width={180}></Image>
          <Image src={'/logo2.png'} alt="" height={200} width={180}></Image>
          <Image src={'/logo3.png'} alt="" height={200} width={180}></Image>
          <Image src={'/logo7.png'} alt="" height={200} width={180}></Image>
          <Image src={'/logo5.webp'} alt="" height={200} width={180}></Image>
          <Image src={'/logo6.png'} alt="" height={200} width={180}></Image>
        </div>
      </div>
      <div className="h-[40%]  mt-[-200px] w-[100%] flex items-center justify-center">
        <div className=" w-[50%] h-full mr-10 flex flex-col justify-end p-6">
          <p className="text-sm text-[#3D89F8] font-bold ml-[50%]">TIMELY ALERTS</p><br />
          <p className="ml-[50%] text-4xl font-bold font-Inter mt-1">Never miss an<br /> Interveiw again</p>
          <p className="text-md text-[#505B66] ml-[50%] mt-4">Get notifications for all your exams,<br /> interviews, and deadlines so that you never <br /> miss an opportunity.</p>
        </div>
        <div className=" w-[50%] h-full">
          <Image src='/g3.gif' height={0} width={0} alt="" className="h-[100%] w-[50%]" />
        </div>
      </div>
      <div className="h-[40%] mt-[10%] mb-[5%] flex items-center justify-center">
        <div className="w-[50%] h-full ml-[20%] mr-[-20%]">
          <Image src='/g2.gif' height={0} width={0} alt="" className="h-[100%] w-[50%]" />
        </div>
        <div className=" w-[50%] h-full flex flex-col justify-end p-6">
          <p className="text-sm text-[#3D89F8] font-bold ">STATS THAT MATTERS</p><br />
          <p className=" text-4xl font-bold font-Inter mt-1">Track your progress<br /> with all your history</p>
          <p className="text-md text-[#505B66] mt-4">Review and HI analyze your past interviews and<br /> exams to ensure you learn from previous<br /> experiences and avoid repeating mistakes in<br /> the future.</p>
        </div>
      </div>
      <div className="h-[40%] mb-[-150px] w-[100%] flex items-center justify-center">
        <div className=" w-[50%] h-full mr-10 flex flex-col justify-end p-6">
          <p className="text-sm text-[#3D89F8] font-bold ml-[50%]">STAY ORGANISED</p><br />
          <p className="ml-[50%] text-4xl font-bold font-Inter mt-1">Plan ahead your<br /> Schedule</p>
          <p className="text-md text-[#505B66] ml-[50%] mt-4">Explore the Schedule feature to effortlessly<br /> track upcoming interviews, exams, and<br /> deadlines in a user-friendly timeline format.<br /> Stay organized, prioritize tasks, and manage<br /> your time effectively</p>
        </div>
        <div className=" w-[50%] h-full">
          <Image src='/g1.gif' height={0} width={0} alt="" className="h-[100%] w-[40%]" />
        </div>
      </div>
      <div className="mt-[20%] h-[50%] bg-[#18191C]">
        <Image src='/Footer.svg' height={400} width={400} alt="" className="h-[100%] w-screen mt-[200px]" />
      </div>
    </div>

  );
}
