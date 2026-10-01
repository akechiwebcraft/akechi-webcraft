"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";

// Featured slugs are drawn from the live portfolio so every card links to a real case study.
const FEATURED_SLUGS = ["akechi-crm", "bahikhata-pro", "at-solar"];

const CASE_STUDIES = FEATURED_SLUGS.map((slug) => PROJECTS[slug]).filter(Boolean);

export default function FeaturedWork() {
	return (
		<section className="section-spacing bg-white border-b border-line">
			<div className="container-wide">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 lg:mb-12"
				>
					<div>
						<span className="text-overline">Selected Work</span>
						<h2 className="text-headline mt-3">
							Results that
							<br className="hidden sm:block" /> speak for themselves
						</h2>
					</div>
					<Link
						href="/portfolio"
						className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
					>
						View all projects
						<ArrowUpRight
							size={14}
							className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</Link>
				</motion.div>

				{/* Projects Grid */}
				<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
					{CASE_STUDIES.map((study, i) => (
						<motion.article
							key={study.slug}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: i * 0.1 }}
							className="group relative rounded-2xl border border-line bg-white overflow-hidden hover:border-primary/30 hover:shadow-glow-soft transition-all duration-300 hover:-translate-y-1"
						>
							{/* Image */}
							<div className="relative aspect-[16/10] overflow-hidden bg-tint border-b border-line">
								<Image
									src={study.image}
									alt=""
									fill
									sizes="(max-width: 768px) 100vw, 33vw"
									className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
									loading="lazy"
								/>
							</div>

							{/* Content */}
							<div className="p-5 md:p-6">
								<span className="text-micro font-semibold text-primary-dark uppercase tracking-wider">
									{study.category}
								</span>
								<h3 className="text-lg font-semibold text-ink mt-2 tracking-tight leading-snug">
									<Link
										href={`/portfolio/${study.slug}`}
										className="no-underline transition-colors before:absolute before:inset-0 before:content-[''] group-hover:text-primary-dark"
									>
										{study.title}
									</Link>
								</h3>
								<p className="text-note text-muted mt-2 leading-relaxed line-clamp-2">
									{study.description}
								</p>

								{/* Outcomes */}
								<div className="flex gap-6 mt-5 pt-4 border-t border-accent-soft">
									{study.metrics.slice(0, 2).map((metric) => (
										<div key={metric.label}>
											<p className="text-xl font-bold text-primary">
												{metric.value}
											</p>
											<p className="text-micro text-muted mt-0.5">
												{metric.label}
											</p>
										</div>
									))}
								</div>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
