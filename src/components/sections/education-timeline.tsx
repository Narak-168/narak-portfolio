/** @format */

"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import { journeyData } from "@/data/portfolio-data";
import { useTranslation } from "@/hooks/useTranslation";
import {
	GraduationCap,
	Briefcase,
	Palette,
	Sparkles,
	Calendar,
	Building,
} from "lucide-react";

export function EducationTimeline() {
	const { t } = useTranslation();

	const localizedJourney = useMemo(() => {
		const mapping: Record<number, string> = {
			0: "course",
			1: "istad",
			2: "rupp",
		};

		return journeyData.map((item, idx) => {
			const key = mapping[idx];
			if (!key) return item;

			const period = t(`journey.items.${key}.period`);
			const title = t(`journey.items.${key}.title`);
			const institution = t(`journey.items.${key}.institution`);
			const badge = t(`journey.items.${key}.badge`);
			const description = t(`journey.items.${key}.description`);
			const highlights = t(`journey.items.${key}.highlights`, {
				returnObjects: true,
			});

			return {
				...item,
				period: period !== `journey.items.${key}.period` ? period : item.period,
				title: title !== `journey.items.${key}.title` ? title : item.title,
				institution:
					institution !== `journey.items.${key}.institution` ? institution : (
						item.institution
					),
				badge: badge !== `journey.items.${key}.badge` ? badge : item.badge,
				description:
					description !== `journey.items.${key}.description` ? description : (
						item.description
					),
				highlights: Array.isArray(highlights) ? highlights : item.highlights,
			};
		});
	}, [t]);

	const getMilestoneIcon = (type: string) => {
		switch (type) {
			case "career":
				return <Briefcase className='w-4 h-4 text-[rgb(255,87,87)]' />;
			case "course":
				return (
					<Palette className='w-4 h-4 text-[rgb(58,117,22)] dark:text-[rgb(167,241,117)				]' />
				);
			case "education":
			default:
				return <GraduationCap className='w-4 h-4 text-[rgb(255,87,87)]' />;
		}
	};

	return (
		<section id='journey' className='py-20 sm:py-28 relative'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* Section Header */}
				<div className='text-center max-w-2xl mx-auto mb-16'>
					<span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-green/15 text-[rgb(58,117,22)] dark:text-[#a7f175] border border-[#a7f175]/30 mb-3'>
						<Sparkles className='w-3.5 h-3.5 text-[rgb(255,87,87)]' />
						{t("journey.badge")}
					</span>
					<h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white'>
						{t("journey.title")}
					</h2>
					<p className='text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2'>
						{t("journey.subtitle")}
					</p>
				</div>

				{/* Vertical Timeline */}
				<div className='relative pl-6 sm:pl-10 border-l-2 border-dashed border-zinc-300 dark:border-zinc-700 space-y-12 sm:space-y-14 ml-2 sm:ml-6'>
					{localizedJourney.map((item, idx) => (
						<motion.div
							key={item.period + item.title}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: idx * 0.12 }}
							className='relative group'>
							{/* Node Icon on Timeline Line */}
							<div className='absolute -left-9.25 sm:-left-13.25 top-1.5 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white dark:bg-zinc-900 border-2 border-[rgb(167,241,117)] shadow-md shadow-[rgb(167,241,117)]/20 group-hover:scale-110 transition-transform'>
								{getMilestoneIcon(item.type)}
							</div>

							{/* Timeline Milestone Card */}
							<div className='p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200/90 dark:border-zinc-800/90 shadow-xs hover:shadow-lg hover:border-[rgb(167,241,117)]/50 dark:hover:border-[rgb(167,241,117)]/50 transition-all duration-300'>
								{/* Period & Badge */}
								<div className='flex flex-wrap items-center justify-between gap-2 mb-3'>
									<div className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/60'>
										<Calendar className='w-3 h-3 text-[rgb(255,87,87)]' />
										<span>{item.period}</span>
									</div>

									{item.badge && (
										<span className='px-2.5 py-0.5 rounded-full text-[11px] font-medium font-mono bg-[rgb(167,241,117)]/15 text-[rgb(58,117,22)] dark:text-[rgb(167,241,117)] border border-[rgb(167,241,117)]/30'>
											{item.badge}
										</span>
									)}
								</div>

								{/* Title & Institution */}
								<h3 className='text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight mb-1'>
									{item.title}
								</h3>

								<div className='flex items-center gap-1.5 text-sm font-medium text-[rgb(58,117,22)] dark:text-[rgb(167,241,117)] mb-3'>
									<Building className='w-3.5 h-3.5 shrink-0' />
									<span>{item.institution}</span>
								</div>

								{/* Description */}
								<p className='text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4'>
									{item.description}
								</p>

								{/* Key Highlights */}
								<div className='pt-3 border-t border-zinc-100 dark:border-zinc-800/60'>
									<ul className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-600 dark:text-zinc-300'>
										{item.highlights.map((hl, hIdx) => (
											<li key={hIdx} className='flex items-center gap-2'>
												<span className='h-1.5 w-1.5 rounded-full bg-[rgb(255,87,87)] shrink-0' />
												<span>{hl}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
