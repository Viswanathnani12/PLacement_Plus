
import { SignUp } from "@clerk/nextjs";

export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())

  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}
export default function Page() {

  return (
    <div className="flex flex-col justify-center items-center gap-x-10">
      <h1 className="text-4xl font-bold mt-20">Teacher Signup</h1>
      <SignUp path="/teachersign-up" afterSignUpUrl="/teachersign-in" />
    </div>
  );

}