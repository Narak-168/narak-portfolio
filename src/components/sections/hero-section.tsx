/** @format */

"use client";

import { useRef } from "react";
import Image from "next/image";
import {
	motion,
	useReducedMotion,
	useScroll,
	useTransform,
} from "motion/react";
import { useTranslation } from "@/hooks/useTranslation";
import { ShapeBurst } from "@/components/ui/shape-burst";
import { ChevronRight, MapPin } from "lucide-react";

interface HeroSectionProps {
	onOpenCV: () => void;
}

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroSection({ onOpenCV }: HeroSectionProps) {
	const { t } = useTranslation();
	const sectionRef = useRef<HTMLElement>(null);
	const reduceMotion = useReducedMotion();

	// 0 when the hero's top is at the viewport top, 1 once it has scrolled fully away
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});
	const photoY = useTransform(
		scrollYProgress,
		[0, 1],
		[0, reduceMotion ? 0 : 120],
	);
	const photoScale = useTransform(
		scrollYProgress,
		[0, 1],
		[1, reduceMotion ? 1 : 0.92],
	);
	const glowOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

	return (
		<section
			ref={sectionRef}
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
					className='mt-2 text-[40px] sm:text-6xl md:text-7xl font-semibold tracking-[-0.04em] leading-[1.06] text-[#1d1d1f] dark:text-[#f5f5f7]'>
					{/* One inline-block so a single gradient runs across both lines */}
					<span className='inline-block pb-1 bg-gradient-to-r from-[#0071e3] via-[#9b51e0] to-[#f56300] dark:from-[#2997ff] dark:via-[#bf5af2] dark:to-[#ff9f0a] bg-clip-text text-transparent'>
						{t("hero.role")}
						<br />
						{t("hero.and")} {t("hero.designer")}
					</span>
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
				{/* Aurora glow (Apple Intelligence style): fades out as the hero scrolls away */}
				<motion.div
					aria-hidden='true'
					style={{ opacity: glowOpacity }}
					className='absolute inset-0 pointer-events-none'>
					{/* Slowly turning colour wheel, heavily blurred */}
					<motion.div
						animate={reduceMotion ? undefined : { rotate: 360 }}
						transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
						className='absolute left-1/2 top-[22%] -ml-[32%] w-[64%] aspect-square rounded-full bg-[conic-gradient(from_0deg,#0071e3,#bf5af2,#ff375f,#ff9f0a,#0071e3)] opacity-25 dark:opacity-40 blur-[70px] will-change-transform'
					/>
					{/* Drifting light blobs */}
					<motion.div
						animate={
							reduceMotion ? undefined : (
								{
									x: ["-6%", "8%", "-6%"],
									y: ["0%", "-8%", "0%"],
									scale: [1, 1.15, 1],
								}
							)
						}
						transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
						className='absolute left-[8%] bottom-[18%] w-[42%] aspect-square rounded-full bg-[#0071e3] opacity-20 dark:opacity-30 blur-[60px] will-change-transform'
					/>
					<motion.div
						animate={
							reduceMotion ? undefined : (
								{
									x: ["6%", "-8%", "6%"],
									y: ["-4%", "6%", "-4%"],
									scale: [1.1, 0.95, 1.1],
								}
							)
						}
						transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
						className='absolute right-[6%] bottom-[26%] w-[38%] aspect-square rounded-full bg-[#bf5af2] opacity-20 dark:opacity-30 blur-[60px] will-change-transform'
					/>
					<motion.div
						animate={
							reduceMotion ? undefined : (
								{ x: ["0%", "10%", "0%"], scale: [0.9, 1.1, 0.9] }
							)
						}
						transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
						className='absolute left-[30%] bottom-0 w-[40%] aspect-square rounded-full bg-[#ff9f0a] opacity-15 dark:opacity-25 blur-[70px] will-change-transform'
					/>
				</motion.div>

				{/* Shapes start hidden behind the portrait and burst outward on scroll */}
				<ShapeBurst progress={scrollYProgress} />

				{/* Portrait lags the page and settles back as you scroll, for depth */}
				<motion.div
					style={{ y: photoY, scale: photoScale }}
					className='absolute inset-0 origin-bottom will-change-transform'>
					<Image
						src='/images/Narak-NoBG.PNG'
						alt='Narak Leng'
						fill
						sizes='(min-width: 768px) 768px, 100vw'
						className='object-contain object-bottom'
						priority
					/>
				</motion.div>
				<div className='absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white dark:from-black to-transparent' />
			</motion.div>
		</section>
	);
}
