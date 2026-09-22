"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import VideoPreviewWindow from "./VideoPreviewWindow";

const HERO_DATA = {
  headline: "We engineer systems\nthat accelerate growth",
  subheadline: "Strategy, AI, cloud infrastructure, and digital products — built for organizations that refuse to stay still.",
  stats: [
    { value: "20+", label: "Enterprise clients" },
    { value: "99%", label: "System uptime" },
    { value: "3x", label: "Faster delivery" },
  ],
};

export default function Hero() {
  return (
    <section className="relative overflow-x-clip min-h-[90vh] flex items-center pt-[72px] bg-tint">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Gradient orbs */}
      <div className="absolute top-[15%] right-[8%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/[0.06] to-transparent blur-3xl" />
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-cyan-decor/[0.05] to-transparent blur-3xl" />

      <div className="container-wide relative z-10 py-10 lg:py-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">

          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="label-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for new projects
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="text-display mt-5 whitespace-pre-line"
            >
              {HERO_DATA.headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-body-lg mt-5 max-w-[520px]"
            >
              {HERO_DATA.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 mt-8"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary-dark transition-all duration-300 hover:shadow-glow hover:-translate-y-[1px]"
              >
                Start a project
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-prose hover:text-primary border border-line bg-white rounded-xl hover:border-primary transition-all duration-300"
              >
                View our work
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex gap-8 sm:gap-10 mt-10 pt-6 border-t border-line"
            >
              {HERO_DATA.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-stat font-bold tracking-tight text-ink">
                    {stat.value}
                  </p>
                  <p className="text-note text-subtle mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Video Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-full"
          >
            <VideoPreviewWindow />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
