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
  generator: "v0.dev",
  openGraph: {
    title: "Cobria - Cobranza Extrajudicial Inteligente y Ética",
    description:
      "Optimice su proceso de cobranza con IA y herramientas avanzadas de análisis de datos.",
    url: "https://cobria.vercel.app",
    siteName: "Cobria",
    images: [
      {
        url: "https://cobria.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cobria portada",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cobria - Cobranza Inteligente",
    description:
      "Solución de cobranza automatizada por IA para mayor eficiencia y ética.",
    images: ["https://cobria.vercel.app/og-image.jpg"],
  },
  metadataBase: new URL("https://cobria.vercel.app"),
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://cobria.vercel.app",
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
