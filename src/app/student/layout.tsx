import type { Metadata } from "next";
import { ClerkProvider, SignedOut } from '@clerk/nextjs'
import { Inter, Limelight } from "next/font/google";
// import { dark, neobrutalism } from '@clerk/themes';
import { cn } from "@/lib/utils";
// import { SideNavbar } from "@/components/SideNavbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Placement Plus",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
       <div className="w-screen">
               <Header />
                <div className="ml-0">{children}</div>
                <Footer />
       </div>
                
                   

    );
}