import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import { RESOURCES, getResource } from "@/data/resources";

export function generateStaticParams() {
  return RESOURCES.map((resource) => ({ slug: resource.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResource(slug);

  if (!resource) {
    return { title: "Article Not Found | Akechi Webcraft" };
  }

  return {
    title: `${resource.title} | Akechi Webcraft`,
    description: resource.excerpt,
    openGraph: {
      title: resource.title,
      description: resource.excerpt,
      type: "article",
      publishedTime: resource.date,
      images: [{ url: resource.image }],
    },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResource(slug);

  if (!resource) {
    notFound();
  }

  const related = RESOURCES.filter((item) => item.id !== resource.id).slice(0, 3);

  return (
    <article className="bg-white">
      {/* Header */}
      <header className="border-b border-line bg-tint px-6 pt-24 pb-10 lg:px-8 lg:pt-28 lg:pb-12">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-note font-medium text-primary-dark no-underline transition-colors hover:text-primary-dark"
          >
            <ArrowLeft size={15} />
            All resources
          </Link>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.06em] text-primary-dark">
            {resource.category}
          </p>
          <h1 className="mt-3 text-page-title font-bold leading-[1.15] tracking-tight text-ink">
            {resource.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {resource.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-note text-muted">
            <span className="font-medium text-ink">{resource.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={resource.date}>{formatDate(resource.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{resource.readTime}</span>
          </div>
        </div>
      </header>

      {/* Cover image */}
      <div className="px-6 lg:px-8">
        <div className="relative mx-auto mt-10 aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-2xl border border-line bg-accent-soft">
          <Image
            src={resource.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Body */}
      <PageShell className="bg-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-8 text-prose">
            {resource.intro}
          </p>

          {resource.sections.map((section) => (
            <section key={section.heading} className="mt-12">
              <h2 className="text-xl font-bold leading-snug tracking-tight text-ink">
                {section.heading}
              </h2>

              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-base leading-8 text-prose">
                  {paragraph}
                </p>
              ))}

              {section.bullets && (
                <ul className="mt-5 flex flex-col gap-3">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-6 text-base leading-7 text-prose"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-[0.6875rem] h-1.5 w-1.5 rounded-full bg-primary"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Inline CTA */}
          <div className="mt-14 rounded-2xl border border-line bg-tint p-7">
            <h2 className="text-lg font-semibold text-ink">
              Working through this in your own organisation?
            </h2>
            <p className="mt-2 text-sm leading-7 text-muted">
              Tell us where you are stuck and we&apos;ll respond with a practical next
              step — no pitch decks.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-primary-dark"
            >
              Start a conversation
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </PageShell>

      {/* Related */}
      {related.length > 0 && (
        <section
          aria-labelledby="related-heading"
          className="border-t border-line bg-tint px-6 py-14 lg:px-8"
        >
          <div className="mx-auto max-w-5xl">
            <h2
              id="related-heading"
              className="text-xl font-bold tracking-tight text-ink"
            >
              Keep reading
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/blog/${item.id}`}
                  className="group flex flex-col rounded-xl border border-line bg-white p-5 no-underline transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-sm"
                >
                  <span className="text-micro font-semibold uppercase tracking-wider text-primary-dark">
                    {item.category}
                  </span>
                  <span className="mt-2 text-sm font-semibold leading-snug text-ink transition-colors group-hover:text-primary-dark">
                    {item.title}
                  </span>
                  <span className="mt-2 text-note leading-6 text-muted">
                    {item.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
