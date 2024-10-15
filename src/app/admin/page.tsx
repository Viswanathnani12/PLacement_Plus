"use client"
import { SignedOut, UserButton, auth } from "@clerk/nextjs";
import { LayoutDashboard } from 'lucide-react'
import React from 'react'
import { redirect } from "next/navigation";
import { checkRole } from "@/utils/roles";

const page = () => {
  const { sessionClaims } = auth();

  console.log(sessionClaims?.metadata.role);

  // If the user does not have the admin role, redirect them to the home page
  if (checkRole("admin")) {
    redirect("/admin/dashboard");
  }
  return (
    <>

    </>
  )
}

export default page
