import { SERVICES } from "@/lib/services";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import {
  ArrowRight,
  BarChart,
  BookOpen,
  Box,
  BrainCircuit,
  Check,
  Cloud,
  CloudCog,
  Code,
  Database,
  Eye,
  FlaskConical,
  Layers3,
  Layout,
  Link as LinkIcon,
  Monitor,
  PieChart,
  Search,
  Server,
  Smartphone,
  Sparkles,
  Target,
  Terminal,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "brain-circuit": BrainCircuit,
  eye: Eye,
  "trending-up": TrendingUp,
  box: Box,
  "book-open": BookOpen,
  users: Users,
  cloud: Cloud,
  code: Code,
  link: LinkIcon,
  database: Database,
  terminal: Terminal,
  smartphone: Smartphone,
  monitor: Monitor,
  "flask-conical": FlaskConical,
  "pie-chart": PieChart,
  layout: Layout,
  server: Server,
  "cloud-cog": CloudCog,
  search: Search,
  target: Target,
  "bar-chart": BarChart,
};

/**
 * Per-service accents drawn from the brand's blue→teal→green family.
 *
 * These previously all used a violet (#5B3CC4) that appeared nowhere else on
 * an azure-branded site, and varied only in their secondary — so the map added
 * complexity while making every service page off-brand.
 *
 * Every value is also used as foreground (icon tints, stat labels), so all of
 * them clear WCAG AA on white and on the #F5FBFD section tint. The old stock
 * Tailwind secondaries did not: #10B981 was 2.5:1 as text.
 */
const serviceAccentMap: Record<string, { primary: string; secondary: string; tertiary: string }> = {
  "ai-machine-learning": {
    primary: "#1D4ED8",
    secondary: "#0E7490",
    tertiary: "#005A9E",
  },
  "tinkering-lab-setup": {
    primary: "#0B6670",
    secondary: "#047857",
    tertiary: "#155E75",
  },
  "salesforce-development": {
    primary: "#005A9E",
    secondary: "#0E7490",
    tertiary: "#1D4ED8",
  },
  "sap-erp-systems": {
    primary: "#155E75",
    secondary: "#005A9E",
    tertiary: "#0B6670",
  },
  "stem-edtech-platforms": {
    primary: "#047857",
    secondary: "#0B6670",
    tertiary: "#0E7490",
  },
  "full-stack-development": {
    primary: "#005A9E",
    secondary: "#1D4ED8",
    tertiary: "#0E7490",
  },
  "digital-marketing-seo": {
    primary: "#0E7490",
    secondary: "#047857",
    tertiary: "#155E75",
  },
};

// Site-wide content width, shared with .container-wide and PageShell
const shellStyle = {
  width: "min(100% - var(--content-gutter), var(--content-max))",
  marginInline: "auto",
} as const;

const deliveryStages = [
  {
    phase: "01",
    title: "Discover",
    description: "Map goals, workflows, constraints, users, and the operating reality behind the service.",
  },
  {
    phase: "02",
    title: "Architect",
    description: "Define the delivery model, stack, integrations, governance, and measurable outcomes.",
  },
  {
    phase: "03",
    title: "Build",
    description: "Ship working components in tight cycles with usable interfaces and production discipline.",
  },
  {
    phase: "04",
    title: "Integrate",
    description: "Connect data, teams, systems, automation, and handoff routines into one flow.",
  },
  {
    phase: "05",
    title: "Scale",
    description: "Launch with monitoring, enablement, iteration, and a roadmap for the next maturity step.",
  },
];

function getAccent(slug: string) {
  return serviceAccentMap[slug] ?? serviceAccentMap["ai-machine-learning"];
}

function buildMetrics(service: (typeof SERVICES)[string]) {
  return [
    { value: `${service.benefits.length}`, label: "business outcomes" },
    { value: `${service.capabilities.length}`, label: "delivery tracks" },
    { value: `${service.technologies.length}+`, label: "stack components" },
    { value: "E2E", label: "consulting to launch" },
  ];
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-primary text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-primary text-3xl font-bold leading-tight text-ink md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl font-primary text-sm leading-7 text-subtle md:text-base">
        {description}
      </p>
    </div>
  );
}

