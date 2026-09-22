import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/config";
import { SERVICES } from "@/lib/services";
import { PROJECTS } from "@/lib/projects";
import { RESOURCES } from "@/data/resources";
import { STATIC_ROUTES } from "@/lib/routes";

const BASE = SITE_CONFIG.url.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...STATIC_ROUTES.filter((route) => !route.noIndex).map((route) => ({
      url: `${BASE}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...Object.keys(SERVICES).map((slug) => ({
      url: `${BASE}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...Object.keys(PROJECTS).map((slug) => ({
      url: `${BASE}/portfolio/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...RESOURCES.map((resource) => ({
      url: `${BASE}/blog/${resource.id}`,
      lastModified: new Date(resource.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
