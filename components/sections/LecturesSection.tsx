import { landingContent } from "@/data/site-content";
import { getWhatsAppLink } from "@/lib/whatsapp";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

const lectureImages = [
  {
    src: "/images/clara_palestra.png",
    alt: "Clara Didier durante uma palestra sobre saude mental.",
  },
  {
    src: "/images/palestra_1.jpeg",
    alt: "Registro de uma palestra conduzida por Clara Didier.",
  },
  {
    src: "/images/palestra_2.jpeg",
    alt: "Clara Didier em atividade durante uma palestra.",
  },
] as const;

export function LecturesSection() {
  const content = landingContent.lectures;
  const whatsappLink = getWhatsAppLink("Olá, Clara! Gostaria de solicitar uma proposta de palestra.");

  return (
    <section id="palestras" aria-labelledby="palestras-title" className="bg-white py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionTitle
            id="palestras-title"
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
        </Reveal>

        <Reveal delay={0.04}>
          <div className="mt-10 section-surface mx-auto max-w-md rounded-[2rem] p-3 sm:p-4">
            <ImageCarousel images={lectureImages} />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {content.topics.map((topic, index) => (
            <Reveal key={topic} delay={index * 0.04}>
              <article className="rounded-2xl border border-[color:var(--gold-200)] bg-white/90 px-6 py-5 shadow-[0_35px_70px_-62px_rgba(36,28,10,0.55)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-accent)]">
                  0{index + 1}
                </p>
                <h3 className="mt-2 border-l-[3px] border-[color:var(--gold-accent)] pl-3 text-base font-semibold leading-relaxed text-[color:var(--gold-900)]">
                  {topic}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-10">
            <Button
              href={whatsappLink}
              size="lg"
              ariaLabel={content.cta}
              trackSource="lectures_cta"
              withArrow
              attention="glow"
            >
              {content.cta}
            </Button>
            <p className="mt-4 text-sm font-medium text-[color:var(--gold-800)]">📌 {content.note}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
