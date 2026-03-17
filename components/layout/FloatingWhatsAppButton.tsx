"use client";

import { motion, useReducedMotion } from "framer-motion";

import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/tracking";

export function FloatingWhatsAppButton() {
  const whatsappLink = getWhatsAppLink();
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp para agendar atendimento"
      onClick={() => trackWhatsAppClick("floating_button")}
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -1.2, 0],
              scale: [1, 1.065, 1],
              boxShadow: [
                "0 36px 64px -22px rgba(169,126,41,0.92), 0 0 42px -6px rgba(201,156,70,0.78)",
                "0 50px 90px -14px rgba(169,126,41,1), 0 0 64px 0px rgba(201,156,70,1)",
                "0 36px 64px -22px rgba(169,126,41,0.92), 0 0 42px -6px rgba(201,156,70,0.78)",
              ],
            }
      }
      transition={
        reduceMotion
          ? { duration: 0.2, ease: "easeOut" }
          : { duration: 3.2, ease: "easeInOut", repeat: Infinity }
      }
      whileHover={{
        y: -2,
        scale: 1.1,
        boxShadow: "0 42px 74px -18px rgba(169,126,41,0.98), 0 0 70px 2px rgba(201,156,70,1)",
      }}
      whileTap={{ scale: 0.97 }}
      className="group fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--gold-500)] bg-[linear-gradient(135deg,var(--gold-300),var(--gold-500))] text-[color:var(--gold-950)] shadow-[0_36px_64px_-22px_rgba(169,126,41,0.92),0_0_48px_-4px_rgba(201,156,70,0.86)] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      {!reduceMotion ? (
        <span
          className="pointer-events-none absolute -inset-3 rounded-full bg-[radial-gradient(circle,rgba(216,176,94,0.46)_0%,rgba(216,176,94,0)_72%)] blur-[8px]"
          aria-hidden="true"
        />
      ) : null}
      {!reduceMotion ? (
        <motion.span
          className="pointer-events-none absolute -inset-7 rounded-full bg-[radial-gradient(circle,rgba(216,176,94,0.68)_0%,rgba(216,176,94,0.0)_74%)] blur-[15px]"
          animate={{ opacity: [0.44, 0.92, 0.44], scale: [0.9, 1.18, 0.9] }}
          transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity }}
          aria-hidden="true"
        />
      ) : null}
      {!reduceMotion ? (
        <motion.span
          className="pointer-events-none absolute -inset-1 rounded-full border border-[color:var(--gold-200)]/85"
          animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
          transition={{ duration: 2.4, ease: "easeOut", repeat: Infinity }}
          aria-hidden="true"
        />
      ) : null}
      {!reduceMotion ? (
        <motion.span
          className="pointer-events-none absolute -inset-4 rounded-full border border-[color:var(--gold-100)]/75"
          animate={{ scale: [1, 1.44], opacity: [0.34, 0] }}
          transition={{ duration: 2.8, ease: "easeOut", repeat: Infinity, delay: 0.55 }}
          aria-hidden="true"
        />
      ) : null}

      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="absolute -left-14 top-0 h-full w-4 rotate-[16deg] bg-white/40 blur-[1px] transition-transform duration-500 group-hover:translate-x-24 sm:group-hover:translate-x-28" />
        </span>
      </span>

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="relative z-10"
      >
        <path
          d="M20.52 3.48A11.94 11.94 0 0 0 12.03 0C5.41 0 0 5.39 0 12a11.9 11.9 0 0 0 1.62 6.03L0 24l6.16-1.6A12.01 12.01 0 0 0 12.02 24C18.64 24 24 18.61 24 12a11.9 11.9 0 0 0-3.48-8.52ZM12.02 21.92a9.91 9.91 0 0 1-5.05-1.39l-.36-.21-3.66.95.98-3.57-.24-.37A9.92 9.92 0 0 1 2.08 12c0-5.47 4.46-9.92 9.95-9.92A9.9 9.9 0 0 1 22 12a9.93 9.93 0 0 1-9.98 9.92Zm5.44-7.43c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.95-.95 1.14-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.47a8.92 8.92 0 0 1-1.66-2.06c-.18-.3-.02-.47.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.08 2.9 1.23 3.1.15.2 2.1 3.23 5.1 4.52.71.3 1.27.49 1.7.62.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2-1.43.25-.71.25-1.31.17-1.43-.07-.12-.27-.2-.57-.35Z"
          fill="currentColor"
        />
      </svg>
      <span className="sr-only">Agendar pelo WhatsApp</span>
    </motion.a>
  );
}
