/** @format */

"use client";

import { motion } from "motion/react";

interface LiveGradientProps {
	className?: string;
}

export function LiveGradient({ className = "" }: LiveGradientProps) {
	return (
		<div
			className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
			aria-hidden='true'>
			{/* Brand Green Orb (#a7f175) - Floating Top/Center */}
			<motion.div
				className='absolute -top-10 left-1/4 w-96 h-96 sm:w-[520px] sm:h-[520px] rounded-full bg-gradient-to-tr from-[#a7f175]/25 to-[#a7f175]/10 dark:from-[#a7f175]/20 dark:to-[#a7f175]/5 blur-[120px] sm:blur-[140px]'
				animate={{
					x: [0, 70, -40, 20, 0],
					y: [0, -60, 30, -20, 0],
					scale: [1, 1.18, 0.92, 1.1, 1],
				}}
				transition={{
					duration: 18,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			{/* Brand Red Orb (#ff5757) - Floating Bottom/Right */}
			<motion.div
				className='absolute -bottom-16 right-5 sm:right-20 w-80 h-80 sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-bl from-[#ff5757]/20 to-[#ff5757]/10 dark:from-[#ff5757]/18 dark:to-[#ff5757]/5 blur-[130px] sm:blur-[150px]'
				animate={{
					x: [0, -60, 30, -50, 0],
					y: [0, 50, -40, 20, 0],
					scale: [1, 0.9, 1.22, 0.95, 1],
				}}
				transition={{
					duration: 22,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			{/* Accent Mint/Green Orb - Floating Center/Left */}
			<motion.div
				className='absolute top-1/3 -left-16 w-72 h-72 sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-br from-[#a7f175]/20 to-[#3a7516]/10 dark:from-[#a7f175]/15 dark:to-transparent blur-[120px]'
				animate={{
					x: [0, 80, -20, 0],
					y: [0, 40, -60, 0],
					scale: [0.95, 1.15, 0.9, 0.95],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			{/* Accent Coral/Rose Orb - Floating Top/Right */}
			<motion.div
				className='absolute top-20 right-1/4 w-72 h-72 sm:w-[360px] sm:h-[360px] rounded-full bg-gradient-to-br from-[#ff5757]/15 to-[#d63030]/10 dark:from-[#ff5757]/12 dark:to-transparent blur-[125px]'
				animate={{
					x: [0, -40, 50, 0],
					y: [0, -30, 40, 0],
					scale: [1.1, 0.92, 1.15, 1.1],
				}}
				transition={{
					duration: 24,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			{/* Central Rotating Aurora Mesh */}
			<motion.div
				className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[320px] sm:w-[680px] sm:h-[420px] rounded-[100%] bg-gradient-to-r from-[#a7f175]/10 via-[#ff5757]/8 to-[#a7f175]/10 dark:from-[#a7f175]/10 dark:via-[#ff5757]/6 dark:to-[#a7f175]/10 blur-[130px] opacity-70'
				animate={{
					rotate: [0, 180, 360],
					scale: [1, 1.12, 1],
				}}
				transition={{
					duration: 32,
					repeat: Infinity,
					ease: "linear",
				}}
			/>
		</div>
	);
}
