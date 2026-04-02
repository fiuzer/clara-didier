import { landingContent } from "@/data/site-content";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function BenefitsSection() {
  const content = landingContent.benefits;

  return (
    <section id="beneficios" aria-labelledby="beneficios-title" className="bg-white py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionTitle id="beneficios-title" eyebrow={content.eyebrow} title={content.title} centered />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <Card title={item.title} description={item.description} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-relaxed text-[color:var(--slate-700)] sm:text-base">
            {content.footerText}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
