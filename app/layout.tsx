import "./globals.css"
import type { Metadata } from "next"

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
      <body>{children}</body>
    </html>
  )
}
