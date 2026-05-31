import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Collectux — Recupera hasta un 35% más de tu cartera vencida con IA",
  description:
    "Collectux automatiza la cobranza masiva con Agentes de IA éticos y multicanal (WhatsApp, SMS, Voz, Email). Diseñado para Cooperativas, Bancos y Fintechs en Ecuador y LATAM.",
  keywords:
    "cobranza inteligente, recuperación de cartera, bot de cobranza, automatización cobranza Ecuador, skip tracing, agentes IA cobranza, WhatsApp cobranza, cooperativas SEPS, Collectux",
  generator: "v0.dev",
  openGraph: {
    title: "Collectux - Cobranza Extrajudicial Inteligente y Ética",
    description:
      "Optimice su proceso de cobranza con IA y herramientas avanzadas de análisis de datos.",
    url: "https://collectux.com",
    siteName: "Collectux",
    images: [
      {
        url: "https://collectux.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Collectux — Plataforma de cobranza inteligente",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Collectux - Cobranza Inteligente",
    description:
      "Solución de cobranza automatizada por IA para mayor eficiencia y ética.",
    images: ["https://collectux.com/og-image.jpg"],
  },
  metadataBase: new URL("https://collectux.com"),
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://collectux.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Agrega cualquier script adicional para SEO o analíticas aquí */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
