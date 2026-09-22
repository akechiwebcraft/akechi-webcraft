import PageHero from "@/components/shared/PageHero";
import PageShell from "@/components/layout/PageShell";
import { CUSTOMERS } from "@/data/customers";
import CTAButton from "@/components/shared/CTAButton";
import Image from "next/image";

export const metadata = {
  title: "Customers | Akechi Webcraft",
  description: "Read how leading enterprises transform their operations with Akechi.",
};

export default function CustomersPage() {
  const fallbackImages = ["/images/cases/case-1.png", "/images/cases/case-2.png", "/images/cases/case-3.png"];

  return (
    <>
      <PageHero
        eyebrow="Customer Stories"
        title="From legacy friction to intelligent scale"
        description="See how enterprises use our platform and expertise to automate workflows, modernize architecture, and grow."
      />

      <PageShell className="bg-white">
        <div className="grid gap-16">
          {CUSTOMERS.map((customer, index) => (
            <div key={customer.id} className="grid lg:grid-cols-12 gap-10 items-center rounded-2xl border border-line p-6 sm:p-10 bg-tint">
              <div className="lg:col-span-5 relative h-full min-h-[300px] rounded-xl overflow-hidden bg-accent-soft border border-line">
                <Image
                  src={customer.image.includes("case-4") ? fallbackImages[index % fallbackImages.length] : customer.image}
                  alt={customer.companyType}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="mb-6 inline-flex items-center rounded-full border border-line bg-white px-3 py-1 shadow-sm">
                  <span className="text-xs font-bold text-primary tracking-wider uppercase">{customer.companyType}</span>
                </div>
                
                <h3 className="mb-4 text-2xl font-bold text-ink">Transformation Outcome</h3>
                <p className="mb-8 leading-relaxed text-prose">
                  {customer.solution} {customer.result}
                </p>

                <div className="grid grid-cols-3 gap-4 border-t border-line pt-6 mb-8">
                  {customer.metrics.map((metric, i) => (
                    <div key={i}>
                      <p className="text-2xl sm:text-3xl font-bold text-ink mb-1">{metric.value}</p>
                      <p className="text-xs font-semibold text-subtle uppercase tracking-wider">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <CTAButton href={`/contact`} variant="outline">
                    Discuss a similar project
                  </CTAButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageShell>
    </>
  );
}
