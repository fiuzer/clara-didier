"use client";

import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";

import { trackWhatsAppClick } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type ButtonProps = PropsWithChildren<{
  href: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  ariaLabel?: string;
  openInNewTab?: boolean;
  fullWidth?: boolean;
  trackSource?: string;
  withArrow?: boolean;
}>;

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "text-[color:var(--gold-950)] bg-[linear-gradient(135deg,var(--gold-300),var(--gold-500))] shadow-[0_24px_55px_-30px_rgba(174,136,57,0.95)] hover:brightness-[1.04]",
  secondary:
    "border border-[color:var(--gold-300)] bg-white/85 text-[color:var(--gold-700)] hover:bg-[color:var(--gold-100)]",
  ghost: "bg-white/60 text-[color:var(--gold-800)] hover:bg-[color:var(--gold-100)]",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-sm sm:text-base",
};

export function Button({
  href,
  className,
  variant = "primary",
  size = "md",
  ariaLabel,
  openInNewTab,
  fullWidth,
  trackSource,
  withArrow = false,
  children,
}: ButtonProps) {
  const shouldOpenInNewTab = openInNewTab ?? href.startsWith("http");

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      target={shouldOpenInNewTab ? "_blank" : undefined}
      rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={() => {
        if (trackSource) trackWhatsAppClick(trackSource);
      }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-[0.01em] transition-all",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="absolute -left-14 top-0 h-full w-10 rotate-[16deg] bg-white/35 blur-sm transition-transform duration-500 group-hover:translate-x-[210px]" />
      </span>
      <span className="relative z-10">{children}</span>
      {withArrow ? (
        <span
          className={cn(
            "relative z-10 text-base transition-transform duration-200 group-hover:translate-x-0.5",
            variant === "primary" ? "text-[color:var(--gold-900)]" : "text-[color:var(--gold-700)]",
          )}
          aria-hidden="true"
        >
          →
        </span>
      ) : null}
    </motion.a>
  );
}
