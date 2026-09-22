import { PROJECTS } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/shared/PageHero";

export const metadata = {
  title: "Portfolio | Akechi Webcraft",
  description: "Explore our latest projects and case studies",
};



const CLIENT_SLUGS = ['bahikhata-pro', 'ikonnic', 'lab-of-innovation', 'parcelace', 'raqz', 'rocketcrm', 'carohitvijay', 'at-solar', 'nh-dry-fruits'];

export default function PortfolioPage() {
  const projectList = Object.values(PROJECTS).filter((p) => CLIENT_SLUGS.includes(p.slug));

  return (
    <div className="bg-white text-[var(--site-text)]">
      <PageHero
        eyebrow="Akechi Work"
        title="Portfolio built around proof, not empty presentation."
        description="Explore Akechi projects across AI automation, CRM, ERP, digital systems, and education infrastructure, structured with outcomes and implementation detail."
      />

      <section className="site-section">
        <div className="site-shell">
          <div className="grid gap-5 md:grid-cols-2">
            {projectList.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group site-card-flat block overflow-hidden rounded-2xl no-underline transition-all hover:-translate-y-1 hover:border-primary/45"
              >
                <div className="relative aspect-[16/10] bg-tint-soft">
                  <Image
                    src={project.image ?? "/images/cases/case-1.png"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-5 md:p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-lg border border-primary/30 bg-primary/15 px-3 py-1.5 font-primary text-xs font-bold uppercase tracking-[0.12em] text-primary-accent">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="font-primary text-2xl font-bold leading-tight text-[var(--site-text)] transition-colors group-hover:text-primary-accent">
                    {project.title}
                  </h2>
                  <p className="mt-3 font-primary text-sm leading-7 text-[var(--site-muted)]">
                    {project.description}
                  </p>
                  <div className="mt-5 grid gap-px overflow-hidden rounded-xl border border-[var(--site-border)] bg-[var(--site-border)] sm:grid-cols-2">
                    {project.metrics.slice(0, 2).map((metric) => (
                      <div key={metric.label} className="bg-[var(--site-bg-soft)] p-4">
                        <p className="font-primary text-2xl font-bold text-primary">{metric.value}</p>
                        <p className="mt-1 font-primary text-micro font-bold uppercase tracking-[0.12em] text-[var(--site-muted)]">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section-soft">
        <div className="site-shell rounded-2xl border border-[var(--site-border)] bg-[var(--site-panel)] p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="site-tag">New Build</p>
              <h2 className="mt-4 font-primary text-3xl font-bold leading-tight text-[var(--site-text)] md:text-4xl">
                Have a project in mind?
              </h2>
              <p className="site-copy mt-4">
                Let&apos;s design a useful implementation path, not a decorative pitch page.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-primary text-sm font-semibold text-white no-underline transition-colors hover:bg-primary-accent"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
}
