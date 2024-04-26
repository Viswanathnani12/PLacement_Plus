import newJob from "@/db/models/Job"

export default async function Page({ params }: { params: { id: any } }) {

    const jobs = await newJob.find({})
    // console.log(jobs)
    const job = jobs.find(j => j._id === params.id);
    // console.log(job);
    
    return (
    <>
    <div>{params.id}</div>
    </>
)}