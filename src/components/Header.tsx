'use client'

import { useState } from 'react'
import Image from "next/image"
import localFont from "next/font/local"
import { cn } from "@/lib/utils"
import { UserButton, useAuth } from '@clerk/nextjs'
import Link from "next/link"
import { AlignLeftIcon, File, FileDown, ReceiptTextIcon } from 'lucide-react'
import { auth, currentUser } from "@clerk/nextjs"
import { usePathname, useRouter } from 'next/navigation'
import { AddUser } from '@/actions/addUser'

const myfont = localFont({ src: "../../public/fonts/hf.ttf" })

const CustomPage = () => {
   const {userId } = useAuth() 
   
  return (
    <div className="max-w-md mx-auto">
      <form className="space-y-4" action={AddUser.bind(null  , userId  || " ")}>
         {userId}
        <div>
          <label htmlFor="college" className="block font-medium">College</label>
          <input type="text" id="college" className="w-full border rounded-md px-4 py-2 mt-1" name='college' />
        </div>
        <div>
          <label htmlFor="branch" className="block font-medium">Branch</label>
          <input type="text" id="branch" className="w-full border rounded-md px-4 py-2 mt-1" name='branch'/>
        </div>
        <div>
          <label htmlFor="Name" className="block font-medium">Name</label>
          <input type="text" id="Name" className="w-full border rounded-md px-4 py-2 mt-1" name="name"/>
        </div>
        <div>
          <label htmlFor="rollno" className="block font-medium">RollNo</label>
          <input type="text" id="Roll" className="w-full border rounded-md px-4 py-2 mt-1" name="rollno"/>
        </div>
        <div>
          <label htmlFor="passedoutbatch" className="block font-medium">Passed Out Batch</label>
          <input type="text" id="Roll" className="w-full border rounded-md px-4 py-2 mt-1" name="passedoutbatch"/>
        </div>
        <div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Submit</button>
        </div>
      </form>
    </div>
  );
};





const Header: React.FC = () => {
  const router = useRouter()

  // const isActive = (href: string) => {
  //   return router.pathname === href
  // }



  return (
    <div className='flex h-20 w-[100%] shadow-md shadow-[#d7daff] p-2'>
      <Link href='/student/sdashboard' className='flex'>
        <Image src='/mainlogo.png' alt="logo" height={10} width={40} className="mt-4 ml-6 mb-4" />
        <p className={cn("mt-4 ml-2 text-2xl text-[#103FEF]", myfont.className)}>Placementplus</p>
      </Link>

      <div className="flex mt-3 p-3 m-2">
      <style jsx>{`
        @keyframes linkHoverAnimation {
          0% {
            color: #2C62EE;
          }
          20% {
            color: #0BA02C; /* Change to gold */
          }
          40% {
            color: #F59BD8; /* Change to magenta */
          }
          60% {
            color: #E05151; /* Change to green */
          }
          80% {
            color: #A1E1FF; /* Change to tomato */
          }
          100% {
            color: #000000;
          }
        }

        .hover-futuristic:hover {
          animation: linkHoverAnimation 1s ease-in-out forwards infinite;
        }
      `}</style>
        {usePathname() === '/student/sjobs' ?
          <>
            <div className={`ml-10 mr-14 text-[#2C62EE] underline underline-offset-[5px]`}>

              <Link
                href='/student/sjobs'
                
              >
                Jobs
              </Link>
            </div>
          </>
          :
          <div className='ml-10 mr-14 hover-futuristic'>
            <Link
            href='/student/sjobs'
            
          >
            Jobs
          </Link>
          </div>
          
        }


        {usePathname() === '/student/sapplied' ?
          <>
            <div className='flex'>

              <Link
                href='/student/sapplied'
                className={`mr-14 text-[#2C62EE] underline underline-offset-[5px]`}
              >
                Applied
              </Link>
            </div>
          </>
          :
          <div className='mr-14 hover-futuristic'>
            <Link
            href='/student/sapplied'
          >
            Applied
          </Link>
          </div>
          
        }

        {usePathname() === '/student/ssaved' ?
          <>
            <div className='flex'>
              <Link
                href='/student/ssaved'
                className={`mr-14 text-[#2C62EE] underline underline-offset-[5px]`}
              >
                Saved
              </Link>
            </div>
          </>
          :
          <div className={`mr-14 hover-futuristic`}>
            <Link
            href='/student/ssaved'
            
          >
            Saved
          </Link>
          </div>
          
        }

        {usePathname() === '/student/sschedule' ?
          <>
            <div className='flex'>
              <Link
                href='/student/sschedule'
                className={`mr-14 text-[#2C62EE] underline underline-offset-[5px]`}
              >
                Schedule
              </Link>
            </div>
          </>
          :
          <div className={`mr-14 hover-futuristic`}>
            <Link
            href='/student/sschedule'
          >
            Schedule
          </Link>
          </div>
          
        }
      </div>

      <div className="flex mt-4 p-1 ml-[45%] border border-[#8089FE] h-10 items-center rounded-3xl bg-[#c7cce988]">
        {/* <UserButton afterSignOutUrl="/" /> */}
        <UserButton afterSignOutUrl='/'>
          <UserButton.UserProfilePage
            label="User Details"
            url="/"
            labelIcon={<ReceiptTextIcon color='black' className='ml-[-6px] mt-[-4px] ' />}
          >
            <CustomPage />
          </UserButton.UserProfilePage>
          <UserButton.UserProfilePage label="account" />
          <UserButton.UserProfilePage label="security" />
        </UserButton>
      </div>
    </div>
  )
}

export default Header