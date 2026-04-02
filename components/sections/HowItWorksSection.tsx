import { landingContent } from "@/data/site-content";
import { getWhatsAppLink } from "@/lib/whatsapp";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function HowItWorksSection() {
  const content = landingContent.howItWorks;
  const whatsappLink = getWhatsAppLink();

  return (
    <section id="como-funciona" aria-labelledby="como-funciona-title" className="bg-white py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionTitle
            id="como-funciona-title"
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            centered
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <article className="h-full rounded-3xl border border-[color:var(--gold-200)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(249,241,220,0.84))] p-7 shadow-[0_35px_80px_-65px_rgba(27,20,9,0.75)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-600)]">
                  Etapa 0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-[1.72rem] leading-tight text-[color:var(--gold-900)]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--slate-700)]">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-10 grid gap-4">
            {content.footerLines.map((line) => (
              <p key={line} className="text-sm leading-relaxed text-[color:var(--slate-700)] sm:text-base">
                {line}
              </p>
            ))}
            <div className="mt-2 flex justify-center">
              <Button
                href={whatsappLink}
                size="lg"
                ariaLabel={content.cta}
                trackSource="how_it_works_cta"
                withArrow
                attention="glow"
              >
                {content.cta}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
