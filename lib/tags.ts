import { allPosts } from "contentlayer/generated";

export function getAllTags() {
  const tags = new Set<string>();
  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag.trim()));
  });
  return Array.from(tags);
}

export function getPostsByTags(tags: string[]) {
  if (tags.length === 0) return allPosts;

  return allPosts.filter((post) => {
    const postTags = post.tags?.map((t) => t.trim()) || [];
    return tags.some((tag) => postTags.includes(tag));
  });
}
