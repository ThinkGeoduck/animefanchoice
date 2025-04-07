import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { GoogleTagManager } from "@next/third-parties/google"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Anime Fan Choice Awards",
  description: "The awards show that truly represents what anime fans love, by the fans, for the fans.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <GoogleTagManager gtmId="G-KG0CT6MFPX" />
      </body>
    </html>
  )
}



import './globals.css'