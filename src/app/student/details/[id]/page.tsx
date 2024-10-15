import newJob from "@/db/models/Job"

export async function generateStaticParams() {
    const posts = await fetch('https://.../posts').then((res) => res.json())

    return posts.map((post: any) => ({
        id: post.id,
    }))
}
export default async function Page({ params }: { params: { id: any } }) {

    const jobs = await newJob.find({})
    // console.log(jobs)
    const job = jobs.find(j => j._id === params.id);
    // console.log(job);

    return (
        <>
            <div>{params.id}</div>
        </>
    )
}