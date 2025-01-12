import Link from "next/link";

interface BlogCardProps {
  title: string;
  subtitle: string;
  date: string;
  categories: string[];
  href: string;
}

const BlogCard = ({ title, subtitle, date, categories, href }: BlogCardProps) => {
  return (
    <div className="flex h-[217px] w-full flex-col gap-2.5 px-1 py-1">
      <Link href={href}>
        <h3 className="font-inter text-2xl font-semibold leading-8">{title}</h3>
        <p className="text-base text-[#666F85]">{subtitle}</p>
        <time className="text-sm font-semibold text-[#A3A3A3]">{date}</time>
      </Link>
      <div className="flex gap-2">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/tags/${encodeURIComponent(category.toLowerCase())}`}
            className="rounded-2xl bg-[#EAEAEA] px-2.5 py-0.5 text-sm font-medium text-[#4D4D4D] hover:bg-gray-200"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
