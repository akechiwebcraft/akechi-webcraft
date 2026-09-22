import { SERVICES } from "@/lib/services";
import { PROJECTS } from "@/lib/projects";
import { RESOURCES } from "@/data/resources";

export interface StaticRoute {
  path: string;
  changeFrequency: "yearly" | "monthly" | "weekly";
  priority: number;
  /** Real route, but kept out of the sitemap (matches its noindex metadata). */
  noIndex?: boolean;
}

/** Every top-level page that exists. Also drives the sitemap. */
export const STATIC_ROUTES: StaticRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/solutions", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio", changeFrequency: "weekly", priority: 0.9 },
  { path: "/customers", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.9 },
  { path: "/search", changeFrequency: "yearly", priority: 0.2, noIndex: true },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

/**
 * Pages where the site-wide contact block is unwanted: the contact page already
 * has the form, and pushing a sales form at someone reading the privacy policy
 * or landing on a 404 is noise.
 */
const NO_CONTACT_BLOCK = new Set(["/contact", "/privacy", "/terms", "/search"]);

const KNOWN_PATHS = new Set<string>([
  ...STATIC_ROUTES.map((route) => route.path),
  ...Object.keys(SERVICES).map((slug) => `/services/${slug}`),
  ...Object.keys(PROJECTS).map((slug) => `/portfolio/${slug}`),
  ...RESOURCES.map((resource) => `/blog/${resource.id}`),
]);

/** False for any path the app does not serve — i.e. the 404 page is rendering. */
export function isKnownRoute(pathname: string): boolean {
  const normalised =
    pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return KNOWN_PATHS.has(normalised);
}

export function showsContactBlock(pathname: string): boolean {
  return isKnownRoute(pathname) && !NO_CONTACT_BLOCK.has(pathname);
}
