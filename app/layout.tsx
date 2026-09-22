import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import FooterContact from "@/components/layout/FooterContact";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/config";
import "./globals.css";

// Self-hosted at build time: no render-blocking request to fonts.googleapis.com,
// no layout shift, and no third-party call from the visitor's browser.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: "Akechi — Technology That Bridges",
  description:
    "We transform organizations through AI, enterprise systems, digital products, cloud infrastructure, and innovation ecosystems.",
  keywords: [
    "technology consultancy",
    "AI solutions",
    "enterprise transformation",
    "STEM education",
    "cloud infrastructure",
    "digital products",
  ],
  authors: [{ name: "Akechi Webcraft" }],
  openGraph: {
    title: "Akechi — Technology That Bridges",
    description:
      "Transforming organizations through AI, enterprise systems, digital products, cloud infrastructure, and innovation ecosystems.",
    url: "https://akechiwebcraft.com",
    siteName: "Akechi",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akechi — Technology That Bridges",
    description:
      "Transforming organizations through AI, enterprise systems, digital products, cloud infrastructure, and innovation ecosystems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/edited-photo.png" type="image/png" />
      </head>
      <body suppressHydrationWarning className="flex min-h-screen flex-col antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <FooterContact />
        <Footer />
      </body>
    </html>
  );
}
