
import { ClerkProvider, SignedOut } from '@clerk/nextjs'
import { Inter, Limelight } from "next/font/google";
// import { dark, neobrutalism } from '@clerk/themes';
import "./globals.css";
import { cn } from "@/lib/utils";
import { SideNavbar } from "@/components/SideNavbar";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider >
      <html lang="en">
        <body className={cn('min-h-screen w-full bg-white text-black flex', inter.className, { 'debug-screens': process.env.NODE_ENV === "development" })}>


          <div className="">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
