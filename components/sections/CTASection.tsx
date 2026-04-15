import { landingContent } from "@/data/site-content";
import { getWhatsAppLink } from "@/lib/whatsapp";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection() {
  const content = landingContent.cta;
  const whatsappLink = getWhatsAppLink();

  return (
    <section id="agendar" aria-labelledby="agendar-title" className="py-24 lg:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.1rem] border border-[color:var(--gold-300)] bg-[linear-gradient(130deg,rgba(255,255,255,0.95),rgba(247,240,220,0.88))] px-6 py-14 text-center shadow-[0_50px_110px_-70px_rgba(24,18,10,0.9)] sm:px-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[color:var(--gold-400)]/34 blur-2xl" />
            <h2
              id="agendar-title"
              className="relative font-display text-4xl leading-tight text-[color:var(--gold-950)] sm:text-5xl"
            >
              {content.title}
            </h2>
            <p className="relative mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[color:var(--slate-700)] sm:text-lg">
              {content.description}
            </p>
            <div className="relative mt-9">
              <Button
                href={whatsappLink}
                size="lg"
                ariaLabel={content.button}
                trackSource="middle_cta"
                className="w-full sm:min-w-72 sm:w-auto"
                withArrow
                attention="glow"
              >
                {content.button}
              </Button>
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[color:var(--gold-600)]">
              {content.supportText}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
