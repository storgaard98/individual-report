import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My individual learning report
      </h1>
      <p className="mb-4">
        {`Welcome to my blog about my individual learning through the course Innovation project.
         Through this blog I will share my experiences and thoughts from the course. I will present my learning goals and how I have worked to achieve them.
         This blog is developed using Next.js and Vercel. The blog is developed as my individual report.
        `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
