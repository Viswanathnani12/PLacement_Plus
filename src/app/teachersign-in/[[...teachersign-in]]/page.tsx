'use client'
import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-4xl font-bold mt-10">Teacher Signin</h1>
            <SignIn path="/teachersign-in" afterSignInUrl="/admin" />
        </div>
    );
}