export default function HeaderBg() {
  const technologies = ["Mysql", "JavaScript", "SpringBoot", "React", "Vue"]

  return (
    <div className="flex flex-col items-center gap-[20px] bg-[#EEEEEE] pb-[21px] pt-[12px]">
      <h1 className="font-inter whitespace-pre-line text-center text-[24px] font-extrabold leading-[32px] text-black">
        {"The Full-Stack\nDeveloper"}
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-[5px] py-[27px] px-[40px]">
        {technologies.map((tech, index) => (
          <>
            <span
              key={tech}
              className="font-inter text-center text-[16px] font-light leading-[12px] text-[#4A4A4A] underline"
            >
              {tech}
            </span>
            {index < technologies.length - 1 && <div className="h-[16px] w-[1px] bg-[#A5A5A5]" />}
          </>
        ))}
      </div>
    </div>
  )
}
