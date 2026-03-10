"use client";

import { motion } from "framer-motion";

import { getWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/tracking";

export function FloatingWhatsAppButton() {
  const whatsappLink = getWhatsAppLink();

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp para agendar atendimento"
      onClick={() => trackWhatsAppClick("floating_button")}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="fixed bottom-4 right-4 z-50 inline-flex h-12 items-center gap-2 rounded-full border border-[color:var(--gold-400)] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(249,241,220,0.92))] px-4 text-sm font-semibold text-[color:var(--gold-800)] shadow-[0_26px_50px_-30px_rgba(22,18,11,0.7)] transition-colors hover:bg-[color:var(--gold-100)] sm:bottom-6 sm:right-6 sm:h-14 sm:px-5"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20.52 3.48A11.94 11.94 0 0 0 12.03 0C5.41 0 0 5.39 0 12a11.9 11.9 0 0 0 1.62 6.03L0 24l6.16-1.6A12.01 12.01 0 0 0 12.02 24C18.64 24 24 18.61 24 12a11.9 11.9 0 0 0-3.48-8.52ZM12.02 21.92a9.91 9.91 0 0 1-5.05-1.39l-.36-.21-3.66.95.98-3.57-.24-.37A9.92 9.92 0 0 1 2.08 12c0-5.47 4.46-9.92 9.95-9.92A9.9 9.9 0 0 1 22 12a9.93 9.93 0 0 1-9.98 9.92Zm5.44-7.43c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.95-.95 1.14-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.47a8.92 8.92 0 0 1-1.66-2.06c-.18-.3-.02-.47.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.08 2.9 1.23 3.1.15.2 2.1 3.23 5.1 4.52.71.3 1.27.49 1.7.62.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2-1.43.25-.71.25-1.31.17-1.43-.07-.12-.27-.2-.57-.35Z"
          fill="currentColor"
        />
      </svg>
      <span className="hidden sm:inline">Agendar</span>
      <span className="sm:hidden">WhatsApp</span>
    </motion.a>
  );
}
