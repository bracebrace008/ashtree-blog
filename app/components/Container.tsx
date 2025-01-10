import BlogCard from "./BlogCard";

const blogPosts = [
  {
    title: "React UI Runtime",
    subtitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    date: "Sunday , 1 Jan 2023",
    categories: ["Design"],
    href: "/blog/react-ui-runtime",
  },
  // ... 更多博客文章
];

const Container = () => {
  return (
    <main className="flex flex-col gap-[30px] bg-white px-5 py-4">
      {blogPosts.map((post) => (
        <BlogCard key={post.title} {...post} />
      ))}
    </main>
  );
};

export default Container;
