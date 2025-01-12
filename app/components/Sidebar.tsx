import Link from "next/link"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navigationItems = [
  { name: "首页", href: "/" },
  { name: "文章", href: "/posts" },
  { name: "标签", href: "/tags" },
  { name: "关于", href: "/about" },
]

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      onClose()
    }
  }

  return (
    <>
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
          "lg:translate-x-0"
        )}
      >
        <div className="flex h-[52px] items-center justify-end px-3">
          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="flex flex-col gap-1 p-3">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="flex h-9 items-center rounded-lg px-3 text-sm text-gray-600 hover:bg-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
} 