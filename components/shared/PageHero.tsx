import Breadcrumbs, { type Crumb } from "@/components/shared/Breadcrumbs";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Trail rendered above the title on detail pages. */
  breadcrumbs?: Crumb[];
  /** Badges shown between the eyebrow and the title (category, client, …). */
  meta?: React.ReactNode;
  /** Right-hand visual. Switches the hero to two columns. */
  media?: React.ReactNode;
  /**
   * Optional brand-family wash for detail pages. Kept as a variant of this
   * component rather than a bespoke hero: the portfolio index, case studies,
   * and service pages each had their own header, so the site changed shape
   * exactly where a visitor was closest to enquiring.
   */
  accent?: { primary: string; secondary: string };
  /** Call-to-action buttons. */
  children?: React.ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  meta,
  media,
  accent,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-tint pt-24 pb-10 lg:pt-28 lg:pb-14">
      {accent && (
        <>
          <div
            className="absolute inset-0 -z-10"
            style={{
              background: `radial-gradient(ellipse 56% 44% at 78% 20%, ${accent.primary}1f, transparent 66%), radial-gradient(ellipse 44% 34% at 12% 82%, ${accent.secondary}16, transparent 60%)`,
            }}
          />
          <div className="grid-pattern absolute inset-0 -z-10 opacity-60" />
        </>
      )}

      <div className="container-wide">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} className="mb-6" />}

        <div
          className={
            media ? "grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14" : undefined
          }
        >
          <div className={media ? "min-w-0" : "max-w-3xl"}>
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.06em] text-primary-dark">
                {eyebrow}
              </p>
            )}

            {meta && <div className="mb-5 flex flex-wrap items-center gap-3">{meta}</div>}

            <h1 className="text-page-title font-bold leading-[1.15] tracking-tight text-ink">
              {title}
            </h1>

            {description && (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {description}
              </p>
            )}

            {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
          </div>

          {media && <div className="min-w-0">{media}</div>}
        </div>
      </div>
    </section>
  );
}
