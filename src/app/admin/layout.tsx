
import { SideNavbar } from "@/components/SideNavbar";
import TopBar from "@/components/TopBar";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import { cn } from "@/lib/utils";
import { Inter, Limelight } from "next/font/google";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });
import {
    useWindowWidth,
} from '@react-hook/window-size'

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const onlyWidth = useWindowWidth()
    const mobileWidth = onlyWidth < 768
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <body className={cn('min-h-screen w-full bg-[#F5F7FA] text-black', inter.className, { 'debug-screens': process.env.NODE_ENV === "development" })}>
            {/* <Header toggleSidebar={toggleSidebar} /> */}
            <Sidebar />

            <div className={`${mobileWidth ? 'mt-24 ml-10' : 'mt-24 ml-80'}`}>{children}</div>
        </body >

    )
}

// <Header toggleSidebar={toggleSidebar} />
// <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
