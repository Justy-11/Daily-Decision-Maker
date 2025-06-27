import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Daily Decision Maker - Can't Decide? We'll Help You Choose!",
  description: "Fun interactive tools to help you make decisions! Random food generator, movie picker, spin the wheel, this or that game, magic 8-ball and more. Perfect for indecisive moments.",
  keywords: "decision maker, random generator, what should I eat, movie picker, spin the wheel, this or that, magic 8 ball, random choice",
  authors: [{ name: "Daily Decision Maker" }],
  openGraph: {
    title: "Daily Decision Maker - Can't Decide? We'll Help You Choose!",
    description: "Fun interactive tools to help you make decisions! Random generators, games, and more.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
