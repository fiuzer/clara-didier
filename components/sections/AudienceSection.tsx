import { landingContent, siteConfig } from "@/data/site-content";
import { getWhatsAppLink } from "@/lib/whatsapp";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function AudienceSection() {
  const content = landingContent.audience;
  const whatsappLink = getWhatsAppLink();

  return (
    <section
      id="onde-estiver"
      aria-labelledby="onde-estiver-title"
      className="bg-[linear-gradient(180deg,rgba(248,239,218,0.4)_0%,rgba(255,255,255,0.8)_100%)] py-24 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionTitle
            id="onde-estiver-title"
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-1">
          {content.blocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 0.08} className="mx-auto w-full max-w-4xl">
              <article className="group relative overflow-hidden rounded-3xl border border-[color:var(--gold-200)] bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(255,245,220,0.9))] p-7 shadow-[0_42px_95px_-75px_rgba(27,20,9,0.95)]">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,var(--gold-metal-4),var(--gold-metal-3),var(--gold-metal-1),var(--gold-metal-2),var(--gold-metal-4))] opacity-95 shadow-[0_0_12px_rgba(213,159,43,0.42)]" />
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--gold-600)]">
                  0{index + 1}
                </p>
                <h3 className="font-display text-[1.72rem] leading-tight text-[color:var(--gold-900)]">
                  {block.title}
                </h3>
                <ul className="mt-5 grid gap-2.5">
                  {block.points.map((point) => (
                    <li
                      key={point}
                      className="inline-flex items-start gap-2.5 text-sm leading-relaxed text-[color:var(--slate-700)]"
                    >
                      <span className="mt-[0.44rem] h-1.5 w-1.5 rounded-full bg-[color:var(--gold-500)]" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-8 max-w-4xl text-sm leading-relaxed text-[color:var(--slate-700)] sm:text-base">
            {content.supportText}
          </p>
          <div className="mx-auto mt-8 w-full max-w-4xl">
            <Button
              href={whatsappLink}
              size="lg"
              ariaLabel={content.cta}
              trackSource="exterior_cta"
              attention="glow"
            >
              {content.cta}
            </Button>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--gold-800)]">
              {siteConfig.ctaSupportText}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
