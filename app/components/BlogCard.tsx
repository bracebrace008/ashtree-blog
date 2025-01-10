interface BlogCardProps {
  title: string
  description: string
  date: string
  categories: string[]
}

export default function PresentationCard({ title, description, date, categories }: BlogCardProps) {
  return (
    <div className="flex flex-col gap-[10px] py-[4px]">
      <div className="font-inter text-left text-[24px] font-semibold leading-[32px] text-[#000000]">
        {title}
      </div>
      <div className="font-inter text-left text-[16px] font-normal leading-[24px] text-[#667085]">
        {description}
      </div>
      <div className="font-inter text-left text-[14px] font-semibold leading-[20px] text-[#a3a3a3]">
        {date}
      </div>
      <div className="flex h-[34px] w-[280px] items-center gap-[8px]">
        {categories.map((category) => (
          <div
            key={category}
            className="flex h-[24px] w-[67px] items-center justify-center p-[10px]"
          >
            <div className="font-inter text-center text-[14px] font-medium leading-[20px] text-[#4d4d4d]">
              {category}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
