"use client";

import type { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { trackWhatsAppClick } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = PropsWithChildren<{
  href: string;
  className?: string;
  variant?: ButtonVariant;
  size?: "md" | "lg";
  ariaLabel?: string;
  openInNewTab?: boolean;
  fullWidth?: boolean;
  trackSource?: string;
  withArrow?: boolean;
  attention?: "none" | "soft" | "glow";
}>;

type VariantConfig = {
  base: string;
  ringClass: string;
  haloClass: string;
  sheenClass: string;
  glowFrames: [string, string, string];
  haloOpacity: [number, number, number];
};

const variantConfig: Record<ButtonVariant, VariantConfig> = {
  primary: {
    base: "text-[color:var(--gold-950)] bg-[linear-gradient(135deg,var(--gold-300),var(--gold-500))] shadow-[0_22px_44px_-20px_rgba(174,136,57,0.92),0_0_30px_-7px_rgba(193,154,73,0.68)] hover:brightness-[1.05]",
    ringClass: "ring-[color:rgba(247,226,164,0.75)]",
    haloClass:
      "bg-[radial-gradient(circle,rgba(223,178,84,0.62)_0%,rgba(223,178,84,0)_74%)] blur-[10px]",
    sheenClass: "w-12 bg-white/65",
    glowFrames: [
      "0 22px 44px -20px rgba(174,136,57,0.92), 0 0 34px -7px rgba(193,154,73,0.72), 0 0 0 1px rgba(255,236,186,0.52) inset",
      "0 30px 58px -18px rgba(174,136,57,1), 0 0 48px -2px rgba(193,154,73,0.95), 0 0 0 1px rgba(255,245,208,0.72) inset",
      "0 22px 44px -20px rgba(174,136,57,0.92), 0 0 34px -7px rgba(193,154,73,0.72), 0 0 0 1px rgba(255,236,186,0.52) inset",
    ],
    haloOpacity: [0.5, 0.95, 0.5],
  },
  secondary: {
    base: "border border-[color:var(--gold-300)] bg-white/92 text-[color:var(--gold-700)] shadow-[0_16px_34px_-18px_rgba(174,136,57,0.58),0_0_24px_-10px_rgba(193,154,73,0.48)] hover:bg-[color:var(--gold-100)]",
    ringClass: "ring-[color:rgba(247,226,164,0.65)]",
    haloClass:
      "bg-[radial-gradient(circle,rgba(223,178,84,0.45)_0%,rgba(223,178,84,0)_76%)] blur-[9px]",
    sheenClass: "w-10 bg-white/56",
    glowFrames: [
      "0 16px 34px -18px rgba(174,136,57,0.58), 0 0 24px -10px rgba(193,154,73,0.48), 0 0 0 1px rgba(255,236,186,0.38) inset",
      "0 22px 44px -16px rgba(174,136,57,0.76), 0 0 34px -6px rgba(193,154,73,0.72), 0 0 0 1px rgba(255,245,208,0.52) inset",
      "0 16px 34px -18px rgba(174,136,57,0.58), 0 0 24px -10px rgba(193,154,73,0.48), 0 0 0 1px rgba(255,236,186,0.38) inset",
    ],
    haloOpacity: [0.36, 0.72, 0.36],
  },
  ghost: {
    base: "bg-white/72 text-[color:var(--gold-800)] shadow-[0_14px_30px_-18px_rgba(174,136,57,0.48),0_0_20px_-10px_rgba(193,154,73,0.35)] hover:bg-[color:var(--gold-100)]",
    ringClass: "ring-[color:rgba(247,226,164,0.58)]",
    haloClass:
      "bg-[radial-gradient(circle,rgba(223,178,84,0.35)_0%,rgba(223,178,84,0)_78%)] blur-[8px]",
    sheenClass: "w-9 bg-white/48",
    glowFrames: [
      "0 14px 30px -18px rgba(174,136,57,0.48), 0 0 20px -10px rgba(193,154,73,0.35), 0 0 0 1px rgba(255,236,186,0.28) inset",
      "0 18px 36px -16px rgba(174,136,57,0.62), 0 0 28px -7px rgba(193,154,73,0.52), 0 0 0 1px rgba(255,245,208,0.4) inset",
      "0 14px 30px -18px rgba(174,136,57,0.48), 0 0 20px -10px rgba(193,154,73,0.35), 0 0 0 1px rgba(255,236,186,0.28) inset",
    ],
    haloOpacity: [0.28, 0.56, 0.28],
  },
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "h-11 px-4 text-sm sm:px-5",
  lg: "h-12 px-4 text-[13px] sm:px-7 sm:text-base",
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
  attention = "glow",
  children,
}: ButtonProps) {
  const shouldOpenInNewTab = openInNewTab ?? href.startsWith("http");
  const reduceMotion = useReducedMotion();
  const shouldAnimateAttention = attention !== "none" && !reduceMotion;
  const config = variantConfig[variant];

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      target={shouldOpenInNewTab ? "_blank" : undefined}
      rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
      animate={
        shouldAnimateAttention
          ? {
              boxShadow: config.glowFrames,
              scale: [1, 1.045, 1],
            }
          : undefined
      }
      transition={
        shouldAnimateAttention
          ? {
              boxShadow: {
                duration: 2.4,
                ease: "easeInOut",
                repeat: Infinity,
              },
              scale: {
                duration: 1.45,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }
          : { duration: 0.2, ease: "easeOut" }
      }
      whileHover={{ y: -2, scale: 1.06 }}
      whileTap={{ scale: 0.985 }}
      onClick={() => {
        if (trackSource) trackWhatsAppClick(trackSource);
      }}
      className={cn(
        "group relative isolate inline-flex max-w-full items-center justify-center gap-2 overflow-visible rounded-full font-semibold tracking-[0.01em] transition-all",
        config.base,
        shouldAnimateAttention && "ring-1",
        shouldAnimateAttention && config.ringClass,
        sizeStyles[size],
        fullWidth && "w-full",
        className,
      )}
    >
      {shouldAnimateAttention ? (
        <motion.span
          className={cn("pointer-events-none absolute -inset-2 rounded-full", config.haloClass)}
          animate={{ opacity: config.haloOpacity }}
          transition={{ duration: 2.1, ease: "easeInOut", repeat: Infinity }}
        />
      ) : null}

      {shouldAnimateAttention ? (
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <motion.span
            className={cn("absolute -left-16 top-0 h-full rotate-[16deg] blur-[1px]", config.sheenClass)}
            animate={{
              x: ["-160%", "235%"],
              opacity: [0, 0.34, 0.26, 0],
            }}
            transition={{
              duration: 1.55,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1.55,
              times: [0, 0.45, 0.7, 1],
            }}
          />
        </span>
      ) : null}

      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="absolute -left-14 top-0 h-full w-10 rotate-[16deg] bg-white/35 blur-sm transition-transform duration-500 group-hover:translate-x-[210px]" />
      </span>

      <span className="relative z-10 text-center">{children}</span>
      {withArrow ? (
        <span
          className={cn(
            "relative z-10 text-base transition-transform duration-200 group-hover:translate-x-0.5",
            variant === "primary" ? "text-[color:var(--gold-900)]" : "text-[color:var(--gold-700)]",
          )}
          aria-hidden="true"
        >
          {"->"}
        </span>
      ) : null}
    </motion.a>
  );
}
