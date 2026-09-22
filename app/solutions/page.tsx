import PageHero from "@/components/shared/PageHero";
import PageShell from "@/components/layout/PageShell";
import { SOLUTIONS } from "@/data/solutions";

export const metadata = {
  title: "Solutions | Akechi Webcraft",
  description: "Transformation tracks for your digital platform.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Solutions"
        title="Transformation tracks that deliver measurable impact"
        description="We partner with organizations to solve complex operational challenges through structured, phased approaches."
      />

      <PageShell className="bg-white">
        <div className="grid gap-16">
          {SOLUTIONS.map((solution, index) => {
            const Icon = solution.icon;
            
            return (
              <div 
                key={solution.id} 
                id={solution.id}
                className="grid lg:grid-cols-2 gap-12 items-center rounded-2xl border border-line bg-tint-soft p-8 md:p-12"
              >
                <div className={index % 2 === 1 ? "lg:order-last" : ""}>
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-white text-primary border border-line mb-8 shadow-sm">
                    <Icon size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-ink mb-6">{solution.title}</h2>
                  <p className="text-prose text-lg leading-relaxed mb-8">{solution.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">The Challenge</h4>
                      <p className="text-subtle">{solution.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Our Approach</h4>
                      <p className="text-subtle">{solution.approach}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">The Outcome</h4>
                      <p className="text-subtle">{solution.outcome}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl border border-line p-8 shadow-sm h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-ink mb-6 border-b border-line pb-4">Impact Metrics</h3>
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    {solution.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-tint border border-line rounded-lg p-6 text-center">
                        <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                        <div className="text-sm font-semibold uppercase tracking-wider text-subtle">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto pt-6 border-t border-line">
                    <span className="text-sm font-bold text-ink block mb-3">Relevant Products:</span>
                    <div className="flex flex-wrap gap-2">
                      {solution.relevantProducts.map((prod) => (
                        <span key={prod} className="px-3 py-1 bg-accent-soft text-primary text-xs font-semibold rounded-full border border-line/50">
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </PageShell>
    </>
  );
}
