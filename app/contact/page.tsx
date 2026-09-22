import PageHero from "@/components/shared/PageHero";
import PageShell from "@/components/layout/PageShell";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export const metadata = {
  title: "Contact Sales | Akechi Webcraft",
  description: "Connect with our engineering and transformation team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Start your transformation"
        description="Whether you need to untangle legacy systems, deploy enterprise AI, or build a new digital product from scratch, our team is ready to engineer the solution."
      />

      <PageShell className="bg-white">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold text-ink mb-4">Let&apos;s talk technical</h2>
            <p className="text-sm text-subtle mb-6 leading-relaxed">
              We skip the sales fluff and dive straight into your architecture, workflows, and business constraints to scope a realistic plan.
            </p>

            <div className="space-y-3">
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-4 p-4 rounded-xl border border-line hover:border-primary/30 hover:shadow-sm transition-all group no-underline">
                <span className="flex-shrink-0 h-10 w-10 rounded-lg bg-accent-soft flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={18} />
                </span>
                <span>
                  <span className="block text-note font-semibold text-ink">Email Us</span>
                  <span className="text-note text-subtle">{SITE_CONFIG.email}</span>
                </span>
              </a>

              <a href={`tel:${SITE_CONFIG.phone1.replace(/[^+\d]/g, "")}`} className="flex items-center gap-4 p-4 rounded-xl border border-line hover:border-primary/30 hover:shadow-sm transition-all group no-underline">
                <span className="flex-shrink-0 h-10 w-10 rounded-lg bg-accent-soft flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={18} />
                </span>
                <span>
                  <span className="block text-note font-semibold text-ink">Call Us</span>
                  <span className="text-note text-subtle">{SITE_CONFIG.phone1}</span>
                </span>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-line">
                <span className="flex-shrink-0 h-10 w-10 rounded-lg bg-accent-soft flex items-center justify-center text-primary">
                  <MapPin size={18} />
                </span>
                <span>
                  <span className="block text-note font-semibold text-ink">Headquarters</span>
                  <span className="text-note text-subtle">Akechi Webcraft Pvt Ltd, {SITE_CONFIG.address}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </PageShell>
    </>
  );
}
