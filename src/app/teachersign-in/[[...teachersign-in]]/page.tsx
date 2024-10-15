
import { SignIn } from "@clerk/nextjs";

export async function generateStaticParams() {
    const posts = await fetch('https://.../posts').then((res) => res.json())

    return posts.map((post: any) => ({
        slug: post.slug,
    }))
}
export default function Page() {
    return (
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-4xl font-bold mt-10">Teacher Signin</h1>
            <SignIn path="/teachersign-in" afterSignInUrl="/admin" />
        </div>
    );
}