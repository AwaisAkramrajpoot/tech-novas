import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Novaa Tech - Modern Software Solutions",
  description: "Build the future with our innovative software development and custom solutions",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#003D7A",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
