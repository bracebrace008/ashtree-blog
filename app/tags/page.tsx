"use client";

import { getAllTags, getPostsByTags } from "@/lib/tags";
import BlogCard from "@/app/components/BlogCard";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

function TagsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTags = searchParams.get("tag")?.split(",") || [];
  const [activeTags, setActiveTags] = useState<string[]>(initialTags);

  const tags = getAllTags().map((tag) => ({
    name: tag,
    value: tag,
  }));

  const posts = getPostsByTags(activeTags);

  const handleTagClick = (value: string) => {
    const newActiveTags = activeTags.includes(value)
      ? activeTags.filter((tag) => tag !== value)
      : [...activeTags, value];

    setActiveTags(newActiveTags);
    const query = newActiveTags.join(",");
    router.push(query ? `/tags?tag=${query}` : "/tags");
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">标签</h1>

        {/* 标签列表 */}
        <div className="mb-8 flex flex-wrap gap-4">
          {tags.map((tag) => (
            <div
              key={tag.name}
              onClick={() => handleTagClick(tag.value)}
              className={`rounded-2xl px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                activeTags.includes(tag.value)
                  ? "bg-[#4D4D4D] text-white"
                  : "bg-[#EAEAEA] text-[#4D4D4D] hover:bg-gray-200"
              }`}
            >
              {tag.name}
            </div>
          ))}
        </div>

        {/* 文章列表 */}
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

        {/* 无结果提示 */}
        {posts.length === 0 && (
          <div className="mt-8 text-center text-gray-500">没有找到相关文章</div>
        )}
      </div>
    </div>
  );
}

export default function TagsPage() {
  return (
    <Suspense>
      <TagsPageContent />
    </Suspense>
  );
}
