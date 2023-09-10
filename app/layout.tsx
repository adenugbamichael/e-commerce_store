import type { Metadata } from "next"

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

import "./globals.css"

export const metadata: Metadata = {
  title: "Store",
  description: "Store - The place for all your purchases.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
