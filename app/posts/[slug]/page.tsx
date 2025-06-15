import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const MdxContent = useMDXComponent(post.body.code);

  return (
    <article className="container mx-auto px-4 py-8 prose lg:prose-xl">
      <h1>{post.title}</h1>
      <div className="text-gray-500 mb-8">
        发布于 {new Date(post.date).toLocaleDateString("zh-CN")}
      </div>
      <MdxContent />
    </article>
  );
}