function ServiceDiagram({
  service,
  accent,
}: {
  service: (typeof SERVICES)[string];
  accent: { primary: string; secondary: string; tertiary: string };
}) {
  const visibleCapabilities = service.capabilities.slice(0, 3);

  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-line bg-tint-soft p-5 shadow-float md:min-h-[430px] md:p-8">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(circle at 50% 42%, ${accent.primary}28, transparent 22rem), radial-gradient(circle at 70% 78%, ${accent.secondary}1f, transparent 18rem)`,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-35" />

      <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-between md:min-h-[370px]">
        <div className="flex flex-wrap gap-3">
          {service.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={tech}
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-accent-soft px-3 py-2 font-primary text-xs font-semibold text-prose backdrop-blur"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: [accent.secondary, accent.primary, accent.tertiary][index],
                }}
              />
              {tech}
            </span>
          ))}
        </div>

        <div className="mx-auto grid w-full max-w-md grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div className="rounded-xl border border-line bg-accent-soft p-4 text-left">
            <p className="font-primary text-micro font-bold uppercase tracking-[0.16em] text-primary-dark">
              Inputs
            </p>
            <p className="mt-2 font-primary text-lg font-bold text-ink">Workflows</p>
            <p className="mt-1 font-primary text-xs leading-5 text-subtle">Data, teams, users, and process context</p>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/35 bg-primary/20 text-primary-accent shadow-lg shadow-primary/20">
            <Sparkles size={24} />
          </div>

          <div className="rounded-xl border border-success-line bg-success-soft p-4 text-left">
            <p className="font-primary text-micro font-bold uppercase tracking-[0.16em] text-success">
              Outcomes
            </p>
            <p className="mt-2 font-primary text-lg font-bold text-ink">Delivery</p>
            <p className="mt-1 font-primary text-xs leading-5 text-subtle">Systems, adoption, automation, and reporting</p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {visibleCapabilities.map((capability) => {
            const Icon = iconMap[capability.icon] ?? Layers3;
            return (
              <div
                key={capability.id}
                className="rounded-xl border border-line bg-white p-4 backdrop-blur"
              >
                <Icon size={18} className="text-primary" />
                <p className="mt-3 font-primary text-xs font-semibold leading-5 text-ink">
                  {capability.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES[slug];
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Akechi Webcraft`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES[slug];

  if (!service) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-white px-5">
        <div className="text-center">
          <h1 className="font-primary text-3xl font-bold text-ink">Service not found</h1>
          <Link
            href="/"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 font-primary text-sm font-semibold text-white no-underline transition-colors hover:bg-primary-accent"
          >
            Back home
          </Link>
        </div>
      </div>
    );
  }

  const accent = getAccent(slug);
  const metrics = buildMetrics(service);

  return (
    <main className="overflow-hidden bg-white text-ink">
      <PageHero
        eyebrow="Service Offering"
        title={service.title}
        description={service.tagline}
        accent={{ primary: accent.primary, secondary: accent.secondary }}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        media={<ServiceDiagram service={service} accent={accent} />}
      >
        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-primary text-sm font-semibold text-white no-underline transition-colors hover:bg-primary-dark"
        >
          Explore Capabilities
          <ArrowRight size={16} />
        </Link>
        <a
          href="#capabilities"
          className="inline-flex min-h-12 items-center justify-center rounded-lg border border-line bg-white px-6 py-3 font-primary text-sm font-semibold text-ink no-underline transition-colors hover:border-primary hover:text-primary"
        >
          View Delivery Model
        </a>
      </PageHero>

      <section className="bg-white pt-12">
        <div style={shellStyle}>
          <div className="grid gap-3 sm:grid-cols-3">
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-line bg-white p-3"
              >
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: `${[accent.secondary, accent.primary, accent.tertiary][index]}22`,
                  }}
                >
                  <Check
                    size={15}
                    style={{ color: [accent.secondary, accent.primary, accent.tertiary][index] }}
                  />
                </span>
                <span className="font-primary text-xs font-semibold leading-5 text-prose">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-tint p-5">
                <p className="font-primary text-3xl font-bold" style={{ color: accent.secondary }}>
                  {metric.value}
                </p>
                <p className="mt-2 font-primary text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-tint-soft py-14 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]" style={shellStyle}>
          <SectionHeader
            eyebrow="Overview"
            title="Built for business workflows, not generic demonstrations."
            description={service.description}
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-line bg-white p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary-accent">
                  <Check size={16} />
                </span>
                <p className="font-primary text-sm font-medium leading-7 text-prose">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="border-b border-line bg-white py-14 md:py-16">
        <div style={shellStyle}>
          <div className="mb-9 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Core Capabilities"
              title="The delivery tracks inside this service."
              description="Each block is compact, left-aligned, and tied to a usable workstream so the page reads like an operating model."
            />
            <div className="hidden rounded-xl border border-line bg-accent-soft px-4 py-3 font-primary text-xs font-semibold uppercase tracking-[0.14em] text-primary lg:block">
              {service.capabilities.length} scoped tracks
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {service.capabilities.map((capability, index) => {
              const Icon = iconMap[capability.icon] ?? Layers3;
              const colors = [accent.primary, accent.secondary, accent.tertiary];
              const cardColor = colors[index % colors.length];

              return (
                <article
                  key={capability.id}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-tint p-6 transition-all hover:-translate-y-1 hover:border-cyan-300/35"
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl border"
                    style={{ borderColor: `${cardColor}55`, backgroundColor: `${cardColor}16`, color: cardColor }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 font-primary text-xl font-bold leading-tight text-ink">
                    {capability.title}
                  </h3>
                  <p className="mt-3 font-primary text-sm leading-7 text-subtle">
                    {capability.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {capability.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 font-primary text-sm leading-6 text-muted">
                        <Check size={15} className="mt-1 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <div
                      className="h-0.5 w-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${cardColor}, transparent)` }}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-tint-soft py-14 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]" style={shellStyle}>
          <SectionHeader
            eyebrow="Technology Stack"
            title="Clear tools, clear roles, no loose decoration."
            description={`Akechi combines ${service.technologies.slice(0, 2).join(" and ")} with the right delivery controls for ${service.title.toLowerCase()}.`}
          />

          <div className="rounded-2xl border border-line bg-white p-5 md:p-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <p className="font-primary text-xs font-semibold uppercase tracking-[0.16em] text-subtle">
                  Stack Components
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.technologies.map((tech, index) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 font-primary text-sm text-prose"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor: [accent.primary, accent.secondary, accent.tertiary][index % 3],
                        }}
                      />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-line bg-white p-5">
                <p className="font-primary text-xs font-semibold uppercase tracking-[0.16em] text-subtle">
                  Implementation Logic
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    ["Strategy", "Business goals, process design, success measures."],
                    ["Build", "Interfaces, integrations, automation, and data flow."],
                    ["Govern", "Security, training, QA, monitoring, and iteration."],
                  ].map(([label, copy]) => (
                    <div key={label} className="grid grid-cols-[96px_1fr] gap-3 border-b border-line pb-3 last:border-b-0 last:pb-0">
                      <p className="font-primary text-xs font-bold uppercase tracking-[0.12em] text-primary">
                        {label}
                      </p>
                      <p className="font-primary text-sm leading-6 text-subtle">{copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white py-14 md:py-16">
        <div style={shellStyle}>
          <SectionHeader
            eyebrow="Delivery Framework"
            title="A senior build path from assessment to scale."
            description="The structure follows the reference page rhythm: compact steps, visible sequencing, and no floating empty canvas around the content."
          />

          <div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-line bg-tint-soft lg:grid-cols-5">
            {deliveryStages.map((stage) => (
              <article key={stage.phase} className="bg-tint p-5">
                <p className="font-primary text-xs font-bold uppercase tracking-[0.16em] text-primary-accent">
                  {stage.phase}
                </p>
                <h3 className="mt-4 font-primary text-lg font-bold text-ink">{stage.title}</h3>
                <p className="mt-3 font-primary text-sm leading-7 text-subtle">{stage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-tint-soft py-14 md:py-16">
        <div style={shellStyle}>
          <div className="grid items-center gap-6 rounded-2xl border border-line bg-tint p-6 md:p-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="font-primary text-xs font-semibold uppercase tracking-[0.18em] text-primary-accent">
                Ready for a similar build?
              </p>
              <h2 className="mt-3 max-w-4xl font-primary text-3xl font-bold leading-tight text-ink md:text-4xl">
                Turn {service.title.toLowerCase()} into a working operating advantage.
              </h2>
              <p className="mt-4 max-w-2xl font-primary text-sm leading-7 text-subtle md:text-base">
                Let&apos;s discuss how Akechi can design, build, and scale this service around your real users, data, and business goals.
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
    </main>
  );
}
