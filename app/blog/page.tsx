import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Learning Journey Blog',
  description: 'Read my blog about my individual learning in the course Innovation project.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Learning Journey Blog</h1>
      <BlogPosts />
    </section>
  )
}
