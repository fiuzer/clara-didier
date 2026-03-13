import { landingContent, siteConfig } from "@/data/site-content";
import { getWhatsAppLink } from "@/lib/whatsapp";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ContactSection() {
  const content = landingContent.contact;
  const whatsappLink = getWhatsAppLink(
    "Ola, Clara! Gostaria de iniciar meu agendamento de terapia.",
  );

  return (
    <section id="contato" aria-labelledby="contato-title" className="bg-white pb-28 pt-12 lg:pb-32">
      <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <Reveal>
          <SectionTitle
            id="contato-title"
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
          <div className="mt-8 max-w-md">
            <Button
              href={whatsappLink}
              fullWidth
              size="lg"
              className="justify-center"
              trackSource="contact_cta"
              ariaLabel={content.button}
              withArrow
            >
              {content.button}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="rounded-3xl border border-[color:var(--gold-200)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(249,241,220,0.66))] p-7 shadow-[0_35px_80px_-58px_rgba(36,28,10,0.6)]">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--gold-600)]">
              {content.infoLabel}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--slate-700)]">
              {siteConfig.contact.city}
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-3 inline-block text-sm text-[color:var(--gold-700)] underline-offset-2 hover:underline"
            >
              {siteConfig.contact.email}
            </a>
            <p className="mt-6 text-sm leading-relaxed text-[color:var(--slate-700)]">
              Atendimento com foco em saude emocional, apoio emocional e desenvolvimento emocional para jovens e adultos.
            </p>
          </aside>
        </Reveal>
      </Container>
    </section>
  );
}
