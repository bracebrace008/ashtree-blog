import { allPosts } from "contentlayer/generated"
import BlogCard from "@/app/components/BlogCard"
import { getAllTags, getPostsByTag } from "@/lib/tags"
import { notFound } from "next/navigation"

interface TagPageProps {
  params: {
    tag: string
  }
}

export function generateStaticParams() {
  const tags = getAllTags()
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag.toLowerCase()),
  }))
}

export default function TagPage({ params }: TagPageProps) {
  const tag = decodeURIComponent(params.tag)
  const posts = getPostsByTag(tag)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">标签：{tag}</h1>
        <div className="grid gap-6">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              href={`/posts/${post.slug}`}
              title={post.title}
              subtitle={post.description}
              date={new Date(post.date).toLocaleDateString("zh-CN")}
              tags={post.tags || []}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 