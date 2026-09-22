import PageHero from "@/components/shared/PageHero";
import PageShell from "@/components/layout/PageShell";
import ResourceLibrary from "@/components/ResourceLibrary";

export const metadata = {
  title: "Resources | Akechi Webcraft",
  description: "Guides, research, and technical insights from our team.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Technical insights and transformation guides"
        description="Learn how to architect resilient systems, adopt AI operations, and lead enterprise change."
      />

      <PageShell className="bg-white">
        <ResourceLibrary />
      </PageShell>
    </>
  );
}
