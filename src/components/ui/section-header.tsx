/** @format */

"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
	eyebrow?: ReactNode;
	title: ReactNode;
	subtitle?: ReactNode;
	className?: string;
}

// Centered apple.com-style section intro: small accent eyebrow, large tight headline, gray subhead
export function SectionHeader({
	eyebrow,
	title,
	subtitle,
	className = "",
}: SectionHeaderProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
			className={cn("text-center max-w-3xl mx-auto mb-14 sm:mb-20", className)}>
			{eyebrow && (
				<p className='text-sm sm:text-base font-semibold text-[#0066cc] dark:text-[#2997ff] mb-3'>
					{eyebrow}
				</p>
			)}
			<h2 className='text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.08] text-[#1d1d1f] dark:text-[#f5f5f7]'>
				{title}
			</h2>
			{subtitle && (
				<p className='mt-5 text-lg sm:text-xl leading-relaxed text-[#6e6e73] dark:text-[#86868b] max-w-2xl mx-auto'>
					{subtitle}
				</p>
			)}
		</motion.div>
	);
}
