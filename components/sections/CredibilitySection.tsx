import Image from "next/image";

import { landingContent } from "@/data/site-content";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function CredibilitySection() {
  const content = landingContent.credibility;

  return (
    <section id="credibilidade" aria-labelledby="credibilidade-title" className="py-24 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <Reveal>
            <SectionTitle
              id="credibilidade-title"
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.description}
            />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {content.pillars.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <Card title={item.title} description={item.description} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="section-surface mx-auto max-w-md rounded-[2rem] p-3 sm:p-4">
            {/* Replacing note: optional supporting image/card for future professional photos */}
            <Image
              src="/images/detail-placeholder.svg"
              alt="Elemento visual complementar reforcando credibilidade profissional"
              width={560}
              height={720}
              className="h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
