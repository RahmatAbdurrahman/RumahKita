import type React from "react"
import type { Metadata } from "next"
import { Alegreya_SC, Trocchi } from "next/font/google"
import "./globals.css"

const alegreyaSC = Alegreya_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-alegreya-sc",
  display: "swap",
})

const trocchi = Trocchi({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-trocchi",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Rumah Kita - Get your dream home",
  description: "Modern premium property website with 3D visualization",
  generator: "Rumah Kita",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${alegreyaSC.variable} ${trocchi.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
