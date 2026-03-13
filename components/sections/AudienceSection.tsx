import { landingContent } from "@/data/site-content";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function AudienceSection() {
  const content = landingContent.audience;

  return (
    <section
      id="publico"
      aria-labelledby="publico-title"
      className="bg-[linear-gradient(180deg,rgba(248,239,218,0.4)_0%,rgba(255,255,255,0.8)_100%)] py-24 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionTitle
            id="publico-title"
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {content.cards.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <Card title={item.title} description={item.description} tag={`0${index + 1}`} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
