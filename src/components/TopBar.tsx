import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const TopBar = () => {
    return (
        <nav className="w-full bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
            <div className="flex space-x-4">
                <Link href="/" className="hover:text-gray-300">
                    Dashboard
                </Link>
                <Link href="/add-job" className="hover:text-gray-300">
                    Add Job
                </Link>
                <Link href="/schedule" className="hover:text-gray-300">
                    Schedule
                </Link>
                <Link href="/stats" className="hover:text-gray-300">
                    Stats
                </Link>
                <Link href="/support" className="hover:text-gray-300">
                    Support
                </Link>
            </div>
            <div>
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
                <SignedOut>
                    <div className="text-white">Sign in</div>
                </SignedOut>
            </div>
        </nav>
    );
};

export default TopBar;