/** @format */

"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useTranslation } from "@/hooks/useTranslation";
import { ChevronRight, MapPin } from "lucide-react";

interface HeroSectionProps {
	onOpenCV: () => void;
}

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroSection({ onOpenCV }: HeroSectionProps) {
	const { t } = useTranslation();

	return (
		<section
			id='home'
			className='section-white relative overflow-hidden pt-28 sm:pt-32'>
			<div className='max-w-5xl mx-auto px-4 sm:px-6 text-center'>
				{/* Availability eyebrow */}
				<motion.p
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease }}
					className='inline-flex items-center gap-2 text-sm font-semibold text-[#bf4800] dark:text-[#f56300]'>
					<span className='relative flex h-2 w-2'>
						<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f56300] opacity-75' />
						<span className='relative inline-flex h-2 w-2 rounded-full bg-[#f56300]' />
					</span>
					{t("hero.status")}
				</motion.p>

				<motion.p
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.05, ease }}
					className='mt-5 text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-[#1d1d1f] dark:text-[#f5f5f7]'>
					{t("hero.greeting")} {t("hero.im")} {t("hero.name")}
				</motion.p>

				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.1, ease }}
					className='mt-2 text-5xl sm:text-7xl md:text-8xl font-semibold tracking-[-0.045em] leading-[1.02] text-[#1d1d1f] dark:text-[#f5f5f7]'>
					<span className='bg-gradient-to-r from-[#0071e3] via-[#9b51e0] to-[#f56300] dark:from-[#2997ff] dark:via-[#bf5af2] dark:to-[#ff9f0a] bg-clip-text text-transparent'>
						{t("hero.role")}
					</span>{" "}
					{t("hero.developer")}
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2, ease }}
					className='mt-6 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed text-[#6e6e73] dark:text-[#86868b]'>
					{t("hero.intro")}
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3, ease }}
					className='mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4'>
					<a href='#projects' className='btn-pill'>
						{t("hero.viewWork")}
					</a>
					<button onClick={onOpenCV} className='link-more'>
						{t("hero.downloadCV")}
						<ChevronRight className='w-4 h-4' />
					</button>
				</motion.div>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className='mt-6 inline-flex items-center gap-1.5 text-sm text-[#86868b]'>
					<MapPin className='w-3.5 h-3.5' />
					{t("hero.location")}
				</motion.p>
			</div>

			{/* Portrait, product-shot style */}
			<motion.div
				initial={{ opacity: 0, y: 40, scale: 0.97 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ duration: 1.1, delay: 0.35, ease }}
				className='relative mx-auto mt-10 sm:mt-14 w-full max-w-3xl h-[46vh] sm:h-[56vh] md:h-[64vh]'>
				<div className='absolute left-1/2 bottom-0 -translate-x-1/2 w-[90%] h-[80%] rounded-full bg-[radial-gradient(closest-side,rgba(0,113,227,0.28),rgba(191,90,242,0.14),transparent)] blur-2xl' />
				<Image
					src='/images/Narak-NoBG.PNG'
					alt='Narak Leng'
					fill
					sizes='(min-width: 768px) 768px, 100vw'
					className='object-contain object-bottom'
					priority
				/>
				<div className='absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white dark:from-black to-transparent' />
			</motion.div>
		</section>
	);
}
