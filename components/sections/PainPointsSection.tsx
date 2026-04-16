import { landingContent, siteConfig } from "@/data/site-content";
import { getWhatsAppLink } from "@/lib/whatsapp";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function PainPointsSection() {
  const content = landingContent.painPoints;
  const whatsappLink = getWhatsAppLink();

  return (
    <section id="sinais" aria-labelledby="sinais-title" className="bg-white pb-24 pt-12 lg:pb-28 lg:pt-16">
      <Container>
        <Reveal>
          <SectionTitle
            id="sinais-title"
            eyebrow={content.eyebrow}
            title={content.title}
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-10 rounded-3xl border border-[color:var(--gold-200)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(249,241,220,0.76))] p-7 shadow-[0_45px_95px_-76px_rgba(27,20,9,0.86)] sm:p-8">
            <ul className="grid gap-3">
              {content.items.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-start gap-2.5 text-sm leading-relaxed text-[color:var(--slate-700)] sm:text-base"
                >
                  <span className="mt-[0.54rem] h-1.5 w-1.5 rounded-full bg-[color:var(--gold-500)]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-7 text-sm leading-relaxed text-[color:var(--slate-700)] sm:text-base">{content.description}</p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-[color:var(--gold-800)] sm:text-base">📌 {content.note}</p>

            <div className="mt-8">
              <Button
                href={whatsappLink}
                size="lg"
                ariaLabel={content.cta}
                trackSource="after_fold_cta"
                attention="glow"
              >
                {content.cta}
              </Button>
              <p className="mt-3 whitespace-nowrap text-center text-[13px] leading-relaxed text-[color:var(--gold-800)] sm:text-left sm:text-sm">
                {siteConfig.ctaSupportText}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
