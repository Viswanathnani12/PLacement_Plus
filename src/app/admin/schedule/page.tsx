import newJob from "@/db/models/Job"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Page = async () => {

  const jobs = await newJob.find({})
  const filterJobsByMonth = (): any => {
    const currentMonth = new Date().getMonth() + 1; // January is 0
    return jobs.filter(job => {
      const driveMonth = new Date(job.driveDate).getMonth() + 1;
      // console.log(driveMonth);
      return driveMonth === currentMonth;
    });
  };

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

  const filterCompletedJobs = (): any => {
    return jobs.filter(job => {
      const driveDate = new Date(job.driveDate);
      // console.log(driveDate);
      const currentDate = new Date();
      // console.log(currentDate);
      return driveDate < currentDate; // Assuming completed jobs are those with drive date before the current date
    });
  };
  // console.log(filterJobsByMonth());
  // console.log(filterJobsByWeek());
  // console.log(filterCompletedJobs());
  const jobsByMonth = filterJobsByMonth();
  const jobsByWeek = filterJobsByWeek();
  const completedJobs = filterCompletedJobs();
  return (
    <div className="">
      <p className="text-xl font-bold mb-4">Schedule</p>
      <div className="flex space-x-10" >
        <div className="h-full w-80 bg-[#F1F1F1] rounded-md">
          <div className="w-full bg-[#5A5A5A] text-[#FFFFFF] text-center rounded-tl-md rounded-tr-md">
            This Week
          </div>
          <div className="p-6">

            {jobsByWeek.map((job: any) => (

              // eslint-disable-next-line react/jsx-key
              <Card className="mb-3 bg-[#FFFFFF] ">
                <CardContent className="p-6">
                  <p className="font-medium">{job.companyName} for {job.batch} Batch</p>
                  <p>Drive Date: {new Date(job.driveDate).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}</p>
                  <p>CTC: {job.ctc}</p>
                  <p>Branches: {job.branches.join(", ")}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
        <div className="h-full w-80 bg-[#FFF9E9] rounded-md">
          <div className="w-full bg-[#F4BA24] text-[#FFFFFF] text-center rounded-tl-md rounded-tr-md">
            This Month
          </div>
          <div className="p-6">

            {jobsByMonth.map((job: any) => (

              // eslint-disable-next-line react/jsx-key
              <Card className="mb-3 bg-[#FFFFFF] ">
                <CardContent className="p-6">
                  <p className="font-medium">{job.companyName} for {job.batch} Batch</p>
                  <p>Drive Date: {new Date(job.driveDate).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}</p>
                  <p>CTC: {job.ctc}</p>
                  <p>Branches: {job.branches.join(", ")}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
        <div className="h-full w-80 bg-[#E8FFF3] rounded-md">
          <div className="w-full bg-[#0FD76B] text-[#FFFFFF] text-center rounded-tl-md rounded-tr-md">
            Completed
          </div>
          <div className="p-6">

            {completedJobs.map((job: any) => (

              // eslint-disable-next-line react/jsx-key
              <Card className="mb-3 bg-[#FFFFFF] ">
                <CardContent className="p-6">
                  <p className="font-medium">{job.companyName} for {job.batch} Batch</p>
                  <p>Drive Date: {new Date(job.driveDate).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}</p>
                  <p>CTC: {job.ctc}</p>
                  <p>Branches: {job.branches.join(", ")}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>

    </div>
  )
}

export default Page
