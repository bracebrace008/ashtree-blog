import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '我的博客',
  description: '使用 Next.js App Router 创建的博客',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 