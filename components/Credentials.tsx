"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CREDENTIALS = [
	{
		name: "CMMI Level 1",
		subtext: "UKAF Appraised",
		description:
			"Capability Maturity Model Integration Level 1 appraised by UKAF for process discipline.",
		logo: "/images/credentials/CMMI.jpeg",
		color: "#1B3A6B",
	},
	{
		name: "ISO 9001:2015",
		subtext: "IAF Certified",
		description:
			"International standard for Quality Management Systems — IAF accredited certification.",
		logo: "/images/credentials/ISO-9001.png",
		color: "#0057A8",
	},
	{
		name: "ISO 27001:2022",
		subtext: "IAF Certified",
		description:
			"Information Security Management System certified under the latest 2022 standard by IAF.",
		logo: "/images/credentials/ISO-27001.png",
		color: "#1A6B3D",
	},
	{
		name: "GeM",
		subtext: "Govt e-Marketplace",
		description:
			"Registered vendor on the Government e-Marketplace for public procurement of IT services.",
		logo: "/images/credentials/gem-logo.png",
		color: "#4B0082",
	},
	{
		name: "iStart Rajasthan",
		subtext: "Govt. Registered",
		description:
			"Registered with iStart Rajasthan — the Government of Rajasthan's flagship startup initiative.",
		logo: "/images/credentials/iStart.png",
		color: "#E65100",
	},
	{
		name: "Startup India",
		subtext: "DPIIT Recognized",
		description:
			"Officially recognized under the Startup India Initiative by DPIIT, Government of India.",
		logo: "/images/credentials/STARTUPINDIA.png",
		color: "#FF6F00",
	},
	{
		name: "QRate",
		subtext: "Q Rate Rated",
		description:
			"Certified by QRate for commitment to delivering world-class digital solutions and services.",
		logo: "/images/credentials/qrate logo.png",
		color: "#28a745",
	},
	{
		name: "Tourism Department",
		subtext: "Chittorgarh",
		description:
			"Official technology partner for tourism sector digital infrastructure and solutions.",
		logo: "/images/credentials/tourism.png",
		color: "#0277BD",
	},
	{
		name: "DoIT&C",
		subtext: "Dept. of IT, Rajasthan",
		description:
			"Registered with the Department of Information Technology & Communication, Rajasthan.",
		logo: "/images/credentials/DOITC.jpeg",
		color: "#00B4C5",
	},
	{
		name: "Education Department",
		subtext: "Ajmer",
		description:
			"Certified education technology partner for STEM, robotics, and innovation lab programs.",
		logo: "/images/credentials/education logo.png",
		color: "#1565C0",
	},
];

export default function Credentials() {
	return (
		<section className="section-spacing-sm bg-tint border-b border-line">
			<div className="container-wide">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
					className="mb-10 lg:mb-12"
				>
					<span className="text-overline">Trust & Recognition</span>
					<h2 className="text-title mt-3">Certifications & achievements</h2>
					<p className="text-body-lg mt-3 max-w-xl">
						Akechi Webcraft Private Limited holds internationally recognized certifications
						and government registrations that reflect our commitment to quality, security, and innovation.
					</p>
				</motion.div>

				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
					{CREDENTIALS.map((cred, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 12 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: i * 0.05 }}
							className="group p-5 rounded-xl border border-line bg-white hover:border-primary/25 hover:shadow-glow-soft transition-all duration-300 flex flex-col items-center text-center"
						>
							<div className="w-14 h-14 mb-4 relative">
								<Image
									src={cred.logo}
									alt={cred.name}
									fill
									className="object-contain"
								/>
							</div>
							<h3 className="text-note font-semibold text-ink leading-tight">
								{cred.name}
							</h3>
							<p
								className="text-micro font-bold mt-1 uppercase tracking-wider"
								style={{ color: cred.color }}
							>
								{cred.subtext}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
