import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-[240px] border-r bg-white">
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
  )
} 