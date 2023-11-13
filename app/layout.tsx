import type { Metadata } from 'next'
import './globals.css'
import { Rubik } from 'next/font/google'

const font = Rubik({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
  title: "Josh Ochalek's Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
