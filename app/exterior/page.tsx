import type { Metadata } from "next";

import { siteConfig } from "@/data/site-content";
import { getWhatsAppLink } from "@/lib/whatsapp";

import { AudienceSection } from "@/components/sections/AudienceSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Psicóloga Brasileira Online para Quem Mora no Exterior | Clara Didier",
  description:
    "Terapia em português para brasileiros em Portugal, Reino Unido, Estados Unidos e Japão. Atendimento online com 17 anos de experiência. Agende sua sessão.",
};

export default function ExteriorPage() {
  const whatsappLink = getWhatsAppLink();

  return (
    <>
      {/* Hero adaptado para tráfego internacional */}
      <section id="inicio" className="relative overflow-hidden pb-24 pt-24 sm:pb-28 sm:pt-36 lg:pb-32 lg:pt-40">
        <div className="hero-noise pointer-events-none absolute inset-0 -z-20" />
        <div className="pointer-events-none absolute -left-32 top-16 -z-10 h-72 w-72 rounded-full bg-[color:var(--gold-200)]/45 blur-3xl" />
        <div className="pointer-events-none absolute -right-28 top-28 -z-10 h-96 w-96 rounded-full bg-[color:var(--gold-300)]/30 blur-3xl" />

        <Container>
          <Reveal>
            <p className="mb-5 inline-flex max-w-full whitespace-nowrap rounded-full border border-[color:var(--gold-300)] bg-white/80 px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.08em] text-[color:var(--gold-700)] sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.22em]">
              Online | Brasileiros no Exterior | Horário europeu e americano
            </p>
            <h1 className="max-w-2xl font-display text-[2.7rem] leading-[0.97] text-[color:var(--gold-950)] sm:text-[3.35rem] lg:text-[4.2rem]">
              Psicoterapia online em português, onde você estiver
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--slate-700)] sm:text-lg">
              Você mora fora do Brasil e sente saudade, pressão, solidão ou dificuldade de se adaptar? A terapia pode ser um espaço seguro — no seu idioma, no seu fuso.
            </p>

            <div className="mt-9">
              <Button
                href={whatsappLink}
                size="lg"
                ariaLabel="Agendar minha sessão"
                trackSource="hero_exterior"
                attention="glow"
              >
                Agendar minha sessão
              </Button>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--gold-800)]">
                {siteConfig.ctaSupportText}
              </p>
            </div>

            <ul className="mt-8 grid gap-2.5">
              {[
                `Psicóloga Clínica | ${siteConfig.crp}`,
                "17 anos de experiência | Atendimento online para Portugal, UK, EUA e Japão",
              ].map((pill) => (
                <li
                  key={pill}
                  className="inline-flex items-center gap-2 text-sm leading-relaxed text-[color:var(--slate-700)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold-500)]" aria-hidden="true" />
                  {pill}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <AudienceSection />
      <TestimonialsSection />
      <BenefitsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
