/** @format */

"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import { experiencesData } from "@/data/portfolio-data";
import { useTranslation } from "@/hooks/useTranslation";
import {
	Briefcase,
	Building2,
	Calendar,
	MapPin,
	CheckCircle2,
} from "lucide-react";

export function ExperienceSection() {
	const { t } = useTranslation();

	const localizedExperiences = useMemo(() => {
		const mapping: Record<number, string> = {
			0: "chipMong",
			1: "wingBank",
			2: "privateSchool",
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
		<section id='experience' className='py-20 sm:py-28 relative'>
			<div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* Section Header */}
				<div className='text-center max-w-2xl mx-auto mb-14'>
					<span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#a7f175]/15 text-[#3a7516] dark:text-[#a7f175] border border-[#a7f175]/30 mb-3'>
						<Briefcase className='w-3.5 h-3.5 text-[#ff5757]' />
						{t("experience.badge")}
					</span>
					<h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white'>
						{t("experience.title")}
					</h2>
					<p className='text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2'>
						{t("experience.subtitle")}
					</p>
				</div>

				{/* Experience Cards Stack */}
				<div className='space-y-6'>
					{localizedExperiences.map((exp, idx) => (
						<motion.div
							key={exp.role + idx}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
								exp.isCurrent ?
									"bg-white dark:bg-zinc-900/90 border-[#a7f175]/40 dark:border-[#a7f175]/40 shadow-md shadow-[#a7f175]/10 ring-1 ring-[#a7f175]/30"
								:	"bg-white dark:bg-zinc-900/60 border-zinc-200/90 dark:border-zinc-800/90 shadow-xs"
							}`}>
							{/* Card Header */}
							<div className='flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6'>
								<div>
									<div className='flex items-center gap-2 mb-1 flex-wrap'>
										<h3 className='text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight'>
											{exp.role}
										</h3>
										{exp.isCurrent && (
											<span className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#a7f175]/15 text-[#3a7516] dark:text-[#a7f175] border border-[#a7f175]/40'>
												<span className='h-1.5 w-1.5 rounded-full bg-[#ff5757] animate-pulse' />
												{t("experience.present")}
											</span>
										)}
									</div>
									<div className='flex items-center gap-2 text-sm font-medium text-[#3a7516] dark:text-[#a7f175]'>
										<Building2 className='w-4 h-4 shrink-0' />
										<span>{exp.company}</span>
									</div>
								</div>

								<div className='flex flex-col sm:items-end gap-1 text-xs font-mono text-zinc-500 dark:text-zinc-400'>
									<span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60'>
										<Calendar className='w-3 h-3 text-[#ff5757]' />
										{exp.period}
									</span>
									<span className='flex items-center gap-1 mt-0.5'>
										<MapPin className='w-3 h-3 text-zinc-400' />
										{exp.location}
									</span>
								</div>
							</div>

							{/* Responsibilities list */}
							<div className='space-y-2.5 mb-6'>
								<h4 className='text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2'>
									{t("experience.responsibilities")}
								</h4>
								<ul className='grid grid-cols-1 md:grid-cols-2 gap-2.5'>
									{exp.responsibilities.map((resp, rIdx) => (
										<li
											key={rIdx}
											className='flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 bg-zinc-50/70 dark:bg-zinc-800/30 p-2.5 rounded-xl border border-zinc-100 dark:border-zinc-800/60'>
											<CheckCircle2 className='w-4 h-4 text-[#3a7516] dark:text-[#a7f175] shrink-0 mt-0.5' />
											<span className='leading-snug'>{resp}</span>
										</li>
									))}
								</ul>
							</div>

							{/* Key Skills Tags */}
							<div className='pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex flex-wrap items-center gap-2'>
								<span className='text-[11px] font-mono text-zinc-400 dark:text-zinc-500 mr-1'>
									{t("experience.competencies")}
								</span>
								{exp.keySkills.map((sk, sIdx) => (
									<span
										key={sIdx}
										className='px-2.5 py-0.5 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/50'>
										{sk}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
