import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cobria - Cobranza Extrajudicial Inteligente y Ética",
  description:
    "Optimice su proceso de cobranza con nuestra solución automatizada por IA. Herramientas avanzadas de análisis de datos para una cobranza eficiente y ética.",
  keywords:
    "cobranza, extrajudicial, automatización, IA, inteligencia artificial, recuperación de deudas, análisis de datos, ética",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'