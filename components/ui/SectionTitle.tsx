import { cn } from "@/lib/utils";

type SectionTitleProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionTitle({
  id,
  eyebrow,
  title,
  description,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--gold-600)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="font-display text-4xl leading-[1.04] text-[color:var(--gold-900)] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <div className={cn("mt-5 h-px w-20 bg-[linear-gradient(90deg,var(--gold-500),transparent)]", centered && "mx-auto")} />
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-[color:var(--slate-700)] sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
