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
        "group relative h-full overflow-hidden rounded-3xl border border-[color:var(--gold-200)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(252,247,237,0.9))] p-7 shadow-[0_42px_95px_-75px_rgba(27,20,9,0.95)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--gold-400),transparent)] opacity-80" />
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
