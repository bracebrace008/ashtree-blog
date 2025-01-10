import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import BlogCard from './components/BlogCard'

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid gap-6">
                {allPosts.map((post) => (
                    <BlogCard 
                        key={post.slug}
                        title={post.title}
                        description={post.description}
                        date={new Date(post.date).toLocaleDateString('zh-CN')}
                        categories={post.tags}
                    />
                ))}
            </div>
        </div>
    )
}