import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 95],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "akechiwebcraft.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // The resources library previously linked to /resources/:id, a route that
  // never existed. Redirect rather than leaving those URLs to 404 wherever
  // they were shared or indexed.
  async redirects() {
    return [
      { source: "/resources", destination: "/blog", permanent: true },
      { source: "/resources/:slug", destination: "/blog/:slug", permanent: true },
      // The case study was re-slugged from "rocketcrm" to "akechi-crm" to
      // match the product's real name and its Multi-Zones live-site rewrite.
      { source: "/portfolio/rocketcrm", destination: "/portfolio/akechi-crm", permanent: true },
    ];
  },
  // Next.js "Multi-Zones": akechi-trade/apps/web, akechi-lms/apps/web, and
  // akechi-crm/apps/web are each a separate Next.js app (own Vercel
  // project, own deploy cadence, own dependency tree) served under this
  // domain at /akechi-trade, /akechi-lms, and /akechi-crm respectively.
  // `beforeFiles` so they win over this app's own file-system routes before
  // Next even checks whether a matching page exists here — there isn't one,
  // but the ordering is what makes this a proxy rather than a fallback.
  //
  // akechi-crm points at apps/web, not apps/marketing: apps/web now contains
  // marketing's ported pages plus the in-progress portal/admin/app branch
  // scaffold (the "collapse plan"), so it replaces apps/marketing as the
  // deployed unit. apps/marketing itself is left running on disk but nothing
  // routes to it any more.
  //
  // AKECHI_TRADE_ORIGIN / AKECHI_LMS_ORIGIN / AKECHI_CRM_ORIGIN are those
  // projects' own Production URLs (e.g. https://akechi-trade-web.vercel.app)
  // — set once the Vercel project exists; the localhost defaults match each
  // app's own dev-server port (akechi-trade/apps/web on 3001, akechi-lms/apps/web
  // on 3002, akechi-crm/apps/web on 3500) so all apps proxy together
  // locally with no env var needed.
  async rewrites() {
    const akechiTradeOrigin =
      process.env.AKECHI_TRADE_ORIGIN?.trim() || "http://localhost:3001";
    const akechiLmsOrigin =
      process.env.AKECHI_LMS_ORIGIN?.trim() || "http://localhost:3002";
    const akechiCrmOrigin =
      process.env.AKECHI_CRM_ORIGIN?.trim() || "http://localhost:3500";
    return {
      beforeFiles: [
        { source: "/akechi-trade", destination: `${akechiTradeOrigin}/akechi-trade` },
        {
          source: "/akechi-trade/:path*",
          destination: `${akechiTradeOrigin}/akechi-trade/:path*`,
        },
        { source: "/akechi-lms", destination: `${akechiLmsOrigin}/akechi-lms` },
        {
          source: "/akechi-lms/:path*",
          destination: `${akechiLmsOrigin}/akechi-lms/:path*`,
        },
        { source: "/akechi-crm", destination: `${akechiCrmOrigin}/akechi-crm` },
        {
          source: "/akechi-crm/:path*",
          destination: `${akechiCrmOrigin}/akechi-crm/:path*`,
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  compress: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
