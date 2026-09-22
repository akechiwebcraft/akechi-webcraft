import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, FOOTER_SOCIALS, FOOTER_LEGAL } from "@/data/footer";
import { SITE_CONFIG } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-tint">
      <div className="container-wide py-16 lg:py-20">
        {/* Top section */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] lg:gap-8">
          {/* Brand column */}
          <div className="lg:pr-8">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/akechi-logo.png"
                alt="Akechi Webcraft"
                width={156}
                height={38}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-subtle max-w-[320px] leading-relaxed mb-6">
              Transforming organizations through AI, enterprise systems, digital products, cloud infrastructure, and innovation ecosystems.
            </p>
            <div className="space-y-2 text-note text-subtle">
              <a href={`mailto:${SITE_CONFIG.email}`} className="block hover:text-primary transition-colors">
                {SITE_CONFIG.email}
              </a>
              <a href={`tel:${SITE_CONFIG.phone1.replace(/[^+\d]/g, "")}`} className="block hover:text-primary transition-colors">
                {SITE_CONFIG.phone1}
              </a>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink mb-4">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-note text-subtle hover:text-primary-dark transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted text-center sm:text-left">
            © {new Date().getFullYear()} Akechi Webcraft Private Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {FOOTER_LEGAL.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs text-muted hover:text-primary-dark transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <span className="text-line">|</span>
            <div className="flex gap-4">
              {FOOTER_SOCIALS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted hover:text-primary-dark transition-colors"
                  aria-label={item.label}
                >
                  {item.label.split(" ")[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
