import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/config";

const BASE = SITE_CONFIG.url.replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
