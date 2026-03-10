import { landingContent, siteConfig } from "@/data/site-content";

import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--gold-200)] bg-[linear-gradient(180deg,rgba(249,241,220,0.45),rgba(255,255,255,0.8))] py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-4xl text-[color:var(--gold-900)]">{siteConfig.name}</p>
          <p className="mt-3 max-w-xl text-sm text-[color:var(--slate-700)]">
            {siteConfig.role} | {siteConfig.service}
          </p>
          <p className="mt-3 text-xs text-[color:var(--slate-600)]">
            &copy; {year} {siteConfig.name}. {landingContent.footer.rights}
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          {landingContent.footer.links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--gold-700)] transition-colors hover:text-[color:var(--gold-900)]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
