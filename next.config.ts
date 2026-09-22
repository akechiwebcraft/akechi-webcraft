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
    ];
  },
  compress: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
