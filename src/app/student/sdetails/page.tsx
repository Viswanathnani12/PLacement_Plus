'use client'
import React from 'react'
import { AddUser } from '@/actions/addUser'
import { UserButton, useAuth } from '@clerk/nextjs'


const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
    const {userId } = useAuth() 

    return (
        
        <div className="max-w-md mx-auto mt-2">
        <p className='ml-[35%] mt-[5%]'>User Details</p>
        <form className="space-y-4" action={AddUser.bind(null  , userId  || " ")}>
            
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
    )
}

export default page
