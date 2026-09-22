import PageHero from "@/components/shared/PageHero";
import PageShell from "@/components/layout/PageShell";
import { PRICING_TIERS } from "@/data/pricing";
import CTAButton from "@/components/shared/CTAButton";
import { Check } from "lucide-react";

export const metadata = {
  title: "Engagement Models | Akechi Webcraft",
  description:
    "Three ways to work with us — fixed-fee builds, monthly retainers, and enterprise programmes. Every engagement is quoted after a scoping call.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Engagement Models"
        title="Three ways to work with us"
        description="We scope before we quote, so there is no list price here. Pick the shape of engagement that fits, and we'll come back with a firm number after a scoping call."
      />

      <PageShell className="bg-white">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {PRICING_TIERS.map((tier) => (
            <div 
              key={tier.name}
              className={`rounded-2xl p-8 flex flex-col h-full relative ${
                tier.isPopular 
                  ? "border-2 border-primary bg-white shadow-xl" 
                  : "border border-line bg-tint"
              }`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-ink mb-2">{tier.name}</h2>
                {/* min-h, not h: a fixed height clipped longer descriptions */}
                <p className="min-h-16 text-sm leading-6 text-muted">{tier.description}</p>
              </div>

              <div className="mb-8">
                <p className="text-3xl font-bold leading-tight text-ink">
                  {tier.price}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">{tier.priceNote}</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-prose">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <CTAButton 
                href={tier.ctaHref} 
                variant={tier.isPopular ? "primary" : "outline"} 
                className="w-full justify-center"
              >
                {tier.ctaText}
              </CTAButton>
            </div>
          ))}
        </div>
      </PageShell>
    </>
  );
}
