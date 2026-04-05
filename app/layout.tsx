import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "AUTOMATIX Studio - Diseño Web y Soluciones Digitales",
  description: "Creamos páginas web y soluciones simples para que tu negocio reciba más consultas. Diseños personalizados, sistemas de turnos y automatizaciones.",
  verification: {
    google: "eaOV0OH1wOI2KnwTzy7DfEDq41hw_7zil3bl00pmYC8",
  },
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable} antialiased dark`}>
      <body className="font-sans">
        <GoogleTagManager gtmId="GTM-PZTQWJGT" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
