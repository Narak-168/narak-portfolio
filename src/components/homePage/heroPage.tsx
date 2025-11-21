/** @format */

"use client";

import { useTranslation } from "@/hooks";
import FallingText from "../fallingText/page";
import { AnimatedGradientText } from "../ui/animated-gradient-text";
import TextType from "../textType/page";
import {
	ScrollVelocityContainer,
	ScrollVelocityRow,
} from "../ui/scroll-based-velocity";
import { motion } from "motion/react";

export default function HeroPage() {
	const { t, locale } = useTranslation("common");

	const fallingText = t("hero.fallingText");
	const highlightWords = t("hero.fallingTextHighlights") as string[] | string;
	const highlights = Array.isArray(highlightWords) ? highlightWords : [];

	return (
		<section className='min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 relative overflow-hidden'>
			{/* Falling Text - Behind */}
			<div className='absolute inset-0 z-0 h-full overflow-hidden'>
				<FallingText
					key={locale}
					text={fallingText}
					highlightWords={highlights}
					backgroundColor='transparent'
					wireframes={false}
					gravity={0.56}
					fontSize='1rem'
					mouseConstraintStiffness={0.9}
					trigger='auto'
				/>
			</div>

			{/* Content - Centered */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className='relative z-10 w-full flex flex-col items-center justify-center'>
				<div className='max-w-4xl pb-20 sm:pb-24 md:pb-32 w-full'>
					<div className='flex flex-col items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8'>
						{/* Welcome */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='py-1 sm:py-2'>
							<p className='font-black tracking-tighter text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-center'>
								{t("hero.title")}
							</p>
						</motion.div>

						{/* To My Portfolio */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className='py-1 sm:py-2'>
							<AnimatedGradientText className='font-black tracking-tighter text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-center inline-block w-full'>
								{t("hero.subtitle")}
							</AnimatedGradientText>
						</motion.div>

						{/* Text + Role Typewriter */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className='relative z-20 w-full flex flex-col items-center justify-center'>
							<div className='py-1 sm:py-2'>
								<TextType
									text={["UX/UI ?", "Developer ?", "Designer ?", "Lecturer ?"]}
									typingSpeed={100}
									pauseDuration={1500}
									showCursor={true}
									cursorCharacter='|'
									className='font-black tracking-tighter text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-blue-500 leading-tight text-center'
								/>
							</div>
							<div className='py-1 sm:py-2'>
								<h1 className='font-black tracking-tighter text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-center'>
									{t("hero.description")}
								</h1>
							</div>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
