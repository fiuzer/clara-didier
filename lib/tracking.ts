"use client";

import { GOOGLE_ADS_WHATSAPP_CONVERSION_ID } from "@/lib/google-ads";

type TrackingWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

export function trackWhatsAppClick(source: string) {
  if (typeof window === "undefined") return;

  const safeWindow = window as TrackingWindow;
  const payload = {
    event: "whatsapp_click",
    source,
    timestamp: new Date().toISOString(),
  };

  safeWindow.dataLayer?.push(payload);
  safeWindow.gtag?.("event", "whatsapp_click", { source });
  safeWindow.gtag?.("event", "conversion", {
    send_to: GOOGLE_ADS_WHATSAPP_CONVERSION_ID,
    value: 1.0,
    currency: "BRL",
  });
  safeWindow.fbq?.("trackCustom", "WhatsAppClick", { source });
}
