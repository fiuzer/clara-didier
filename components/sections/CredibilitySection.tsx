import { landingContent } from "@/data/site-content";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

const credibilityImages = [
  {
    src: "/images/third_image.JPG",
    alt: "Clara Didier em retrato profissional reforçando a proposta da sessão de credibilidade.",
  },
  {
    src: "/images/quarter_image.JPG",
    alt: "Retrato complementar de Clara Didier para a sessão de credibilidade.",
  },
] as const;

export function CredibilitySection() {
  const content = landingContent.credibility;

  return (
    <section id="credibilidade" aria-labelledby="credibilidade-title" className="bg-white py-24 lg:py-28">
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
              <Reveal
                key={item.title}
                delay={index * 0.06}
                className={
                  index === content.pillars.length - 1
                    ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.625rem)]"
                    : undefined
                }
              >
                <Card title={item.title} description={item.description} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="section-surface mx-auto max-w-md rounded-[2rem] p-3 sm:p-4">
            <ImageCarousel images={credibilityImages} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
