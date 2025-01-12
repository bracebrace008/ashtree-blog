import { Menu } from "lucide-react"
import Link from "next/link"

interface NavbarProps {
  onMenuClick: () => void
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="fixed top-0 z-40 w-full bg-[#EEEEEE]/80">
      <div className="flex h-[52px] items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold text-[#1a1a1a]">
          Brace's Blog
        </Link>
        
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
