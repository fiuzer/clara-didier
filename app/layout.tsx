import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Roboto } from "next/font/google";

import { FloatingWhatsAppButton } from "@/components/layout/FloatingWhatsAppButton";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TrackingScripts } from "@/components/layout/TrackingScripts";
import { landingContent, siteConfig } from "@/data/site-content";

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

const title = "Psicóloga Online para Brasileiros no Exterior | Clara Didier";
const description =
  "Você mora fora do Brasil e precisa de apoio emocional em português? Clara Didier oferece psicoterapia online para brasileiros em Portugal, UK, EUA e Japão. Agende sua sessão.";
const ogTitle = "Agendar sessão com Clara Didier | Psicoterapia online para brasileiros";
const ogDescription =
  "Psicoterapia online em português para brasileiros que vivem fora do Brasil. Atendimento humanizado com foco em ansiedade, adaptação cultural, relacionamentos e saúde emocional.";

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
    title: ogTitle,
    description: ogDescription,
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
    title: ogTitle,
    description: ogDescription,
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
  "@type": ["Person", "MedicalBusiness"],
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  url: siteConfig.siteUrl,
  description:
    "Psicóloga clínica com 17 anos de experiência. Psicoterapia online para brasileiros no Brasil e no exterior.",
  medicalSpecialty: "Psychiatry",
  availableService: {
    "@type": "MedicalTherapy",
    name: "Psicoterapia online individual",
  },
  areaServed: ["Brasil", "Portugal", "Reino Unido", "Estados Unidos", "Japão"],
  knowsLanguage: "pt-BR",
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

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: landingContent.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </body>
    </html>
  );
}
