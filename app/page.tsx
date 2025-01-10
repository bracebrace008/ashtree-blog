import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import FigmaCard from "./components/FigmaCard"
import HeaderBg from "./components/HeaderBg"

export default function Home() {
  return (
    <div>
      <HeaderBg />
      <div className="grid gap-6">
        {allPosts.map((post) => (
          <FigmaCard
            key={post.slug}
            title={post.title}
            subtitle={post.description}
            createDate={new Date(post.date).toLocaleDateString("zh-CN")}
            categories={post.tags}
          />
        ))}
      </div>
    </div>
  )
}
