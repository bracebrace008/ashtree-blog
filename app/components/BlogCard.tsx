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
    <Link
      href={href}
      className="flex h-[217px] w-full flex-col gap-2.5 px-1 py-1"
    >
      <h3 className="font-inter text-2xl font-semibold leading-8">{title}</h3>
      <p className="text-base text-[#666F85]">{subtitle}</p>
      <time className="text-sm font-semibold text-[#A3A3A3]">{date}</time>
      <div className="flex gap-2">
        {categories.map((category) => (
          <span
            key={category}
            className="rounded-2xl bg-[#EAEAEA] px-2.5 py-0.5 text-sm font-medium text-[#4D4D4D]"
          >
            {category}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default BlogCard;
