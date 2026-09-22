import PageHero from "@/components/shared/PageHero";
import PageShell from "@/components/layout/PageShell";
import { COMPANY_ABOUT, OPERATING_PILLARS, CORE_VALUES } from "@/data/company";
import FeatureGrid, { FeatureGridItem } from "@/components/shared/FeatureGrid";

export const metadata = {
  title: "About | Akechi Webcraft",
  description: "Technology that bridges human potential and innovation.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Engineering for the long term"
        description={COMPANY_ABOUT.headline}
      />

      <PageShell className="bg-white pb-0">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-ink mb-6">Our Mission</h2>
            <p className="text-xl font-medium text-primary mb-8 leading-relaxed">
              {COMPANY_ABOUT.mission}
            </p>
            <div className="space-y-6">
              {COMPANY_ABOUT.story.map((paragraph, idx) => (
                <p key={idx} className="text-subtle leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          <div className="bg-tint border border-line rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-ink mb-8">Our Operating Pillars</h3>
            <div className="space-y-8">
              {OPERATING_PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-white border border-line flex items-center justify-center text-primary shadow-sm">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-ink mb-2">{pillar.title}</h4>
                      <p className="text-subtle text-sm leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </PageShell>

      <PageShell className="bg-white">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-ink mb-4">Core Values</h2>
          <p className="text-subtle">
            The principles that govern how we build, deploy, and support technology.
          </p>
        </div>
        <FeatureGrid columns={3}>
          {CORE_VALUES.map((value, idx) => {
            const Icon = value.icon;
            return (
              <FeatureGridItem key={idx} index={idx}>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent-soft text-primary">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{value.title}</h3>
                <p className="text-subtle leading-relaxed">{value.description}</p>
              </FeatureGridItem>
            );
          })}
        </FeatureGrid>
      </PageShell>
    </>
  );
}
