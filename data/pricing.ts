export const PRICING_TIERS = [
  {
    name: "Starter",
    price: "Fixed fee",
    priceNote: "Scoped as a one-time build with a defined deliverable set.",
    description: "Essential cloud infrastructure and tools for early-stage teams building their first intelligent platforms.",
    features: [
      "Access to core APIs",
      "Standard cloud hosting",
      "Community support",
      "Basic analytics dashboard",
      "5 Team members"
    ],
    ctaText: "Start building",
    ctaHref: "/contact"
  },
  {
    name: "Growth",
    price: "Monthly retainer",
    priceNote: "Sized to your delivery cadence, billed monthly.",
    description: "Advanced automation, scaled operations, and priority support for growing digital product teams.",
    features: [
      "Everything in Starter",
      "Advanced ML pipelines",
      "Priority email support",
      "Custom reporting",
      "Unlimited Team members",
      "SLA guarantee (99.9%)"
    ],
    ctaText: "Scale operations",
    ctaHref: "/contact",
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceNote: "Bespoke scope, SLA, and dedicated team allocation.",
    description: "Dedicated infrastructure, custom AI models, and hands-on transformation consulting.",
    features: [
      "Everything in Growth",
      "Dedicated account manager",
      "On-premise deployment options",
      "Custom AI model fine-tuning",
      "24/7 phone support",
      "Custom SLA (99.99%)"
    ],
    ctaText: "Contact Sales",
    ctaHref: "/contact"
  }
];
