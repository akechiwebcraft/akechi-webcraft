"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const CAPABILITIES = [
	{
		id: "01",
		title: "AI & Machine Learning",
		description:
			"Custom AI systems, training pipelines, and autonomous agents built for enterprise scale.",
		services: [
			"Model Fine-tuning",
			"Custom LLMs",
			"Agent Frameworks",
			"Data Pipelines",
		],
		href: "/services/ai-machine-learning",
	},
	{
		id: "02",
		title: "Enterprise Systems",
		description:
			"ERP, CRM, and core business systems designed for transformation at organizational scale.",
		services: [
			"System Architecture",
			"API Integration",
			"Legacy Modernization",
			"Cloud Migration",
		],
		href: "/services/salesforce-development",
	},
	{
		id: "03",
		title: "Digital Products",
		description:
			"Intuitive, high-conversion digital products that drive user engagement and business outcomes.",
		services: ["Product Strategy", "UX/UI Design", "Full-stack Development", "Analytics"],
		href: "/services/full-stack-development",
	},
	{
		id: "04",
		title: "Cloud Infrastructure",
		description:
			"Scalable cloud-native architecture: Kubernetes, serverless, databases, and observability.",
		services: [
			"Infrastructure as Code",
			"DevOps Automation",
			"Security",
			"Cost Optimization",
		],
		href: "/services/full-stack-development",
	},
	{
		id: "05",
		title: "STEM & Innovation Labs",
		description:
			"Robotics, IoT, 3D printing, and educator enablement programs that cultivate innovation.",
		services: ["Hardware Integration", "Curriculum Design", "Teacher Training", "Student Labs"],
		href: "/services/tinkering-lab-setup",
	},
];

export default function CoreCapabilities() {
	return (
		<section className="section-spacing bg-white border-b border-line">
			<div className="container-wide">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
					className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 lg:mb-12"
				>
					<div>
						<span className="text-overline">What we do</span>
						<h2 className="text-headline mt-3">
							Capabilities built for
							<br className="hidden sm:block" /> complex systems
						</h2>
					</div>
					<p className="text-body-lg max-w-[420px]">
						We solve hard problems across the full technology stack — from
						infrastructure to interfaces.
					</p>
				</motion.div>

				{/* Capabilities List */}
				<div className="border-t border-line">
					{CAPABILITIES.map((cap, i) => (
						<motion.div
							key={cap.id}
							initial={{ opacity: 0, y: 12 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: i * 0.05 }}
						>
							<Link
								href={cap.href}
								className="group grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-3 md:gap-8 items-start md:items-center py-7 md:py-8 border-b border-line hover:bg-tint transition-colors duration-300 px-3 md:px-5 -mx-3 md:-mx-5 rounded-xl no-underline"
							>
								{/* Number + Title */}
								<div className="flex items-center gap-5">
									<span className="text-xs font-mono text-subtle tabular-nums">
										{cap.id}
									</span>
									<h3 className="text-lg md:text-xl font-semibold text-ink tracking-tight group-hover:text-primary transition-colors">
										{cap.title}
									</h3>
								</div>

								{/* Services tags (hidden on mobile) */}
								<div className="hidden md:flex items-center gap-2 flex-wrap">
									{cap.services.map((service) => (
										<span
											key={service}
											className="text-micro px-3 py-1 rounded-full border border-line text-subtle bg-white"
										>
											{service}
										</span>
									))}
								</div>

								{/* Arrow */}
								<div className="hidden md:flex items-center justify-end">
									<span className="w-10 h-10 rounded-full border border-line flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
										<ArrowUpRight
											size={16}
											className="text-subtle group-hover:text-white transition-colors duration-300"
										/>
									</span>
								</div>

								{/* Mobile description */}
								<p className="md:hidden text-note text-subtle leading-relaxed pl-[calc(0.75rem+20px+20px)]">
									{cap.description}
								</p>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
