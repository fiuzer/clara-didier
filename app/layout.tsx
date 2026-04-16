import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Roboto } from "next/font/google";

import { FloatingWhatsAppButton } from "@/components/layout/FloatingWhatsAppButton";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TrackingScripts } from "@/components/layout/TrackingScripts";
import { seoSuggestions, siteConfig } from "@/data/site-content";

import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const description = seoSuggestions.description;
const title = seoSuggestions.title;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  applicationName: siteConfig.name,
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    shortcut: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/icon", type: "image/png" }],
  },
  description,
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
  keywords: [
    "psicóloga",
    "psicoterapia individual",
    "terapia para jovens",
    "terapia para adultos",
    "atendimento psicológico",
    "saúde emocional",
    "psicóloga para jovens e adultos",
    "agendamento de terapia",
    "apoio emocional",
    "desenvolvimento emocional",
  ],
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    siteName: `${siteConfig.name} | ${siteConfig.role}`,
    title: seoSuggestions.openGraphTitle,
    description: seoSuggestions.openGraphDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Landing page da psicóloga Clara Didier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoSuggestions.openGraphTitle,
    description: seoSuggestions.openGraphDescription,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "health",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fffcf5",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  url: siteConfig.siteUrl,
  description,
  sameAs: [],
  worksFor: {
    "@type": "Organization",
    name: siteConfig.name,
  },
  knowsAbout: [
    "Psicoterapia individual",
    "Terapia para jovens",
    "Terapia para adultos",
    "Saúde emocional",
    "Apoio emocional",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${roboto.variable} ${cormorant.variable} font-sans antialiased`}>
        <a href="#conteudo-principal" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <TrackingScripts />
        <Header />
        <main id="conteudo-principal">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
