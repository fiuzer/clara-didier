import Image from "next/image";

import { landingContent, siteConfig } from "@/data/site-content";

import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[color:var(--gold-200)] bg-[linear-gradient(180deg,rgba(249,241,220,0.45),rgba(255,255,255,0.8))] py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,var(--gold-metal-4),var(--gold-metal-2),var(--gold-metal-1),var(--gold-metal-3),var(--gold-metal-4))] shadow-[0_0_14px_rgba(213,159,43,0.45)]" />
      <Container className="flex flex-col gap-8">
        <div>
          <Image
            src="/images/logo branco.png"
            alt={`Logo ${siteConfig.name}`}
            width={240}
            height={72}
            className="h-auto w-[10.5rem] sm:w-[12rem]"
          />
          <p className="mt-3 max-w-xl text-sm text-[color:var(--slate-700)]">
            {siteConfig.role} | {siteConfig.crp} | {siteConfig.service}
          </p>
          <p className="mt-3 text-xs text-[color:var(--slate-600)]">
            &copy; {year} {siteConfig.name}. {landingContent.footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
