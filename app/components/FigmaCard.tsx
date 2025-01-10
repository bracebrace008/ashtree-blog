interface FigmaCardProps {
  title: string
  subtitle: string
  createDate: string
  categories: string[]
}

export default function FigmaCard({ title, subtitle, createDate, categories }: FigmaCardProps) {
  return (
    <div className="flex flex-col gap-[10px] py-[4px]">
      <h2 className="font-inter text-left text-[24px] font-semibold leading-[32px] text-[#000000]">
        {title}
      </h2>
      <p className="font-inter text-left text-[16px] font-normal leading-[24px] text-[#667085]">
        {subtitle}
      </p>
      <time className="font-inter text-left text-[14px] font-semibold leading-[20px] text-[#a3a3a3]">
        {createDate}
      </time>
      <div className="flex h-[34px] items-center gap-[8px]">
        {categories.map((category) => (
          <div
            key={category}
            className="flex h-[24px] items-center justify-center rounded-2xl bg-[#EAEAEA] px-[10px] py-[2px]"
          >
            <span className="font-inter text-center text-[14px] font-medium leading-[20px] text-[#4D4D4D]">
              {category}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
