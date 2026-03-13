"use client";

import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type CardProps = PropsWithChildren<{
  title: string;
  description: string;
  tag?: string;
  className?: string;
}>;

export function Card({ title, description, tag, className, children }: CardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "group relative h-full overflow-hidden rounded-3xl border border-[color:var(--gold-200)] bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(255,245,220,0.9))] p-7 shadow-[0_42px_95px_-75px_rgba(27,20,9,0.95)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,var(--gold-metal-4),var(--gold-metal-3),var(--gold-metal-1),var(--gold-metal-2),var(--gold-metal-4))] opacity-95 shadow-[0_0_12px_rgba(213,159,43,0.42)]" />
      {tag ? (
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--gold-600)]">
          {tag}
        </p>
      ) : null}
      <h3 className="font-display text-[1.72rem] leading-tight text-[color:var(--gold-900)]">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-[color:var(--slate-700)]">{description}</p>
      {children}
    </motion.article>
  );
}
