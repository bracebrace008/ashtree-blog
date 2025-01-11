import Link from "next/link"
import { cn } from "@/lib/utils"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* 遮罩层 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-[240px] transform border-r bg-white transition-transform duration-200 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0" // 在大屏幕上始终显示
        )}
      >
        <div className="flex h-[52px] items-center px-5">
          <Link href="/" className="text-lg font-bold text-[#1a1a1a]">
            Brace's Blog
          </Link>
        </div>
        
        <nav className="flex flex-col gap-1 p-3">
          <Link
            href="/"
            className="flex h-9 items-center rounded-lg px-3 text-sm text-gray-600 hover:bg-gray-100"
          >
            首页
          </Link>
          <Link
            href="/posts"
            className="flex h-9 items-center rounded-lg px-3 text-sm text-gray-600 hover:bg-gray-100"
          >
            文章
          </Link>
          <Link
            href="/about"
            className="flex h-9 items-center rounded-lg px-3 text-sm text-gray-600 hover:bg-gray-100"
          >
            关于
          </Link>
        </nav>
      </aside>
    </>
  )
} 