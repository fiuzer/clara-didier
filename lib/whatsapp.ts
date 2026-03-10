import { siteConfig } from "@/data/site-content";

export function getWhatsAppLink(message?: string): string {
  const baseUrl = `https://wa.me/${siteConfig.whatsapp.phone}`;
  const text = encodeURIComponent(message ?? siteConfig.whatsapp.initialMessage);

  return `${baseUrl}?text=${text}`;
}
