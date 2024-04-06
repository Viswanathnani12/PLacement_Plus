// components/Header.tsx
import React from 'react';

interface HeaderProps {
    toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
    return (
        <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
            <div className="flex items-center">
                <h1 className="text-xl font-bold">Placement Plus+</h1>
            </div>
            <div className="md:hidden">
                <button
                    onClick={toggleSidebar}
                    className="focus:outline-none"
                    aria-label="Toggle Sidebar"
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
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
            <div className="hidden md:block">
                <span className="text-gray-300">Hi, Admin</span>
            </div>
        </header>
    );
};

export default Header;