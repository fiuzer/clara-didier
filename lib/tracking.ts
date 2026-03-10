"use client";

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
  safeWindow.fbq?.("trackCustom", "WhatsAppClick", { source });
}
