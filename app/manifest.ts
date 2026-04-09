import type { MetadataRoute } from "next";

import { seoSuggestions, siteConfig } from "@/data/site-content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seoSuggestions.title,
    short_name: siteConfig.name,
    description: seoSuggestions.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fffcf5",
    theme_color: "#fffcf5",
    icons: [
      {
        src: "/icon",
        sizes: "256x256",
        type: "image/png",
      },
    ],
  };
}
