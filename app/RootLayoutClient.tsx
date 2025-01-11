"use client"

import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main className="mt-[52px] min-h-screen lg:ml-[240px]">{children}</main>
    </>
  )
} 