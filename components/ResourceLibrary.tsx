"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RESOURCES, RESOURCE_CATEGORIES } from "@/data/resources";

export default function ResourceLibrary() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? RESOURCES
        : RESOURCES.filter((resource) => resource.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <div className="mb-12 border-b border-line pb-6">
        <div role="group" aria-label="Filter resources by category" className="flex flex-wrap gap-2">
          {RESOURCE_CATEGORIES.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "border border-line bg-tint-soft text-muted hover:bg-accent-soft hover:text-ink"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <p aria-live="polite" className="sr-only">
        {filtered.length} {filtered.length === 1 ? "resource" : "resources"} shown
        {activeCategory === "All" ? "" : ` in ${activeCategory}`}
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((resource) => (
          <article
            key={resource.id}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-line transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lifted"
          >
            <div className="relative aspect-[16/9] w-full border-b border-line bg-accent-soft">
              <Image
                src={resource.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col bg-white p-6">
              <span className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                {resource.category}
              </span>
              <h2 className="mb-3 text-xl font-bold leading-tight text-ink">
                <Link
                  href={`/blog/${resource.id}`}
                  className="no-underline transition-colors before:absolute before:inset-0 before:content-[''] hover:text-primary-dark"
                >
                  {resource.title}
                </Link>
              </h2>
              <p className="line-clamp-3 flex-1 text-sm leading-6 text-muted">
                {resource.excerpt}
              </p>
              <p className="mt-4 text-xs text-muted">{resource.readTime}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
