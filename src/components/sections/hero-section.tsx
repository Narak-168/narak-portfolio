/** @format */

"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useTranslation } from "@/hooks/useTranslation";
import {
	ArrowDown,
	FileText,
	Sparkles,
	MapPin,
	Code2,
	Check,
} from "lucide-react";
import {
	SiReact,
	SiTypescript,
	SiNextdotjs,
	SiTailwindcss,
} from "react-icons/si";
import { LiveGradient } from "@/components/ui/live-gradient";

interface HeroSectionProps {
	onOpenCV: () => void;
}

export function HeroSection({ onOpenCV }: HeroSectionProps) {
	const { t } = useTranslation();

	return (
		<section
			id='home'
			className='relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden'>
			{/* Live ambient animated background gradient and grid */}
			<LiveGradient />
			<div className='absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none' />

			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center'>
					{/* Left Column: Typography & CTAs */}
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className='lg:col-span-7 flex flex-col items-start'>
						{/* Location & Availability Badge */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.1, duration: 0.4 }}
							className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-[#a7f175]/40 text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-6 shadow-xs'>
							<span className='flex h-2 w-2 relative'>
								<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5757] opacity-75' />
								<span className='relative inline-flex rounded-full h-2 w-2 bg-[#ff5757]' />
							</span>
							<span>{t("hero.status")}</span>
							<span className='text-zinc-300 dark:text-zinc-700'>•</span>
							<span className='flex items-center gap-1 text-zinc-500 dark:text-zinc-400'>
								<MapPin className='w-3 h-3 text-[#3a7516] dark:text-[#a7f175]' />
								{t("hero.location")}
							</span>
						</motion.div>

						{/* Main Headline */}
						<h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-6'>
							<span className='block text-zinc-400 dark:text-zinc-500 font-medium text-2xl sm:text-3xl mb-1'>
								{t("hero.greeting")}
							</span>
							<span className='block'>{t("hero.imNarak")}</span>
							<span className='block text-transparent bg-clip-text bg-[hsl(96,82%,70%)] dark:bg-[rgb(167,241,117)] font-bold'>
								{t("hero.imAFrontend")}
							</span>
							<span className='block'>{t("hero.developer")}</span>
						</h1>

						{/* Introduction */}
						<p className='text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-xl leading-relaxed mb-8'>
							{t("hero.intro")}
						</p>

						{/* Two CTA Buttons */}
						<div className='flex flex-wrap items-center gap-4 w-full sm:w-auto'>
							<a
								href='#projects'
								className='inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#a7f175] hover:bg-[#96e062] text-zinc-950 transition-all shadow-lg shadow-[#a7f175]/25 hover:shadow-xl hover:shadow-[#a7f175]/35 hover:scale-[1.02] active:scale-[0.98] group'>
								<span>{t("hero.viewWork")}</span>
								<ArrowDown className='w-4 h-4 group-hover:translate-y-0.5 transition-transform' />
							</a>
							<button
								onClick={onOpenCV}
								className='inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 hover:border-[#ff5757]/60 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer'>
								<FileText className='w-4 h-4 text-[#ff5757]' />
								<span>{t("hero.downloadCV")}</span>
							</button>
						</div>

						{/* Tech stack quick badges */}
						<div className='mt-10 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 w-full flex flex-wrap items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400'>
							<span className='font-mono uppercase text-[11px] tracking-wider text-zinc-400 dark:text-zinc-500'>
								{t("hero.coreStack")}
							</span>
							<div className='flex items-center gap-3'>
								<span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 font-medium text-zinc-700 dark:text-zinc-300'>
									<SiReact className='w-3.5 h-3.5 text-cyan-400' /> React
								</span>
								<span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 font-medium text-zinc-700 dark:text-zinc-300'>
									<SiNextdotjs className='w-3.5 h-3.5 text-zinc-900 dark:text-white' />{" "}
									Next.js
								</span>
								<span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 font-medium text-zinc-700 dark:text-zinc-300'>
									<SiTypescript className='w-3.5 h-3.5 text-blue-400' />{" "}
									TypeScript
								</span>
								<span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 font-medium text-zinc-700 dark:text-zinc-300'>
									<SiTailwindcss className='w-3.5 h-3.5 text-sky-400' />{" "}
									Tailwind
								</span>
							</div>
						</div>
					</motion.div>

					{/* Right Column: Developer Visual Card & Avatar */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
						className='lg:col-span-5 flex justify-center lg:justify-end relative'>
						{/* Developer Card Frame */}
						<div className='relative w-full max-w-sm sm:max-w-md rounded-3xl bg-linear-to-b from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 p-2 sm:p-3 border border-zinc-200/90 dark:border-zinc-800 shadow-xl'>
							{/* Code Window Header */}
							<div className='flex items-center justify-between px-3 py-2 border-b border-zinc-200/60 dark:border-zinc-800/60'>
								<div className='flex items-center gap-1.5'>
									<span className='h-2.5 w-2.5 rounded-full bg-red-400/80' />
									<span className='h-2.5 w-2.5 rounded-full bg-yellow-400/80' />
									<span className='h-2.5 w-2.5 rounded-full bg-emerald-400/80' />
								</div>
								<span className='text-[11px] font-mono text-zinc-500 dark:text-zinc-400'>
									narak-leng.dev
								</span>
								<div className='w-7' />
							</div>

							{/* Photo / Visual Container */}
							<div className='relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-linear-to-b from-zinc-200/40 via-zinc-100/20 to-zinc-900/10 dark:from-zinc-800/40 dark:via-zinc-900/40 dark:to-zinc-950/80 flex items-end justify-center'>
								{/* Live ambient glow behind portrait */}
								<motion.div
									aria-hidden='true'
									className='absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-[#a7f175]/35 via-[#ff5757]/20 to-[#a7f175]/25 blur-3xl pointer-events-none'
									animate={{
										scale: [1, 1.25, 0.95, 1],
										rotate: [0, 180, 360],
										opacity: [0.55, 0.85, 0.55],
									}}
									transition={{
										duration: 10,
										repeat: Infinity,
										ease: "easeInOut",
									}}
								/>

								<Image
									src='/images/Narak-NoBG.PNG'
									alt='Narak Leng'
									width={420}
									height={500}
									className='object-contain h-full w-auto drop-shadow-2xl z-10 transition-transform duration-700 hover:scale-105'
									priority
								/>

								{/* Floating Mini Badge: UI/UX & Code */}
								<div className='absolute bottom-4 left-4 z-20 px-3 py-2 rounded-xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-lg flex items-center gap-2.5'>
									<div className='h-8 w-8 rounded-lg bg-[#a7f175]/20 text-[#3a7516] dark:text-[#a7f175] flex items-center justify-center font-bold'>
										<Code2 className='w-4 h-4' />
									</div>
									<div>
										<p className='text-xs font-semibold text-zinc-900 dark:text-zinc-100 leading-none'>
											{t("hero.frontendEngineer")}
										</p>
										<p className='text-[10px] text-zinc-500 dark:text-zinc-400 mt-1 font-mono'>
											{t("hero.cleanUISolidLogic")}
										</p>
									</div>
								</div>

								{/* Floating Badge: Degree */}
								<div className='absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-[#ff5757]/30 shadow-sm flex items-center gap-1.5 text-[11px] font-medium text-zinc-700 dark:text-zinc-300'>
									<Sparkles className='w-3 h-3 text-[#ff5757]' />
									<span>{t("hero.ruppDegree")}</span>
								</div>
							</div>

							{/* Card Footer status info */}
							<div className='p-3 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400'>
								<span className='font-mono'>@Narak-168</span>
								<span className='flex items-center gap-1 font-medium text-[#3a7516] dark:text-[#a7f175]'>
									<Check className='w-3.5 h-3.5 text-[#3a7516] dark:text-[#a7f175]' />{" "}
									{t("hero.verifiedDev")}
								</span>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
