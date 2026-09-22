import { SERVICES } from "@/lib/services";
import { PROJECTS } from "@/lib/projects";
import { RESOURCES } from "@/data/resources";
import { SOLUTIONS } from "@/data/solutions";

export type SearchKind = "Service" | "Case study" | "Resource" | "Page";

export interface SearchEntry {
  title: string;
  href: string;
  kind: SearchKind;
  summary: string;
  /** Word tokens from title, summary, and extra terms — used for matching. */
  tokens: string[];
  titleTokens: string[];
}

function tokenize(text: string): string[] {
  return text.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
}

function entry(
  title: string,
  href: string,
  kind: SearchKind,
  summary: string,
  extraTerms: string[] = []
): SearchEntry {
  return {
    title,
    href,
    kind,
    summary,
    tokens: tokenize([title, summary, ...extraTerms].join(" ")),
    titleTokens: tokenize(title),
  };
}

const PAGES: SearchEntry[] = [
  entry("About", "/about", "Page", "How Akechi works, our operating pillars, and core values."),
  entry("Services", "/services", "Page", "Engineering capability across AI, cloud, CRM, ERP, STEM, and marketing."),
  entry(
    "Solutions",
    "/solutions",
    "Page",
    "Outcome-led solution tracks for transformation programmes.",
    // Track names live on this one page, so surface them as terms for it
    SOLUTIONS.map((solution) => solution.title)
  ),
  entry("Portfolio", "/portfolio", "Page", "Client work with outcomes and implementation detail."),
  entry("Customer stories", "/customers", "Page", "How organisations moved from legacy friction to intelligent scale."),
  entry("Resources", "/blog", "Page", "Guides, checklists, and technical insights from our team."),
  entry("Engagement models", "/pricing", "Page", "Fixed-fee builds, monthly retainers, and enterprise programmes.", ["pricing", "cost", "rates"]),
  entry("Contact", "/contact", "Page", "Start a conversation with our engineering team.", ["email", "phone", "enquiry"]),
];

export const SEARCH_INDEX: SearchEntry[] = [
  ...PAGES,

  ...Object.values(SERVICES).map((service) =>
    entry(service.title, `/services/${service.slug}`, "Service", service.description, [
      service.tagline,
      ...service.technologies,
    ])
  ),

  ...Object.values(PROJECTS).map((project) =>
    entry(project.title, `/portfolio/${project.slug}`, "Case study", project.description, [
      project.client,
      project.category,
      ...project.technologies,
    ])
  ),

  ...RESOURCES.map((resource) =>
    entry(resource.title, `/blog/${resource.id}`, "Resource", resource.excerpt, [
      resource.category,
      ...resource.sections.map((section) => section.heading),
    ])
  ),
];

/**
 * Every term must match the *start of a word*, not just appear anywhere. Plain
 * substring matching made "erp" hit "ENTERPrise"; prefix matching still supports
 * partial typing ("sales" finds Salesforce) without the false positives.
 *
 * All terms must match, so extra words narrow results. Title matches outrank
 * body-only matches.
 */
function matches(term: string, tokens: string[]): boolean {
  return tokens.some((token) => token.startsWith(term));
}

export function searchSite(query: string): SearchEntry[] {
  const terms = tokenize(query);
  if (terms.length === 0) return [];

  return SEARCH_INDEX.map((item) => {
    if (!terms.every((term) => matches(term, item.tokens))) return null;

    const titleHits = terms.filter((term) => matches(term, item.titleTokens)).length;
    const leadsTitle = item.titleTokens[0]?.startsWith(terms[0]) ? 1 : 0;

    return { item, score: titleHits * 2 + leadsTitle };
  })
    .filter((result): result is { item: SearchEntry; score: number } => result !== null)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .map((result) => result.item);
}
