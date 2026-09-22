import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Page Not Found | Akechi Webcraft",
};

const SUGGESTED_LINKS = [
  { label: "Services", href: "/services", description: "AI, cloud, CRM, ERP, and STEM practices." },
  { label: "Portfolio", href: "/portfolio", description: "Client work with outcomes and implementation detail." },
  { label: "About", href: "/about", description: "How Akechi works and what we stand for." },
  { label: "Resources", href: "/blog", description: "Technical insights and transformation guides." },
];

export default function NotFound() {
  return (
    <section className="bg-white px-6 pt-32 pb-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.06em] text-primary-dark">
          Error 404
        </p>
        <h1 className="mt-3 text-page-title font-bold leading-[1.15] tracking-tight text-ink">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-subtle">
          The link may be outdated or the address mistyped. Here are the places most
          people are looking for.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-primary-dark"
        >
          Back to home
          <ArrowRight size={16} />
        </Link>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {SUGGESTED_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-line bg-tint p-5 no-underline transition-all hover:border-primary/40 hover:shadow-sm"
            >
              <span className="block text-sm font-semibold text-ink transition-colors group-hover:text-primary">
                {link.label}
              </span>
              <span className="mt-1 block text-note leading-6 text-subtle">
                {link.description}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
