import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import PageShell from "@/components/layout/PageShell";
import { SERVICES } from "@/lib/services";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Services | Akechi Webcraft",
  description:
    "AI, cloud, Salesforce, SAP, STEM labs, and digital marketing services engineered for measurable outcomes.",
};

export default function ServicesPage() {
  const services = Object.values(SERVICES);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Engineering capability across the full stack"
        description="From enterprise AI and cloud platforms to CRM, ERP, and STEM infrastructure — each practice is scoped around outcomes, not billable hours."
      />

      <PageShell className="bg-white">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col rounded-xl border border-line bg-tint p-7 no-underline transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <h2 className="text-xl font-bold text-ink transition-colors group-hover:text-primary">
                {service.title}
              </h2>
              <p className="mt-2 text-note font-semibold uppercase tracking-[0.08em] text-primary-dark">
                {service.tagline}
              </p>
              <p className="mt-4 flex-1 text-sm leading-7 text-subtle">
                {service.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-line bg-white px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Explore service
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </PageShell>
    </>
  );
}
