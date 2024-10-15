
// import { SignedOut, UserButton, auth } from "@clerk/nextjs";
import newJob from "@/db/models/Job"
// import { cookies } from "next/cookies";

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { CalendarFold } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import FileInput from "@/components/FileInput";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { DrawerContent } from "@/components/ui/drawer";


// import  Sidebar  from "@/components/Sidebar";

export default async function Page() {


    // const [file,setFile] = useState()
    const filterJobsByWeek = (): any => {
        const currentDate = new Date();
        const currentWeekStart = currentDate.getDate() - currentDate.getDay();
        const currentWeekEnd = currentWeekStart + 6;
        // console.log(currentWeekStart);
        // console.log(currentWeekEnd);

        return jobs.filter(job => {
            const driveDate = new Date(job.driveDate).getDate();
            // console.log(driveDate);
            return driveDate >= currentWeekStart && driveDate <= currentWeekEnd;
        });
    };


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
    const jobsByWeek = filterJobsByWeek();






    return (
        <>
            <h1 className="font-bold mb-2">Currently Active</h1>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-[70%]"
            >
                <CarouselContent>
                    {jobsByWeek.map((job: any) => (
                        <CarouselItem key={job.companyName} className="md:basis-1/2 lg:basis-1/3">
                            <Card className="w-[100%] p-6" key={job.companyName}>
                                <p className="text-xl font-normal mb-2">{job.companyName}</p>
                                <p className="text-sm mb-2">{job.jobRole}</p>
                                <p className="text-[#9A9A9A] mb-2">{job.branches.join(", ")}</p>
                                <p className="flex mb-4 font-normmal">
                                    <CalendarFold size={25} strokeWidth={1} absoluteStrokeWidth />
                                    <p className="ml-2">
                                        {new Date(job.driveDate).toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "2-digit",
                                            year: "numeric",
                                        })}
                                    </p>
                                </p>
                                <Dialog>
                                    <DialogTrigger asChild >
                                        <Button variant={'destructive'} className="w-full">
                                            Veiw Details
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogDescription>
                                            <div className="p-4 text-black flex flex-col space-y-2">
                                                <p>Company Name: {job.companyName}</p>
                                                <p>Job Role: {job.jobRole}</p>
                                                <p>Branches: {job.branches.join(", ")}</p>
                                                <p className="flex font-normmal">Date:
                                                    <p className="ml-2">{new Date(job.driveDate).toLocaleDateString("en-GB", {
                                                        day: "2-digit",
                                                        month: "2-digit",
                                                        year: "numeric",
                                                    })}</p>
                                                </p>
                                                <p>Job Role: {job.jobLocation}</p>
                                                <p>CTC: {job.ctc}</p>
                                                <p>Batch: {job.batch}</p>
                                                <p>Job Description:<br /> {job.jobDescription}</p>
                                            </div>
                                        </DialogDescription>
                                    </DialogContent>
                                </Dialog>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <h1 className="mt-14 font-bold">Waiting for Results</h1>
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
                                        })}</p>
                                    </p>
                                    <FileInput />
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