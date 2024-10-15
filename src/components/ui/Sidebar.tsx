"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiHome, FiPlusCircle, FiCalendar, FiBarChart2, FiHelpCircle, } from 'react-icons/fi';
import { CalendarDays, ClipboardList, HomeIcon, Layers, Menu, MessageCircleIcon, MessageCircleQuestion } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation';

interface Option {
    id: string;
    label: string;
    href: string;
    icon: React.ReactNode;
}

const Sidebar = () => {


    const options: Option[] = [
        { id: '1', label: 'Dashboard', href: '/admin/dashboard', icon: <HomeIcon strokeWidth={1} /> },
        { id: '2', label: 'Add Job', href: '/admin/addjob', icon: <ClipboardList strokeWidth={1} /> },
        { id: '3', label: 'Schedule', href: '/admin/schedule', icon: <CalendarDays strokeWidth={1} /> },
        { id: '4', label: 'Statictics', href: '/admin/statistics', icon: <Layers strokeWidth={1} /> },
        // { id: '5', label: 'Support', href: '/admin/support', icon: <MessageCircleQuestion strokeWidth={1} /> },
    ];

    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };



    return (
        <div>
            <header className="fixed flex justify-between w-full top-0 z-50 bg-[#FFFFFF] border-b-2 text-white py-4 px-6 h-16">
                <button
                    className="md:hidden focus:outline-none"
                    onClick={toggleSidebar}
                    aria-label="Toggle Sidebar"
                >
                    <Menu className="w-6 h-6 text-black" />
                </button>
                <h1 className="text-xl text-black font-light ml-10">Placement+</h1>
                {/* <h1 className="text-2xl text-black font-normal mr-[1000px]">Hi Admin</h1> */}
                <UserButton afterSignOutUrl='/' />
            </header>

            {/* Sidebar */}
            <div
                className={`${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } fixed inset-y-0 border-r-2 left-0 w-64 bg-[#FFFFFF] text-black transition-transform duration-300 overflow-y-auto md:translate-x-0`}
            >
                <div className="py-4 px-6">
                    <button
                        onClick={toggleSidebar}
                        className="md:hidden focus:outline-none"
                        aria-label="Close Sidebar"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <nav>
                    <ul className='mt-20'>

                        {options.map((option) => (
                            <li
                                key={option.id}
                                className={`flex items-center py-2 px-6 m-4 cursor-pointer rounded-md ${selectedOption?.id === option.id ? 'bg-[#E7EEFF] text-blue-500' : ''
                                    }`}
                            >
                                <span className='mr-2'>{option.icon}</span>
                                <Link href={option.href} onClick={() => handleOptionClick(option)} >
                                    <Button variant='link' className={`${selectedOption?.id === option.id ? 'bg-[#E7EEFF] text-blue-500' : ''}`} asChild>

                                        <p className='text-md decoration-none'>{option.label}</p>

                                    </Button>
                                </Link>

                            </li>
                        ))}

                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;