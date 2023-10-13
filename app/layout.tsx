import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SideBar } from './components/SideBar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Masterizando o Tailwind',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark antialiased">
      <body className={inter.className}>
        <div className=" min-h-screen dark:bg-zinc-900 lg:grid lg:grid-cols-app">
          <SideBar />
          <main className="max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2 lg:px-4 lg:pb-12 lg:pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
