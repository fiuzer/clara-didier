"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { landingContent } from "@/data/site-content";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function DifferentialsSection() {
  const content = landingContent.differentials;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
          {content.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `diferenciais-panel-${index}`;
            const buttonId = `diferenciais-button-${index}`;

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="overflow-hidden rounded-2xl border border-[color:var(--gold-200)] bg-white/90 shadow-[0_35px_70px_-62px_rgba(36,28,10,0.55)]">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-start justify-between gap-5 px-6 py-5 text-left"
                    >
                      <span>
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold-accent)]">
                          0{index + 1}
                        </span>
                        <span className="mt-2 block border-l-[3px] border-[color:var(--gold-accent)] pl-3 text-base font-semibold leading-relaxed text-[color:var(--gold-900)]">
                          {item.title}
                        </span>
                      </span>
                      <span
                        className={`mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--gold-300)] text-[color:var(--gold-700)] transition-transform duration-200 ${isOpen ? "rotate-45" : "rotate-0"}`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="content"
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <div className="border-t border-[color:var(--gold-150)] px-6 pb-6 pt-4">
                          <p className="text-sm leading-relaxed text-[color:var(--slate-700)]">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
