export default function DeveloperCard() {
  return (
    <div className="flex h-[206px] w-[317px] flex-col items-center gap-[20px] pb-[21px] pt-[12px]">
      <div className="font-inter text-center text-[24px] font-extrabold leading-[12px] text-[#000000]">
        The Full-Stack Developer
      </div>
      <div className="flex h-[64px] w-[231px] items-center justify-center gap-[5px] py-[27px]">
        {["Mysql", "JavaScript", "SpringBoot", "React", "Vue"].map((tech) => (
          <div
            key={tech}
            className="font-inter text-center text-[16px] font-light leading-[12px] text-[#4a4a4a] underline"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  )
}
