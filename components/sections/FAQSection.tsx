"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { landingContent } from "@/data/site-content";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function FAQSection() {
  const content = landingContent.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,239,218,0.58))] py-24 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionTitle
            id="faq-title"
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            centered
          />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {content.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <Reveal key={item.question} delay={index * 0.04}>
                <article className="overflow-hidden rounded-2xl border border-[color:var(--gold-200)] bg-white/94 shadow-[0_28px_65px_-54px_rgba(27,20,9,0.75)]">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="text-base font-semibold leading-relaxed text-[color:var(--gold-900)] sm:text-lg">
                        {item.question}
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
                        <div className="border-t border-[color:var(--gold-150)] px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                          <p className="text-sm leading-relaxed text-[color:var(--slate-700)] sm:text-base">
                            {item.answer}
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
