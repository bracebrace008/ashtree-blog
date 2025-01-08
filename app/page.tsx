import Link from 'next/link'

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">欢迎来到我的博客</h1>

            <div className="grid gap-6">
                {/* 博客文章预览卡片 */}
                <article className="border rounded-lg p-6 hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold mb-2">
                        <Link href="/posts/first-post">
                            第一篇博客文章
                        </Link>
                    </h2>
                    <p className="text-gray-600 mb-4">
                        这是我的第一篇博客文章的简介...
                    </p>
                    <div className="text-sm text-gray-500">
                        发布于 2024-03-21
                    </div>
                </article>
            </div>
        </div>
    )
} 