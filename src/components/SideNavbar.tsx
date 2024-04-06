"use client"
import { useState } from 'react'
import { Nav } from './ui/nav'
import {
  BarChartHorizontalBig,
  CalendarClock,
  ChevronLeft,
  ChevronRight,
  FilePlus2,
  HelpCircleIcon,
  LayoutDashboard,
} from "lucide-react"
import { Button } from './ui/button'
import {
  useWindowWidth,
} from '@react-hook/window-size'
interface Props {

}

export const SideNavbar = ({ }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const onlyWidth = useWindowWidth()
  const mobileWidth = onlyWidth < 768

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <>

      {mobileWidth ?

        <div className='relative mt-10 min-w-[15px] pl-4 border-r pb-10 pt-24'>
          <Nav
            isCollapsed={mobileWidth ? true : isCollapsed}
            links={[
              {
                title: "Dashboard",
                label: "",
                icon: LayoutDashboard,
                variant: "default",
                href: "/admin/dashboard"
              },
              {
                title: "Add Job",
                label: "",
                icon: FilePlus2,
                variant: "ghost",
                href: "/admin/addjob"
              },
              {
                title: "Schedule",
                label: "",
                icon: CalendarClock,
                variant: "ghost",
                href: "/admin/schedule"
              },
              {
                title: "Stats",
                label: "",
                icon: BarChartHorizontalBig,
                variant: "ghost",
                href: "/admin/statistics"
              },
              {
                title: "Support",
                label: "",
                icon: HelpCircleIcon,
                variant: "ghost",
                href: "/admin/support"
              },
            ]}
          />
        </div>
        :
        <div className='relative min-w-[80px] border-r pl-6 pr-10 pb-10 pt-24'>
          <div className='absolute right-[-20px] top-7'>
            <Button onClick={toggleSidebar} variant='outline' className='rounded-full p-2' >
              {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
            </Button >
          </div >
          <Nav
            isCollapsed={mobileWidth ? true : isCollapsed} links={[
              {
                title: "Dashboard",
                label: "",
                icon: LayoutDashboard,
                variant: "default",
                href: "/admin/dashboard"
              },
              {
                title: "Add Job",
                label: "",
                icon: FilePlus2,
                variant: "ghost",
                href: "/admin/addjob"
              },
              {
                title: "Schedule",
                label: "",
                icon: CalendarClock,
                variant: "ghost",
                href: "/admin/schedule"
              },
              {
                title: "Stats",
                label: "",
                icon: BarChartHorizontalBig,
                variant: "ghost",
                href: "/admin/statistics"
              },
              {
                title: "Support",
                label: "",
                icon: HelpCircleIcon,
                variant: "ghost",
                href: "/admin/support"
              },
            ]} />
        </div>
      }
    </>
  )
}
