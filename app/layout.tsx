import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

const GTM_ID = "GTM-TDZF5WLZ"

export const metadata: Metadata = {
  title: "CollectUX — Recupera hasta un 35% más de tu cartera vencida con IA",
  description:
    "Automatiza la cobranza masiva con Agentes de IA éticos y multicanal (WhatsApp, SMS, Voz, Email). Para Cooperativas, Bancos y Fintechs en Ecuador y LATAM.",
  keywords:
    "cobranza inteligente, recuperación de cartera, bot de cobranza, automatización cobranza Ecuador, skip tracing, agentes IA cobranza, WhatsApp cobranza, cooperativas SEPS, CollectUX",
  openGraph: {
    title: "CollectUX — Recupera hasta un 35% más de tu cartera vencida con IA",
    description:
      "Automatiza la cobranza masiva con Agentes de IA éticos y multicanal (WhatsApp, SMS, Voz, Email). Para Cooperativas, Bancos y Fintechs en Ecuador y LATAM.",
    url: "https://www.collectux.com",
    siteName: "CollectUX",
    locale: "es_EC",
    images: [
      {
        url: "https://www.collectux.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CollectUX — Plataforma de cobranza inteligente con IA",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CollectUX — Cobranza con IA para LATAM",
    description:
      "Automatiza la cobranza masiva con Agentes de IA éticos y multicanal. Para Cooperativas, Bancos y Fintechs.",
    images: ["https://www.collectux.com/og-image.jpg"],
  },
  metadataBase: new URL("https://www.collectux.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.collectux.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) — debe ser el primer elemento del body */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        {/* Google Tag Manager — afterInteractive no bloquea LCP ni FCP */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </body>
    </html>
  )
}
