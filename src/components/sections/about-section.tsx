/** @format */

"use client";

import { motion } from "motion/react";
import { useTranslation } from "@/hooks/useTranslation";

// apple.com/mac "Answer a few questions" banner: one gray tile with centered copy
// and a single pill CTA
export function AboutSection() {
	const { t } = useTranslation();

	return (
		<section id='about' className='section-white py-16 sm:py-24'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 32 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					className='tile-gray overflow-hidden'>
					{/* Copy */}
					<div className='px-8 py-16 sm:px-12 sm:py-24 flex flex-col items-center text-center'>
						<p className='text-sm sm:text-base font-semibold text-[#bf4800] dark:text-[#f56300]'>
							{t("about.badge")}
						</p>
						<h2 className='mt-3 max-w-md text-[28px] sm:text-[32px] lg:text-[34px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#1d1d1f] dark:text-[#f5f5f7]'>
							{t("about.summaryTitle")}
						</h2>
						<p className='mt-4 max-w-sm text-[15px] sm:text-[17px] leading-relaxed text-[#6e6e73] dark:text-[#86868b]'>
							{t("about.summaryText")}
						</p>
						<a href='#contact' className='btn-pill mt-7 sm:mt-8'>
							{t("about.cta")}
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
