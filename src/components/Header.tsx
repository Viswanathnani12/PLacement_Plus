'use client'

import React from 'react'
import Image from "next/image"
import localFont from "next/font/local"
import { cn } from "@/lib/utils"
import { UserButton } from '@clerk/nextjs'
import Link from "next/link"
import { AlignLeftIcon, FileDown } from 'lucide-react'
import { auth, currentUser } from "@clerk/nextjs"
// import { useRouter } from 'next/router'

const myfont = localFont({ src: "../../public/fonts/hf.ttf" })

const Header: React.FC = () => {
  // const router = useRouter()

  // const isActive = (href: string) => {
  //   return router.pathname === href
  // }

  return (
    <div className='flex h-20 w-[100%] shadow-md shadow-[#d7daff] p-2'>
      <Link href='/student/sdashboard' className='flex'>
        <Image src='/mainlogo.png' alt="logo" height={10} width={40} className="mt-4 ml-6 mb-4" />
        <p className={cn("mt-4 ml-2 text-2xl text-[#103FEF]", myfont.className)}>Placementplus</p>
      </Link>

      <div className="mt-3 p-3 m-2">
        <Link
          href='/student/sjobs'
          className={cn("ml-20 mr-14")}
        >
          Jobs
        </Link>

        <Link
          href='/student/sapplied'
          className={cn("mr-14")}
        >
          Applied
        </Link>

        <Link
          href='/student/ssaved'
          className={cn("mr-14")}
        >
          Saved
        </Link>

        <Link
          href='/student/sschedule'
          className={cn("mr-14")}
        >
          Schedule
        </Link>
      </div>

      <div className="flex mt-4 p-1 ml-[50%] border border-[#8089FE] h-10 items-center rounded-3xl bg-[#c7cce988]">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}

export default Header