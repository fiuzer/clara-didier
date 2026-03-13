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
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--gold-700)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="font-display text-4xl leading-[1.04] text-[color:var(--gold-900)] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <div
        className={cn(
          "mt-5 h-[3px] w-28 rounded-full bg-[linear-gradient(90deg,var(--gold-metal-4),var(--gold-metal-2),var(--gold-metal-1),var(--gold-metal-3),transparent)] shadow-[0_0_14px_rgba(213,159,43,0.5)]",
          centered && "mx-auto",
        )}
      />
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-[color:var(--slate-700)] sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
