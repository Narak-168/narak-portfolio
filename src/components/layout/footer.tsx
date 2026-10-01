/** @format */

"use client";

import { personalInfo } from "@/data/portfolio-data";
import { ArrowUp, Mail } from "lucide-react";
import { SiGithub, SiTelegram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

export function Footer() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className='border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-12 transition-colors'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col md:flex-row items-center justify-between gap-6'>
					{/* Brand & Subtitle */}
					<div className='text-center md:text-left'>
						<a
							href='#home'
							className='text-xl font-bold tracking-tight text-zinc-900 dark:text-white hover:text-[rgb(58,117,22)] dark:hover:text-[rgb(167,241,117)] transition-colors'>
							Narak Leng
						</a>
						<p className='text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1 font-medium'>
							Front-end Developer • UI/UX Enthusiast • Creative Developer
						</p>
					</div>

					{/* Social Links */}
					<div className='flex items-center gap-3'>
						<a
							href={personalInfo.githubUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all hover:scale-105'
							aria-label='GitHub'>
							<SiGithub className='w-4 h-4' />
						</a>
						<a
							href={personalInfo.linkedinUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all hover:scale-105'
							aria-label='LinkedIn'>
							<FaLinkedin className='w-4 h-4' />
						</a>
						<a
							href={personalInfo.telegramUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all hover:scale-105'
							aria-label='Telegram'>
							<SiTelegram className='w-4 h-4' />
						</a>
						<a
							href={`mailto:${personalInfo.email}`}
							className='flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all hover:scale-105'
							aria-label='Email'>
							<Mail className='w-4 h-4' />
						</a>
					</div>

					{/* Back to Top */}
					<div className='flex items-center gap-4'>
						<button
							onClick={scrollToTop}
							className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-brand-green hover:bg-brand-green/15 dark:hover:bg-brand-green/10 transition-colors cursor-pointer'
							aria-label='Back to top'>
							<span>Back to top</span>
							<ArrowUp className='w-3.5 h-3.5 text-[rgb(255,87,87)]' />
						</button>
					</div>
				</div>

				{/* Copyright Notice */}
				<div className='mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 gap-2'>
					<p>© 2026 Narak Leng. All rights reserved.</p>
					<p className='font-mono text-[11px] text-zinc-400 dark:text-zinc-500'>
						Built with Next.js, TypeScript & Tailwind CSS
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
