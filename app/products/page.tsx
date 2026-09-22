import PageHero from "@/components/shared/PageHero";
import PageShell from "@/components/layout/PageShell";
import { PRODUCTS } from "@/data/products";

export const metadata = {
  title: "Products | Akechi Webcraft",
  description: "Platform services for every stage of intelligent delivery.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Platform services for intelligent delivery"
        description="A suite of managed tools designed to accelerate development, secure operations, and provide deep observability."
      />

      <PageShell className="bg-white">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => {
            const Icon = product.icon;
            return (
              <div key={product.id} className="rounded-xl border border-line p-8 shadow-sm flex flex-col h-full bg-tint">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-white border border-line flex items-center justify-center text-primary">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-ink">{product.title}</h3>
                </div>
                
                <p className="text-subtle mb-8 flex-1 leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="space-y-3 pt-6 border-t border-line">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-prose">
                      <span className="h-2 w-2 mt-1.5 shrink-0 rounded-full bg-cyan-decor" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </PageShell>
    </>
  );
}
