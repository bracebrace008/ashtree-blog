import { allPosts } from "contentlayer/generated"

export function getAllTags() {
  const tags = new Set<string>()
  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags)
}

export function getPostsByTag(tag: string) {
  return allPosts.filter((post) => post.tags?.includes(tag))
} 