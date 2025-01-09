import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid gap-6">
                {allPosts.map((post) => (
                    <article key={post.slug} className="border rounded-lg p-6 hover:shadow-lg transition">
                        <h2 className="text-2xl font-semibold mb-2">
                            <Link href={`/posts/${post.slug}`}>
                                {post.title}
                            </Link>
                        </h2>
                        <p className="text-gray-600 mb-4">
                            {post.description}
                        </p>
                        <div className="text-sm text-gray-500">
                            发布于 {new Date(post.date).toLocaleDateString('zh-CN')}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}