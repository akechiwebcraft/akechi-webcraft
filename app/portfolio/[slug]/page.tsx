import { PROJECTS } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Layers3,
  LineChart,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const accentStyles = {
  purple: {
    border: "border-primary/35",
    bg: "bg-primary/10",
    text: "text-primary-accent",
    dot: "bg-primary",
    line: "from-primary to-primary-accent",
  },
  teal: {
    border: "border-cyan-400/35",
    bg: "bg-cyan-400/10",
    text: "text-primary",
    dot: "bg-cyan-300",
    line: "from-cyan-400 to-sky-400",
  },
  blue: {
    border: "border-sky-400/35",
    bg: "bg-sky-400/10",
    text: "text-sky-200",
    dot: "bg-sky-300",
    line: "from-sky-400 to-blue-500",
  },
  green: {
    border: "border-emerald-400/35",
    bg: "bg-emerald-400/10",
    text: "text-success",
    dot: "bg-emerald-300",
    line: "from-emerald-400 to-cyan-400",
  },
};

const architectureIcons: LucideIcon[] = [Layers3, Database, Cloud, Network];
const capabilityIcons: LucideIcon[] = [BrainCircuit, Code2, ShieldCheck, Sparkles, Cpu, Rocket];
// Site-wide content width, shared with .container-wide and PageShell
const pageShellStyle = {
  width: "min(100% - var(--content-gutter), var(--content-max))",
  marginInline: "auto",
} as const;
const projectImageBySlug: Record<string, string> = {
  "atal-tinkering-lab-setup": "/images/cases/case-3.png",
  "enterprise-ai-automation": "/images/cases/case-1.png",
  "salesforce-crm-migration": "/images/cases/case-2.png",
  "sap-erp-modernization": "/images/cases/case-3.png",
  "bahikhata-pro": "/images/cases/bahikhata-pro.png",
  "ikonnic": "/images/cases/ikonnic.png",
  "lab-of-innovation": "/images/cases/lab-of-innovation.png",
  "parcelace": "/images/cases/parcelace.png",
  "raqz": "/images/cases/raqz.png",
  "rocketcrm": "/images/cases/rocketcrm.png",
  "carohitvijay": "/images/cases/carohitvijay.png",
  "at-solar": "/images/cases/at-solar.png",
  "nh-dry-fruits": "/images/cases/nh-dry-fruits-admin.png",
};

