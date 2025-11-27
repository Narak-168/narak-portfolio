/** @format */

"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { motion } from "motion/react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import FuzzyText from "@/components/ui/fuzzy-text";
export default function NotFound() {
	const { t, locale } = useTranslation("common");

	return (
		<div
			className={`min-h-screen flex items-center justify-center px-4 bg-white dark:bg-black ${
				locale === "km" ? "font-khmer" : ""
			}`}>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className='text-center space-y-8 max-w-2xl'>
				{/* 404 Number with Fuzzy Effect */}
				<motion.div
					initial={{ scale: 0.8 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='relative flex justify-center items-center'>
					<FuzzyText
						fontSize='clamp(100px, 20vw, 250px)'
						fontWeight={800}
						color='#a855f7'
						enableHover={true}
						baseIntensity={0.2}
						hoverIntensity={0.6}>
						404
					</FuzzyText>
				</motion.div>

				{/* Message */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className='space-y-4'>
					<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white'>
						{locale === "km" ? "រកមិនឃើញទំព័រ" : "Page Not Found"}
					</h2>
					<p className='text-lg sm:text-xl text-gray-600 dark:text-gray-400'>
						{locale === "km"
							? "សូមអភ័យទោស ទំព័រដែលអ្នកកំពុងស្វែងរកមិនមាននៅទីនេះទេ"
							: "Sorry, the page you are looking for doesn't exist or has been moved."}
					</p>
				</motion.div>

				{/* Back to Home Button */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}>
					<Link href='/'>
						<InteractiveHoverButton>
							{locale === "km" ? "ត្រលប់ទៅទំព័រដើម" : "Back to Home"}
						</InteractiveHoverButton>
					</Link>
				</motion.div>

				{/* Decorative Elements */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.8 }}
					className='flex justify-center gap-4 pt-8'>
					<div className='w-2 h-2 rounded-full bg-purple-500 animate-bounce'></div>
					<div
						className='w-2 h-2 rounded-full bg-pink-500 animate-bounce'
						style={{ animationDelay: "0.2s" }}></div>
					<div
						className='w-2 h-2 rounded-full bg-blue-500 animate-bounce'
						style={{ animationDelay: "0.4s" }}></div>
				</motion.div>
			</motion.div>
		</div>
	);
}
