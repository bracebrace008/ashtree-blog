import { getAllTags } from "@/lib/tags"
import Link from "next/link"

export default function TagsPage() {
  const tags = getAllTags()

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">标签</h1>
        <div className="flex flex-wrap gap-4">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${encodeURIComponent(tag.toLowerCase())}`}
              className="rounded-2xl bg-[#EAEAEA] px-4 py-2 text-sm font-medium text-[#4D4D4D] hover:bg-gray-200"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 