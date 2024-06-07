import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My individual learning report
      </h1>
      <p className="mb-4">
        {`
Welcome to my blog, where I document my personal learning journey through the Innovation Project course. 
This space is dedicated to sharing my experiences, insights, and reflections on various topics 
including Next.js, green coding, and project management. 

In this blog, you'll find posts about my learning goals, the challenges I face, 
and the solutions I come up with. I explore efficient coding practices, 
sustainable development, and effective project management techniques. 
Additionally, I share my experience of living as a vegan for a week.

Whether you're a student, a professor, a developer, or just someone interested in innovation 
and sustainable coding, I hope you find value in my experiences and insights. 
Join me on this journey of exploration and growth!
        `}
      </p>
      <p className="mb-4">
      To start, please read the introduction.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
