import Link from "next/link";

interface BlogCardProps {
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
  href: string;
}

const BlogCard = ({ title, subtitle, date, tags, href }: BlogCardProps) => {
  return (
    <div className="flex h-[217px] w-full flex-col gap-2.5 px-1 py-1">
      <Link href={href}>
        <h3 className="font-inter text-2xl font-semibold leading-8">{title}</h3>
        <p className="text-base text-[#666F85] leading-8">{subtitle}</p>
        <time className="text-sm font-semibold text-[#A3A3A3] leading-8">{date}</time>
      </Link>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags?tag=${tag}`}
            className="rounded-2xl bg-[#EAEAEA] px-2.5 py-0.5 text-sm font-medium text-[#4D4D4D] hover:bg-gray-200"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
