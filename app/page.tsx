import { allPosts } from "contentlayer/generated"
import BlogCard from "./components/BlogCard"
import HeaderBg from "./components/HeaderBg"

export default function Home() {
  const posts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <div className="min-h-screen">
      <HeaderBg />
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              href={`/posts/${post.slug}`}
              title={post.title}
              subtitle={post.description}
              date={new Date(post.date).toLocaleDateString("zh-CN")}
              categories={post.tags || []}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
