export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <article className="container mx-auto px-4 py-8 prose lg:prose-xl">
      <h1>博客文章标题</h1>
      <div className="text-gray-500 mb-8">
        发布于 2024-03-21
      </div>
      <div>
        这里是博客文章的具体内容...
      </div>
    </article>
  )
} 