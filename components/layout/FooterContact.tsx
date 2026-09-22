"use client";

import { usePathname } from "next/navigation";
import { Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { showsContactBlock } from "@/lib/routes";
import ContactForm from "@/components/ContactForm";

export default function FooterContact() {
  const pathname = usePathname();
  // Skipped on /contact (duplicate), the legal pages, and 404s
  if (!showsContactBlock(pathname)) return null;

  return (
    <section className="section-spacing bg-white border-t border-line">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left-CTA */}
          <div>
            <span className="text-overline">Let&apos;s talk</span>
            <h2 className="text-headline mt-3">
              Ready to build
              <br />something great?
            </h2>
            <p className="text-body-lg mt-4 max-w-[440px]">
              Share your challenge. We&apos;ll respond with a practical next step
              — no pitch decks, no fluff.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-dark transition-all duration-300 hover:shadow-glow"
            >
              Start a conversation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Contact methods */}
            <div className="mt-10 flex flex-col gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone1.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-line hover:border-primary/30 hover:shadow-glow-soft transition-all group"
              >
                <span className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={18} />
                </span>
                <span>
                  <span className="block text-xs font-medium text-subtle">
                    Call us
                  </span>
                  <span className="text-sm font-medium text-ink">
                    {SITE_CONFIG.phone1}
                  </span>
                </span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-line hover:border-primary/30 hover:shadow-glow-soft transition-all group"
              >
                <span className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={18} />
                </span>
                <span>
                  <span className="block text-xs font-medium text-subtle">
                    Email
                  </span>
                  <span className="text-sm font-medium text-ink">
                    {SITE_CONFIG.email}
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Right - Quick form */}
          <div>
            <h3 className="text-lg font-semibold text-ink mb-6">
              Send us a message
            </h3>
            <ContactForm compact />
          </div>
        </div>
      </div>
    </section>
  );
}
