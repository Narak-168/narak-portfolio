/** @format */

"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import { journeyData } from "@/data/portfolio-data";
import { useTranslation } from "@/hooks/useTranslation";
import { SectionHeader } from "@/components/ui/section-header";
import {
	GraduationCap,
	Briefcase,
	Palette,
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
				return <Briefcase className='w-8 h-8 text-[#bf4800] dark:text-[#f56300]' />;
			case "course":
				return (
					<Palette className='w-8 h-8 text-[#0066cc] dark:text-[#2997ff]' />
				);
			case "education":
			default:
				return <GraduationCap className='w-8 h-8 text-[#bf4800] dark:text-[#f56300]' />;
		}
	};

	return (
		<section id='journey' className='section-gray py-24 sm:py-32'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<SectionHeader
					eyebrow={t("journey.badge")}
					title={t("journey.title")}
					subtitle={t("journey.subtitle")}
				/>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5'>
					{localizedJourney.map((item, idx) => (
						<motion.div
							key={item.period + item.title}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{
								duration: 0.6,
								delay: idx * 0.1,
								ease: [0.16, 1, 0.3, 1],
							}}
							className='tile p-8 flex flex-col transition-transform duration-300 hover:scale-[1.015]'>
							{getMilestoneIcon(item.type)}

							<p className='mt-6 text-sm text-[#86868b]'>{item.period}</p>
							<h3 className='mt-1.5 text-xl sm:text-2xl font-semibold leading-tight tracking-[-0.02em] text-[#1d1d1f] dark:text-[#f5f5f7]'>
								{item.title}
							</h3>
							<p className='mt-2 text-[15px] font-medium text-[#0066cc] dark:text-[#2997ff]'>
								{item.institution}
							</p>
							{item.badge && (
								<p className='mt-3'>
									<span className='inline-block px-3 py-1 rounded-full text-xs text-[#1d1d1f] dark:text-[#f5f5f7] bg-[#f5f5f7] dark:bg-black'>
										{item.badge}
									</span>
								</p>
							)}

							<p className='mt-4 text-[15px] leading-relaxed text-[#6e6e73] dark:text-[#86868b]'>
								{item.description}
							</p>

							<ul className='mt-auto pt-6 space-y-2 text-sm text-[#1d1d1f] dark:text-[#f5f5f7]'>
								{item.highlights.map((hl, hIdx) => (
									<li key={hIdx} className='flex items-start gap-2.5'>
										<span className='mt-2 h-1 w-1 rounded-full bg-[#f56300] shrink-0' />
										<span>{hl}</span>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
