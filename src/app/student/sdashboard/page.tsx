import Image from "next/image";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { UserButton } from '@clerk/nextjs'
import { auth } from "@clerk/nextjs";
import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";
import { connect } from "@/dbConfig/dbConfig";
import Link from "next/link";
// import "../../../../public/fonts/hf.tff";

import Header from "@/components/Header";
import { Fullscreen, LockKeyholeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import img from '../../../../public/cbg1.png'
connect()

const myfont = localFont({ src: "../../../../public/fonts/hf.ttf" })

const page = () => {
    const { sessionClaims } = auth();

    // console.log(sessionClaims?.metadata.role);

    // If the user does not have the admin role, redirect them to the home page
    if (checkRole("admin")) {
        redirect("/admin");
    }
    return (
        // <div>
        //     Student DashBoard
        //     <UserButton afterSignOutUrl='/' appearance={{
        //         elements: {
        //         },
        //     }}
        //     />
        // </div>
        <>
            {/* <Header /> */}
            <div className="flex h-[50%] mt-8">
                <div className="h-full w-[50%] p-6">
                    <div className="flex">
                        <p className="font-Inter font-extrabold text-[70px] text-[#2C62EE] ml-10">Unlock</p>
                        <p className="font-Inter font-extrabold text-[70px] ml-4">your Career</p>
                    </div>
                    <div>
                        <p className="ml-10 text-[#989898] text-lg font-normal">Explore opportunities from your campus at your fingertips,<br /> never miss an opportunity again using placementplus</p>
                    </div>
                    <div className="p-10">
                        <Button variant="outline" className="border border-[#3F4DFC] text-[#3F4DFC]" size={'lg'}>Apply Now ↗</Button>
                    </div>
                </div>
                <div className="w-[50%] flex items-end">
                    <Image src='/sdashgif.gif' height={0} width={0} alt='' className="h-[120%] w-[75%]" />
                </div>
            </div>
            <div className="w-screen h-[20%] mt-[-80px]">
                <div className="ml-20">
                    <p className="flex text-2xl font-bold">Get <p className="text-[#8089FE] ml-2 mr-2">plus</p> features every step of the way</p>
                </div>
                <div className=" h-[88%] flex">
                    <Image src='/sd1.png' height={110} width={300} alt="" className="ml-20 mt-4" />
                    <Image src='/sd2.png' height={110} width={300} alt="" className="ml-20 mt-4" />
                    <Image src='/sd3.png' height={110} width={300} alt="" className="ml-20 mt-4" />
                    <Image src='/sd4.png' height={110} width={300} alt="" className="ml-20 mt-4" />
                </div>
            </div>
        </>
    )
}

export default page
