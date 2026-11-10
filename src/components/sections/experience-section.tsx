/** @format */

"use client";

import { useMemo, useRef } from "react";
import Image from "next/image";
import { motion, useScroll } from "motion/react";
import { experiencesData } from "@/data/portfolio-data";
import { useTranslation } from "@/hooks/useTranslation";
import { Check, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { ShapeBurst } from "@/components/ui/shape-burst";

// Shapes start popping once the photo is a third of the way up the screen and
// are all out by the time it reaches the middle
const PHOTO_BURST_TIMING = { start: 0.3, step: 0.035, span: 0.35 };

interface ExperiencePhotoProps {
	src: string;
	alt: string;
	palette?: string[];
	className?: string;
}

function ExperiencePhoto({
	src,
	alt,
	palette,
	className = "",
}: ExperiencePhotoProps) {
	const ref = useRef<HTMLDivElement>(null);
	// 0 when the photo's top enters the bottom of the screen, 1 when it is centred
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center center"],
	});

	return (
		<div
			ref={ref}
			className={`relative h-[300px] sm:h-[340px] w-full max-w-[320px] overflow-hidden ${className}`}>
			{/* Shapes sit behind the cut-out and burst outward on scroll; the
			    clipped zone and reduced spread keep them off the card text */}
			<ShapeBurst
				progress={scrollYProgress}
				palette={palette}
				originY='52%'
				spread={0.78}
				timing={PHOTO_BURST_TIMING}
			/>
			<Image
				src={src}
				alt={alt}
				fill
				sizes='320px'
				className='object-contain object-bottom'
			/>
		</div>
	);
}

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
							className='tile-gray p-8 sm:p-12 grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:grid-rows-[auto_1fr] gap-8 md:gap-12'>
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
							<div className='md:col-start-2 md:row-start-1 md:row-span-2'>
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

							{/* Photo: bottom of the left column on desktop, end of the card on
							    phones, pulled through the card padding to sit on its bottom edge */}
							{exp.photo && (
								<ExperiencePhoto
									src={exp.photo}
									alt={`Narak Leng at ${exp.company}`}
									palette={exp.photoPalette}
									className='self-end mx-auto md:mx-0 md:col-start-1 md:row-start-2 -mb-8 sm:-mb-12'
								/>
							)}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
