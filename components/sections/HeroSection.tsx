import Image from "next/image";

import { landingContent } from "@/data/site-content";
import { getWhatsAppLink } from "@/lib/whatsapp";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function HeroSection() {
  const whatsappLink = getWhatsAppLink();
  const content = landingContent.hero;

  return (
    <section id="inicio" className="relative overflow-hidden pb-24 pt-32 sm:pb-28 sm:pt-36 lg:pb-32 lg:pt-40">
      <div className="hero-noise pointer-events-none absolute inset-0 -z-20" />
      <div className="pointer-events-none absolute -left-32 top-16 -z-10 h-72 w-72 rounded-full bg-[color:var(--gold-200)]/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-28 -z-10 h-96 w-96 rounded-full bg-[color:var(--gold-300)]/30 blur-3xl" />

      <Container className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal>
          <p className="mb-5 inline-flex rounded-full border border-[color:var(--gold-300)] bg-white/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-700)]">
            {content.eyebrow}
          </p>
          <h1 className="max-w-2xl font-display text-[2.7rem] leading-[0.97] text-[color:var(--gold-950)] sm:text-[3.35rem] lg:text-[4.2rem]">
            {content.title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-[color:var(--slate-700)] sm:text-lg">
            {content.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              href={whatsappLink}
              size="lg"
              ariaLabel={content.primaryCta}
              trackSource="hero_primary_cta"
              withArrow
              attention="glow"
            >
              {content.primaryCta}
            </Button>
            <Button href="#sobre" variant="secondary" size="lg" withArrow>
              {content.secondaryCta}
            </Button>
          </div>

          <ul className="mt-8 grid gap-2.5">
            {content.trustPills.map((pill) => (
              <li
                key={pill}
                className="inline-flex items-center gap-2 text-sm leading-relaxed text-[color:var(--slate-700)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold-500)]" aria-hidden="true" />
                {pill}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mx-auto w-full max-w-[34rem]">
            <div className="relative rounded-[2.2rem] border border-[color:var(--gold-200)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(249,241,220,0.62))] p-3 shadow-[0_50px_110px_-65px_rgba(22,18,11,0.92)] sm:p-4">
              {/* Replacing note: swap this image with the final professional portrait in /public/images */}
              <Image
                src="/images/first_image.JPG"
                alt="Retrato profissional de Clara Didier para a seção principal da landing page"
                width={640}
                height={800}
                className="h-auto w-full rounded-[1.65rem] object-cover"
                priority
              />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {content.metrics.map((metric) => (
                <article
                  key={metric.title}
                  className="relative overflow-hidden rounded-2xl border border-[color:var(--gold-200)] bg-white/90 px-4 py-4 shadow-[0_24px_45px_-40px_rgba(22,18,11,0.95)]"
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,var(--gold-metal-4),var(--gold-metal-2),var(--gold-metal-1),var(--gold-metal-3),var(--gold-metal-4))] opacity-95" />
                  <h2 className="text-sm font-semibold text-[color:var(--gold-900)]">{metric.title}</h2>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--slate-700)]">{metric.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