function SectionHeader({
  eyebrow,
  title,
  description,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  inverted?: boolean;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p
        className={`mb-3 font-primary text-xs font-semibold uppercase tracking-[0.18em] ${
          inverted ? "text-primary" : "text-primary"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-primary text-3xl font-bold leading-tight md:text-4xl ${
          inverted ? "text-ink" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 max-w-2xl font-primary text-base leading-7 ${
          inverted ? "text-muted" : "text-text-secondary"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS[slug];
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Portfolio | Akechi Webcraft`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS[slug];

  if (!project) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-5">
        <div className="text-center">
          <h1 className="font-primary text-h2 text-text-primary">Project not found</h1>
          <Link
            href="/portfolio"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-primary text-sm font-semibold text-white no-underline transition-colors hover:bg-primary-accent"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <PageHero
        title={project.title}
        description={project.description}
        accent={{ primary: "#0078D4", secondary: "#0B6670" }}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
          { label: project.title },
        ]}
        meta={
          <>
            <span className="rounded-md border border-line-strong bg-accent-soft px-3 py-1.5 font-primary text-xs font-semibold uppercase tracking-[0.16em] text-primary-dark">
              {project.category}
            </span>
            <span className="rounded-md border border-line bg-white px-3 py-1.5 font-primary text-xs font-medium text-muted">
              {project.client}
            </span>
          </>
        }
        media={
          <div className="overflow-hidden rounded-xl border border-line bg-white shadow-float">
            <Image
              src={projectImageBySlug[project.slug] ?? "/images/cases/case-1.png"}
              alt={`${project.title} project visual`}
              width={1280}
              height={800}
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="h-auto w-full"
            />
          </div>
        }
      >
        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-primary text-sm font-semibold text-white no-underline transition-colors hover:bg-primary-dark"
        >
          Discuss Similar Work
          <ArrowRight size={16} />
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-line bg-white px-6 py-3 font-primary text-sm font-semibold text-prose no-underline transition-colors hover:border-primary hover:text-primary"
          >
            Visit live site
            <ExternalLink size={15} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
        <a
          href="#architecture"
          className="inline-flex min-h-12 items-center justify-center rounded-lg border border-line bg-white px-6 py-3 font-primary text-sm font-semibold text-ink no-underline transition-colors hover:border-primary hover:text-primary"
        >
          View Architecture
        </a>
      </PageHero>

      <section className="bg-white pt-12">
        <div style={pageShellStyle}>
          <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="bg-tint p-5">
                <p className="font-primary text-3xl font-bold text-primary">{metric.value}</p>
                <p className="mt-2 font-primary text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--site-border)] bg-[var(--site-bg-soft)] py-14 md:py-16">
        <div style={pageShellStyle}>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              ["01", "Business Challenge", project.challenge],
              ["02", "Akechi Approach", project.solution],
              ["03", "Measured Outcome", project.outcome],
            ].map(([number, title, copy]) => (
              <article
                key={title}
                className="rounded-lg border border-[var(--site-border)] bg-[var(--site-panel)] p-6 transition-colors hover:border-primary/35"
              >
                <p className="font-primary text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  {number}
                </p>
                <h2 className="mt-4 font-primary text-2xl font-bold text-[var(--site-text)]">{title}</h2>
                <p className="mt-4 font-primary text-sm leading-7 text-[var(--site-muted)]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="bg-white py-16 text-ink md:py-20">
        <div style={pageShellStyle}>
          <SectionHeader
            inverted
            eyebrow="Technical Architecture"
            title="A disciplined stack, built around the work."
            description="The reference page feels premium because every technology has a purpose. This portfolio template does the same: grouped systems, clear roles, and compact proof."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {project.architecture.map((group, index) => {
              const Icon = architectureIcons[index % architectureIcons.length];
              const accent = accentStyles[group.accent];
              return (
                <article
                  key={group.title}
                  className={`flex h-full flex-col rounded-xl border ${accent.border} bg-tint-soft p-6`}
                >
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg border ${accent.border} ${accent.bg} ${accent.text}`}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="font-primary text-xl font-bold text-ink">{group.title}</h3>
                  <p className="mt-3 font-primary text-sm leading-7 text-muted">{group.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-line bg-white px-3 py-1.5 font-primary text-xs font-medium text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-6">
                    <div className={`h-0.5 w-full rounded-full bg-gradient-to-r ${accent.line}`} />
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-xl border border-line bg-tint-soft p-6">
            <p className="mb-4 font-primary text-xs font-semibold uppercase tracking-[0.16em] text-subtle">
              Technology Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-3 py-2 font-primary text-sm text-ink"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-accent" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--site-bg-soft)] py-14 md:py-16">
        <div style={pageShellStyle}>
          <SectionHeader
            eyebrow="Akechi Capabilities"
            title="What we delivered, organized like an enterprise solution."
            description="Each capability is scoped, named, and tied to the project outcome so the page reads as proof of execution, not a loose gallery."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {project.capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index % capabilityIcons.length];
              return (
                <article
                  key={capability.title}
                  className="flex h-full flex-col rounded-lg border border-[var(--site-border)] bg-[var(--site-panel)] p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-primary text-lg font-bold leading-snug text-[var(--site-text)]">
                    {capability.title}
                  </h3>
                  <p className="mt-3 font-primary text-sm leading-7 text-[var(--site-muted)]">
                    {capability.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {capability.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-[var(--site-bg-soft)] px-2.5 py-1 font-primary text-xs font-medium text-[var(--site-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--site-bg)] py-14 md:py-16">
        <div style={pageShellStyle}>
          <SectionHeader
            eyebrow="Solution Proof"
            title="Problem, response, result without visual noise."
            description="This mirrors the clarity of the reference page while keeping the Akechi data and brand voice intact."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {project.solutionCards.map((card) => (
              <article
                key={card.title}
                className="rounded-xl border border-[var(--site-border)] bg-white p-6 text-ink"
              >
                <h3 className="font-primary text-xl font-bold">{card.title}</h3>
                <div className="mt-6 space-y-5">
                  <div>
                    <p className="font-primary text-xs font-bold uppercase tracking-[0.14em] text-subtle">
                      Problem
                    </p>
                    <p className="mt-2 font-primary text-sm leading-7 text-muted">{card.problem}</p>
                  </div>
                  <div>
                    <p className="font-primary text-xs font-bold uppercase tracking-[0.14em] text-primary-accent">
                      Akechi Response
                    </p>
                    <p className="mt-2 font-primary text-sm leading-7 text-muted">{card.response}</p>
                  </div>
                  <div className="rounded-lg border border-line bg-accent-soft p-4">
                    <p className="font-primary text-xs font-bold uppercase tracking-[0.14em] text-primary">
                      Result
                    </p>
                    <p className="mt-2 font-primary text-sm leading-7 text-muted">{card.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--site-bg-soft)] py-14 md:py-16">
        <div style={pageShellStyle}>
          <SectionHeader
            eyebrow="Delivery Framework"
            title="A controlled path from discovery to adoption."
            description="The phase model keeps the page dense and scannable while showing clients how Akechi manages risk."
          />

          <div className="grid overflow-hidden rounded-xl border border-[var(--site-border)] bg-[var(--site-border)] md:grid-cols-5">
            {project.delivery.map((phase) => (
              <article key={phase.phase} className="bg-[var(--site-panel)] p-5 md:min-h-56">
                <p className="font-primary text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  {phase.phase}
                </p>
                <h3 className="mt-4 font-primary text-lg font-bold text-[var(--site-text)]">{phase.title}</h3>
                <p className="mt-3 font-primary text-sm leading-7 text-[var(--site-muted)]">
                  {phase.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-ink md:py-20">
        <div style={pageShellStyle}>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader
              inverted
              eyebrow="AI & Automation Highlights"
              title="Smart systems, measured by operational impact."
              description="This section gives the Azure-style technical confidence without changing the Akechi palette or overloading the page with decoration."
            />

            <div className="grid gap-4">
              {project.automationHighlights.map((highlight, index) => (
                <article
                  key={highlight.title}
                  className="grid gap-4 rounded-xl border border-line bg-tint-soft p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary-accent">
                    {index === 0 ? <LineChart size={23} /> : index === 1 ? <Sparkles size={23} /> : <CheckCircle2 size={23} />}
                  </div>
                  <div>
                    <h3 className="font-primary text-lg font-bold text-ink">{highlight.title}</h3>
                    <p className="mt-2 font-primary text-sm leading-7 text-muted">
                      {highlight.description}
                    </p>
                  </div>
                  <p className="rounded-lg border border-line bg-accent-soft px-4 py-3 font-primary text-lg font-bold text-primary">
                    {highlight.metric}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--site-bg)] py-14 md:py-16">
        <div style={pageShellStyle}>
          <div className="grid gap-8 rounded-xl border border-[var(--site-border)] bg-white p-8 text-ink md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="font-primary text-xs font-bold uppercase tracking-[0.16em] text-primary-accent">
                Ready for a similar build?
              </p>
              <h2 className="mt-4 max-w-3xl font-primary text-3xl font-bold leading-tight md:text-4xl">
                {project.cta.title}
              </h2>
              <p className="mt-4 max-w-2xl font-primary text-base leading-7 text-muted">
                {project.cta.description}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-primary text-sm font-semibold text-white no-underline transition-colors hover:bg-primary-accent"
            >
              Schedule Consultation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
