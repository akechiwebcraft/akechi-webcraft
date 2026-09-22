"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { searchSite, SEARCH_INDEX } from "@/lib/search-index";

const KIND_STYLES: Record<string, string> = {
  Service: "bg-accent-soft text-primary-dark",
  "Case study": "bg-mint text-primary-accent",
  Resource: "bg-tint text-muted",
  Page: "bg-tint text-muted",
};

export default function SiteSearch({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const trimmed = query.trim();
  const results = useMemo(() => searchSite(query), [query]);

  // Keep ?q= in step with the box so a result set can be copied, bookmarked,
  // and reloaded. replaceState rather than push: typing should not bury the
  // previous page under one history entry per keystroke.
  useEffect(() => {
    const timer = setTimeout(() => {
      const url = new URL(window.location.href);
      if (trimmed) {
        if (url.searchParams.get("q") === trimmed) return;
        url.searchParams.set("q", trimmed);
      } else {
        if (!url.searchParams.has("q")) return;
        url.searchParams.delete("q");
      }
      window.history.replaceState(null, "", url);
    }, 300);
    return () => clearTimeout(timer);
  }, [trimmed]);

  return (
    <div>
      <label htmlFor="site-search" className="block text-sm font-medium text-ink">
        Search services, work, and resources
      </label>

      <div className="relative mt-2">
        <Search
          size={18}
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
        />
        <input
          id="site-search"
          type="search"
          autoComplete="off"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try “Salesforce”, “tinkering lab”, or “cloud migration”"
          className="h-12 w-full rounded-lg border border-line bg-tint pl-11 pr-4 text-base text-ink outline-none transition-colors placeholder:text-subtle focus:border-primary focus:ring-[3px] focus:ring-primary/15"
        />
      </div>

      <p aria-live="polite" className="mt-3 text-note text-muted">
        {trimmed === ""
          ? `${SEARCH_INDEX.length} pages indexed.`
          : `${results.length} ${results.length === 1 ? "result" : "results"} for “${trimmed}”.`}
      </p>

      {trimmed !== "" && results.length === 0 && (
        <div className="mt-8 rounded-xl border border-line bg-tint p-6">
          <p className="text-sm font-semibold text-ink">Nothing matched that</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Try a broader term, or tell us what you&apos;re after and we&apos;ll point you
            to the right place.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-dark no-underline"
          >
            Ask us directly
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      )}

      {results.length > 0 && (
        <ul className="mt-6 flex list-none flex-col gap-3 p-0">
          {results.map((result) => (
            <li key={result.href}>
              <Link
                href={result.href}
                className="group block rounded-xl border border-line bg-white p-5 no-underline transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm"
              >
                <span className="flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-micro font-semibold uppercase tracking-wider ${
                      KIND_STYLES[result.kind] ?? KIND_STYLES.Page
                    }`}
                  >
                    {result.kind}
                  </span>
                  <span className="text-base font-semibold text-ink transition-colors group-hover:text-primary-dark">
                    {result.title}
                  </span>
                </span>
                <span className="mt-2 block text-sm leading-6 text-muted">
                  {result.summary}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
