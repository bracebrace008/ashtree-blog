import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import FigmaCard from "./components/FigmaCard"
import HeaderBg from "./components/HeaderBg"

export default function Home() {
  return (
    <div>
      <HeaderBg />
      <div className="grid w-full gap-6 px-[20px]">
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
