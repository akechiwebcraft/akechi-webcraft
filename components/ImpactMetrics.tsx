"use client";

import { motion } from "framer-motion";
import { useCounterAnimation, formatNumber } from "@/lib/animations";

const METRICS = [
	{ value: 20, suffix: "+", label: "Enterprise Clients" },
	{ value: 40, suffix: "+", label: "Projects Delivered" },
	{ value: 2000, suffix: "+", label: "Students Trained" },
	{ value: 98, suffix: "%", label: "Client Satisfaction" },
];

function MetricCard({
	value,
	suffix,
	label,
}: {
	value: number;
	suffix: string;
	label: string;
}) {
	const [ref, count] = useCounterAnimation(value, 2000);

	return (
		<div ref={ref} className="text-center">
			<p className="text-stat-lg font-bold tracking-tight text-primary leading-none">
				{formatNumber(count)}
				{suffix}
			</p>
			<p className="text-note text-subtle mt-3">{label}</p>
		</div>
	);
}

export default function ImpactMetrics() {
	return (
		<section className="section-spacing bg-tint border-b border-line">
			<div className="container-wide">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className="text-center mb-10 lg:mb-12"
				>
					<span className="text-overline">Impact</span>
					<h2 className="text-headline mt-3">Numbers that matter</h2>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 py-8 md:py-10 px-6 md:px-10 rounded-2xl border border-line bg-white shadow-card"
				>
					{METRICS.map((metric, i) => (
						<MetricCard key={i} {...metric} />
					))}
				</motion.div>
			</div>
		</section>
	);
}
