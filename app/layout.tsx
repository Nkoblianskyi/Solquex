import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer"
import Header from "@/components/header"
import AgeVerification from "@/components/age-verification"
import TopDisclaimer from "@/components/top-disclaimer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Österreichischer Held - Soziales Spiel | Solquex",
  description:
    "Ein kostenloses soziales Spiel nur zu Unterhaltungszwecken. Führen Sie Ihren Helden durch historische Abenteuer. Kein Echtgeld, kein Glücksspiel, keine Preise, ab 18 Jahren.",
  keywords:
    "Soziales Spiel, österreichischer Held, soziales Spiel, kostenloses Spiel, kein Glücksspiel, historisches Abenteuer, Simulationsspiel, soziales Spiel",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", url: "/favicon.png", type: "image/svg+xml" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
    { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light">
          <AgeVerification />
          <TopDisclaimer />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
