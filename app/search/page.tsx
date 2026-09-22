import PageHero from "@/components/shared/PageHero";
import PageShell from "@/components/layout/PageShell";
import SiteSearch from "@/components/SiteSearch";

export const metadata = {
  title: "Search | Akechi Webcraft",
  description: "Search services, case studies, and resources across the site.",
  // Nothing here that belongs in an index — the underlying pages are indexed.
  robots: { index: false, follow: true },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const { q } = await searchParams;
  const initialQuery = Array.isArray(q) ? (q[0] ?? "") : (q ?? "");

  return (
    <>
      <PageHero
        eyebrow="Search"
        title="Find what you need"
        description="Look across services, case studies, and resources in one place."
      />

      <PageShell className="bg-white">
        <div className="mx-auto max-w-3xl">
          <SiteSearch initialQuery={initialQuery} />
        </div>
      </PageShell>
    </>
  );
}
