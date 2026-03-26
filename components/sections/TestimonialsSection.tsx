import { landingContent } from "@/data/site-content";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function TestimonialsSection() {
  const content = landingContent.testimonials;

  return (
    <section
      id="depoimentos"
      aria-labelledby="depoimentos-title"
      className="bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(249,245,235,0.72))] py-24 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionTitle
            id="depoimentos-title"
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            centered
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {content.items.map((item, index) => (
            <Reveal key={`${item.name}-${index}`} delay={index * 0.05}>
              <article className="relative h-full overflow-hidden rounded-3xl border border-[color:var(--gold-200)] bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(255,245,220,0.9))] p-7 shadow-[0_42px_95px_-75px_rgba(27,20,9,0.95)]">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,var(--gold-metal-4),var(--gold-metal-3),var(--gold-metal-1),var(--gold-metal-2),var(--gold-metal-4))] opacity-95 shadow-[0_0_12px_rgba(213,159,43,0.42)]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold-600)]">
                  {item.name}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--slate-700)] sm:text-base">
                  &ldquo;{item.text}&rdquo;
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
