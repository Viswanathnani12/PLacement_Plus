import { SignUp } from "@clerk/nextjs"


const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-x-10">
      <h1 className="text-4xl font-bold mt-20">Student Signup</h1>
      <SignUp path="/studentsignup" />
    </div>
  )
}

export default Page