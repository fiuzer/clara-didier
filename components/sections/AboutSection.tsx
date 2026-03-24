import Image from "next/image";

import { landingContent } from "@/data/site-content";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function AboutSection() {
  const content = landingContent.about;

  return (
    <section id="sobre" aria-labelledby="sobre-title" className="bg-white py-24 lg:py-28">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="section-surface mx-auto max-w-md rounded-[2rem] p-3 sm:p-4">
            {/* Replacing note: swap this image with a real office/session portrait in /public/images */}
            <Image
              src="/images/second_image.JPG"
              alt="Imagem complementar da psicóloga Clara Didier em ambiente acolhedor"
              width={560}
              height={680}
              className="h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <SectionTitle
            id="sobre-title"
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.paragraphs[0]}
          />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--slate-700)] sm:text-lg">
            {content.paragraphs[1]}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {content.highlights.map((highlight) => (
              <article
                key={highlight}
                className="rounded-2xl border border-[color:var(--gold-200)] bg-white/85 px-5 py-4 text-sm font-medium text-[color:var(--gold-900)] shadow-[0_18px_40px_-36px_rgba(27,20,9,0.8)]"
              >
                <span className="inline-flex border-l-[3px] border-[color:var(--gold-accent)] pl-3">{highlight}</span>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
