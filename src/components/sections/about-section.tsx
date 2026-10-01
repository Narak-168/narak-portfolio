/** @format */

"use client";

import { motion } from "motion/react";
import { useTranslation } from "@/hooks/useTranslation";
import {
	Code2,
	Palette,
	Smartphone,
	Cpu,
	Users,
	Sparkles,
	Briefcase,
} from "lucide-react";

export function AboutSection() {
	const { t } = useTranslation();

	const stats = [
		{ value: "IT Eng.", label: t("about.statRupp") },
		{ value: "12+", label: t("about.statProjects") },
		{ value: "100%", label: t("about.statResponsive") },
		{ value: "HR & Tech", label: t("about.statExperience") },
	];

	const highlights = [
		{
			title: t("about.hl1Title"),
			description: t("about.hl1Desc"),
			icon: "Code2",
		},
		{
			title: t("about.hl2Title"),
			description: t("about.hl2Desc"),
			icon: "Palette",
		},
		{
			title: t("about.hl3Title"),
			description: t("about.hl3Desc"),
			icon: "Smartphone",
		},
		{
			title: t("about.hl4Title"),
			description: t("about.hl4Desc"),
			icon: "Cpu",
		},
		{
			title: t("about.hl5Title"),
			description: t("about.hl5Desc"),
			icon: "Users",
		},
		{
			title: t("about.hl6Title"),
			description: t("about.hl6Desc"),
			icon: "Briefcase",
		},
	];

	const getHighlightIcon = (iconName: string) => {
		switch (iconName) {
			case "Code2":
				return (
					<Code2 className='w-5 h-5 text-[rgb(58,117,22)] dark:text-[rgb(167,241,117)]' />
				);
			case "Palette":
				return <Palette className='w-5 h-5 text-[rgb(255,87,87)]' />;
			case "Smartphone":
				return (
					<Smartphone className='w-5 h-5 text-[rgb(58,117,22)] dark:text-[rgb(167,241,117)]' />
				);
			case "Cpu":
				return <Cpu className='w-5 h-5 text-[rgb(255,87,87)]' />;
			case "Users":
				return (
					<Users className='w-5 h-5 text-[rgb(58,117,22)] dark:text-[rgb(167,241,117)]' />
				);
			case "Briefcase":
				return <Briefcase className='w-5 h-5 text-[rgb(255,87,87)]' />;
			default:
				return <Sparkles className='w-5 h-5 text-[rgb(255,87,87)]' />;
		}
	};

	return (
		<section id='about' className='py-20 sm:py-28 relative'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5 }}
					className='text-center max-w-2xl mx-auto mb-14'>
					<span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[rgb(167,241,117)]/15 text-[rgb(58,117,22)] dark:text-[rgb(167,241,117)] border border-[rgb(167,241,117)]/30 mb-3'>
						<Sparkles className='w-3 h-3 text-[rgb(255,87,87)]' />
						{t("about.badge")}
					</span>
					<h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white'>
						{t("about.title")}
					</h2>
				</motion.div>

				{/* Main Narrative Card */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className='mb-12 p-6 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm'>
					<div className='max-w-4xl mx-auto'>
						<p className='text-base sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal'>
							&ldquo;{t("about.bio")}&rdquo;
						</p>

						{/* Quick stats pills */}
						<div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-800'>
							{stats.map((item, idx) => (
								<div key={idx} className='text-center sm:text-left'>
									<p className='text-xl sm:text-2xl font-bold text-[rgb(58,117,22)] dark:text-[rgb(167,241,117)] font-mono'>
										{item.value}
									</p>
									<p className='text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium'>
										{item.label}
									</p>
								</div>
							))}
						</div>
					</div>
				</motion.div>

				{/* 6 Core Highlights Grid */}
				<div>
					<div className='text-left mb-6'>
						<h3 className='text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500'>
							{t("about.expertiseTitle")}
						</h3>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
						{highlights.map((hl, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{ duration: 0.4, delay: idx * 0.08 }}
								className='p-6 rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-[rgb(167,241,117)]/50 dark:hover:border-[rgb(167,241,117)]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[rgb(167,241,117)]/10 group'>
								<div className='h-10 w-10 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center border border-zinc-200/60 dark:border-zinc-700/60 shadow-xs mb-4 group-hover:scale-110 transition-transform'>
									{getHighlightIcon(hl.icon)}
								</div>
								<h4 className='text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-[rgb(58,117,22)] dark:group-hover:text-[rgb(167,241,117)] transition-colors'>
									{hl.title}
								</h4>
								<p className='text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed'>
									{hl.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
