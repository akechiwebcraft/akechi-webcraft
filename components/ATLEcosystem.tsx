"use client";

import { motion } from "framer-motion";

const ECOSYSTEM = [
	{
		title: "Robotics Lab",
		description: "Hands-on robotics curriculum and competition-ready teams.",
		stats: "200+ Students • 4 Labs",
	},
	{
		title: "IoT Systems",
		description: "Industrial IoT and sensor integration with real manufacturing.",
		stats: "150+ Students • 3 Live Projects",
	},
	{
		title: "3D Printing & AM",
		description: "Advanced manufacturing capability and design thinking.",
		stats: "100+ Students • 2 Hubs",
	},
	{
		title: "Educator Network",
		description: "Teacher enablement programs and curriculum co-creation.",
		stats: "80+ Educators • 5-State Reach",
	},
];

export default function ATLEcosystem() {
	return (
		<section className="section-spacing bg-white border-b border-line">
			<div className="container-wide">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className="max-w-[700px] mb-10 lg:mb-12"
				>
					<span className="text-overline">Innovation Ecosystem</span>
					<h2 className="text-headline mt-3">
						Building tomorrow&apos;s innovation infrastructure
					</h2>
					<p className="text-body-lg mt-4">
						We operate a dedicated innovation ecosystem where students, educators,
						and enterprises collaborate. Hands-on labs in robotics, IoT, and
						advanced manufacturing — infrastructure that transforms communities.
					</p>
				</motion.div>

				{/* Grid */}
				<div className="grid md:grid-cols-2 gap-4">
					{ECOSYSTEM.map((item, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: i * 0.08 }}
							className="group p-6 md:p-8 rounded-2xl border border-line bg-white hover:border-primary/30 hover:shadow-glow-soft transition-all duration-300"
						>
							<div className="flex items-start justify-between gap-4">
								<div>
									<h3 className="text-lg font-semibold text-ink tracking-tight">
										{item.title}
									</h3>
									<p className="text-sm text-subtle mt-2 leading-relaxed">
										{item.description}
									</p>
								</div>
								<span className="flex-shrink-0 w-9 h-9 rounded-full bg-accent-soft border border-line flex items-center justify-center text-micro font-bold text-primary-dark">
									{String(i + 1).padStart(2, "0")}
								</span>
							</div>
							<p className="text-xs font-medium text-muted mt-5 pt-4 border-t border-accent-soft tracking-wide uppercase">
								{item.stats}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
