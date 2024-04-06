
import { SignedOut, UserButton, auth } from "@clerk/nextjs";
import newJob from "@/db/models/Job"
// import { cookies } from "next/cookies";

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { CalendarFold } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


// import  Sidebar  from "@/components/Sidebar";

export default async function Page() {


    // const [file,setFile] = useState()



    const jobs = await newJob.find({})

    const filterCompletedJobs = (): any => {
        return jobs.filter(job => {
            const driveDate = new Date(job.driveDate);
            // console.log(driveDate);
            const currentDate = new Date();
            // console.log(currentDate);
            return driveDate < currentDate; // Assuming completed jobs are those with drive date before the current date
        });
    };

    const completedJobs = filterCompletedJobs();






    return (
        <>
            <h1>Currently Active</h1>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-[70%] "
            >
                <div className="w-full flex mt-4">
                    <CarouselContent>
                        {completedJobs.map((job: any) => (
                            <CarouselItem key={job.companyName} className="md:basis-1/2 lg:basis-1/3">
                                <Drawer key={job.companyName} >
                                    <DrawerTrigger asChild>
                                        <Card className="w-[100%] mr-8 p-6" key={job.companyName}>
                                            <p className="text-xl font-normal mb-2">{job.companyName}</p>
                                            <p className="text-sm mb-2">{job.jobRole}</p>
                                            <p className="text-[#9A9A9A] mb-2">{job.branches.join(", ")}</p>
                                            <p className="flex mb-4 font-normmal"><CalendarFold size={25} strokeWidth={1} absoluteStrokeWidth />
                                                <p className="ml-2">{new Date(job.driveDate).toLocaleDateString("en-GB", {
                                                    day: "2-digit",
                                                    month: "2-digit",
                                                    year: "numeric",
                                                })}</p> </p>
                                            <Button className="w-full h-8 bg-[#3D70F5] text-white font-light">Veiw Details</Button>
                                        </Card>
                                    </DrawerTrigger>
                                    <DrawerContent className="flex items-center justify-center m-2 bg-[#dbd4d3]">
                                        <div className="flex flex-col h-[55vh] font-semibold w-[20%] mt-4 mx-auto max-w-sm p-2 m-3 text-[#e83151]">
                                            <p className="mb-2">Company Name: {job.companyName}</p>
                                            <p className="mb-2">Job Role: {job.jobRole}</p>
                                            <p className="mb-2">CTC: {job.ctc}</p>
                                            <p className="flex mb-2">Drive Date:
                                                <p className="ml-2 text-sm mt-[1.5px]">{new Date(job.driveDate).toLocaleDateString("en-GB", {
                                                    day: "2-digit",
                                                    month: "2-digit",
                                                    year: "numeric",
                                                })}</p>
                                            </p>
                                            <p className="mb-2">Branches: {job.branches.join(", ")}</p>
                                            <p>Job Description: <br /> {job.jobDescription}</p>
                                        </div>
                                    </DrawerContent>
                                </Drawer>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </div>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <h1 className="mt-14">Waiting for Results</h1>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-[70%] "
            >
                <div className="w-full flex mt-4">
                    <CarouselContent>
                        {completedJobs.map((job: any) => (
                            <CarouselItem key={job.companyName} className="md:basis-1/2 sm:basis-1 lg:basis-1/3">
                                <Card className="w-[100%] mr-8 p-6" key={job.companyName}>
                                    <p className="text-xl font-normal mb-2">{job.companyName}</p>
                                    <p className="text-sm mb-2">{job.jobRole}</p>
                                    <p className="text-[#9A9A9A] mb-2">{job.branches.join(", ")}</p>
                                    <p className="flex mb-4 font-normmal"><CalendarFold size={25} strokeWidth={1} absoluteStrokeWidth />
                                        <p className="ml-2">{new Date(job.driveDate).toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "2-digit",
                                            year: "numeric",
                                        })}</p> </p>
                                    <Button className="w-full h-8  font-light" variant="destructive">Add Result</Button>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </div>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    );
}