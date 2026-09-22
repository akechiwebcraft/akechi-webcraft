"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCw, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled application error:", error);
  }, [error]);

  return (
    <section className="bg-white px-6 pt-32 pb-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.06em] text-primary-dark">
          Something went wrong
        </p>
        <h1 className="mt-3 text-page-title font-bold leading-[1.15] tracking-tight text-ink">
          This page didn&apos;t load
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          The problem is on our side, not yours. Retrying usually works — if it
          doesn&apos;t, get in touch and we&apos;ll sort it out.
        </p>

        {error.digest && (
          <p className="mt-4 text-note text-muted">
            Reference code:{" "}
            <code className="rounded bg-tint px-2 py-1 font-mono text-ink">
              {error.digest}
            </code>
          </p>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => unstable_retry()}
            className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            <RotateCw size={16} aria-hidden="true" />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-line bg-white px-6 py-3 text-sm font-semibold text-prose no-underline transition-colors hover:border-primary hover:text-primary"
          >
            Back to home
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <p className="mt-10 text-sm text-muted">
          Still stuck? Email{" "}
          <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary-dark underline">
            {SITE_CONFIG.email}
          </a>{" "}
          or call{" "}
          <a
            href={`tel:${SITE_CONFIG.phone1.replace(/[^+\d]/g, "")}`}
            className="text-primary-dark underline"
          >
            {SITE_CONFIG.phone1}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
