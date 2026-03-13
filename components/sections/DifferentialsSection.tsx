import { landingContent } from "@/data/site-content";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function DifferentialsSection() {
  const content = landingContent.differentials;

  return (
    <section
      id="diferenciais"
      aria-labelledby="diferenciais-title"
      className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(249,245,235,0.72)_100%)] py-24 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionTitle id="diferenciais-title" eyebrow={content.eyebrow} title={content.title} />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {content.items.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <article className="group rounded-2xl border border-[color:var(--gold-200)] bg-white/90 px-6 py-5 shadow-[0_35px_70px_-62px_rgba(36,28,10,0.55)] transition-all duration-200 hover:-translate-y-0.5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-accent)]">
                  0{index + 1}
                </p>
                <h3 className="mt-2 border-l-[3px] border-[color:var(--gold-accent)] pl-3 text-base font-semibold leading-relaxed text-[color:var(--gold-900)]">
                  {item}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
