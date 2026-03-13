"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { landingContent, navigationItems, siteConfig } from "@/data/site-content";
import { getWhatsAppLink } from "@/lib/whatsapp";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  const whatsappLink = getWhatsAppLink();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--gold-200)] bg-white/82 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,var(--gold-metal-4),var(--gold-metal-2),var(--gold-metal-1),var(--gold-metal-3),var(--gold-metal-4))] shadow-[0_0_14px_rgba(213,159,43,0.55)]" />
      <Container className="flex h-20 items-center justify-between gap-4">
        <a
          href="#inicio"
          className="font-display text-[1.9rem] leading-none tracking-wide text-[color:var(--gold-900)] sm:text-[2rem]"
          aria-label={`Inicio - ${siteConfig.name}`}
        >
          Clara Didier
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegacao principal">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[color:var(--slate-700)] transition-colors hover:text-[color:var(--gold-700)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <Button
            href={whatsappLink}
            size="md"
            ariaLabel={landingContent.hero.primaryCta}
            trackSource="header_cta"
            withArrow
          >
            {landingContent.hero.primaryCta}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Abrir menu de navegacao"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--gold-300)] text-[color:var(--gold-800)] transition-colors hover:bg-[color:var(--gold-100)] lg:hidden"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-full bg-current transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-full bg-current transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-[color:var(--gold-200)] bg-[color:var(--surface)] lg:hidden"
          >
            <Container className="py-5">
              <nav className="flex flex-col gap-2" aria-label="Menu mobile">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-[color:var(--slate-700)] transition-colors hover:bg-[color:var(--gold-100)] hover:text-[color:var(--gold-800)]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <Button
                href={whatsappLink}
                fullWidth
                size="lg"
                className="mt-4 justify-center"
                ariaLabel={landingContent.hero.primaryCta}
                trackSource="header_mobile_cta"
                withArrow
              >
                {landingContent.hero.primaryCta}
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
