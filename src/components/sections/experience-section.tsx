/** @format */

"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import { experiencesData } from "@/data/portfolio-data";
import { useTranslation } from "@/hooks/useTranslation";
import { Check, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

export function ExperienceSection() {
	const { t } = useTranslation();

	const localizedExperiences = useMemo(() => {
		const mapping: Record<number, string> = {
			0: "demoq",
			1: "chipMong",
			2: "wingBank",
			3: "privateSchool",
		};

		return experiencesData.map((exp, idx) => {
			const key = mapping[idx];
			if (!key) return exp;

			const role = t(`experience.items.${key}.role`);
			const company = t(`experience.items.${key}.company`);
			const period = t(`experience.items.${key}.period`);
			const location = t(`experience.items.${key}.location`);
			const responsibilities = t(`experience.items.${key}.responsibilities`, {
				returnObjects: true,
			});

			return {
				...exp,
				role: role !== `experience.items.${key}.role` ? role : exp.role,
				company:
					company !== `experience.items.${key}.company` ? company : exp.company,
				period:
					period !== `experience.items.${key}.period` ? period : exp.period,
				location:
					location !== `experience.items.${key}.location` ? location : (
						exp.location
					),
				responsibilities:
					Array.isArray(responsibilities) ? responsibilities : (
						exp.responsibilities
					),
			};
		});
	}, [t]);

	return (
		<section id='experience' className='section-white py-24 sm:py-32'>
			<div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
				<SectionHeader
					eyebrow={t("experience.badge")}
					title={t("experience.title")}
					subtitle={t("experience.subtitle")}
				/>

				<div className='space-y-4 sm:space-y-5'>
					{localizedExperiences.map((exp, idx) => (
						<motion.div
							key={exp.role + idx}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{
								duration: 0.6,
								delay: idx * 0.08,
								ease: [0.16, 1, 0.3, 1],
							}}
							className='tile-gray p-8 sm:p-12 grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-8 md:gap-12'>
							{/* Role summary */}
							<div>
								<p className='text-sm text-[#86868b]'>{exp.period}</p>
								<h3 className='mt-2 text-2xl sm:text-[28px] font-semibold leading-tight tracking-[-0.02em] text-[#1d1d1f] dark:text-[#f5f5f7]'>
									{exp.role}
								</h3>
								<p className='mt-2 text-[15px] font-medium text-[#0066cc] dark:text-[#2997ff]'>
									{exp.company}
								</p>
								<p className='mt-1 inline-flex items-center gap-1 text-sm text-[#6e6e73] dark:text-[#86868b]'>
									<MapPin className='w-3.5 h-3.5' />
									{exp.location}
								</p>
								{exp.isCurrent && (
									<p className='mt-5'>
										<span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#0071e3] text-white'>
											<span className='h-1.5 w-1.5 rounded-full bg-white animate-pulse' />
											{t("experience.present")}
										</span>
									</p>
								)}
							</div>

							{/* Responsibilities & skills */}
							<div>
								<p className='text-xs font-semibold uppercase tracking-wider text-[#86868b]'>
									{t("experience.responsibilities")}
								</p>
								<ul className='mt-4 space-y-3'>
									{exp.responsibilities.map((resp, rIdx) => (
										<li
											key={rIdx}
											className='flex items-start gap-3 text-[15px] leading-relaxed text-[#1d1d1f] dark:text-[#f5f5f7]'>
											<Check className='w-4 h-4 mt-1 shrink-0 text-[#0066cc] dark:text-[#2997ff]' />
											<span>{resp}</span>
										</li>
									))}
								</ul>

								<div className='mt-7 flex flex-wrap gap-2'>
									{exp.keySkills.map((sk, sIdx) => (
										<span
											key={sIdx}
											className='px-3 py-1 rounded-full text-xs text-[#1d1d1f] dark:text-[#f5f5f7] bg-white dark:bg-black'>
											{sk}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
