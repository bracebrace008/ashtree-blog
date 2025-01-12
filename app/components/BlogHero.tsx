import Link from "next/link";

const categories = [
  { name: "Mysql", href: "/category/mysql" },
  { name: "JavaScript", href: "/category/javascript" },
  { name: "SpringBoot", href: "/category/springboot" },
  { name: "React", href: "/category/react" },
  { name: "Vue", href: "/category/vue" },
];

const HeaderBg = () => {
  return (
    <div className="flex flex-col items-center bg-[#EEEEEE] py-3 pb-[21px]">
      <h2 className="whitespace-pre-line text-center font-inter text-2xl font-extrabold leading-[32px]">
        {"The Full-Stack\nDeveloper"}
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-[5px] py-[27px] px-[50px]">
        {categories.map((category, index) => (
          <>
            <Link
              key={category.name}
              href={category.href}
              className="font-inter text-base font-light text-[#4A4A4A] underline"
            >
              {category.name}
            </Link>
            {index < categories.length - 1 && (
              <span className="h-4 w-px bg-[#A5A5A5]" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default HeaderBg;
