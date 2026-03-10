import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { FloatingWhatsAppButton } from "@/components/layout/FloatingWhatsAppButton";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TrackingScripts } from "@/components/layout/TrackingScripts";
import { seoSuggestions, siteConfig } from "@/data/site-content";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
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
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  keywords: [
    "psicologa",
    "psicoterapia individual",
    "terapia para jovens",
    "terapia para adultos",
    "atendimento psicológico",
    "saúde emocional",
    "psicologa para jovens e adultos",
    "agendamento de terapia",
    "apoio emocional",
    "desenvolvimento emocional",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: seoSuggestions.openGraphTitle,
    description: seoSuggestions.openGraphDescription,
    images: [
      {
        url: "/images/og-clara.svg",
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
    images: ["/images/og-clara.svg"],
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
      <body className={`${manrope.variable} ${cormorant.variable} font-sans antialiased`}>
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
