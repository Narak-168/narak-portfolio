/** @format */

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio-data";
import { ThemeToggleWrapper } from "./theme-toggle-wrapper";
import { LanguageToggle } from "./language-toggle";
import { useTranslation } from "@/hooks/useTranslation";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
	onOpenCV: () => void;
}

const navLinks = [
	{ key: "nav.home", href: "#home" },
	{ key: "nav.about", href: "#about" },
	{ key: "nav.projects", href: "#projects" },
	{ key: "nav.skills", href: "#skills" },
	{ key: "nav.experience", href: "#experience" },
	{ key: "nav.education", href: "#journey" },
	{ key: "nav.contact", href: "#contact" },
];

export function Navbar({ onOpenCV }: NavbarProps) {
	const [activeSection, setActiveSection] = useState("home");
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { t } = useTranslation();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);

			const sections = navLinks.map((link) => link.href.substring(1));
			const scrollPosition = window.scrollY + 120;

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = document.getElementById(sections[i]);
				if (section && section.offsetTop <= scrollPosition) {
					setActiveSection(sections[i]);
					break;
				}
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
				isScrolled ?
					"py-3 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-xs"
				:	"py-5 bg-transparent"
			}`}>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between'>
					{/* Logo / Brand */}
					<a
						href='#home'
						className='group flex items-center gap-2.5 font-bold tracking-tight text-zinc-900 dark:text-white transition-opacity hover:opacity-90'>
						<Image
							src='/images/favicon.svg'
							alt={personalInfo.name}
							width={48}
							height={48}
							className='h-12 w-12 object-cover'
							priority
						/>
					</a>

					{/* Desktop Navigation Links */}
					<nav
						className='hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-zinc-100/70 dark:bg-zinc-900/70 border border-zinc-200/70 dark:border-zinc-800/70 backdrop-blur-xs'
						aria-label='Main Navigation'>
						{navLinks.map((link) => {
							const isActive = activeSection === link.href.substring(1);
							return (
								<a
									key={link.key}
									href={link.href}
									className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
										isActive ?
											"text-zinc-900 dark:text-white font-semibold"
										:	"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
									}`}>
									{t(link.key)}
									{isActive && (
										<motion.span
											layoutId='activeNavPill'
											className='absolute inset-0 rounded-full bg-white dark:bg-zinc-800 -z-10 shadow-xs border border-zinc-200/60 dark:border-zinc-700/60'
											transition={{
												type: "spring",
												stiffness: 350,
												damping: 30,
											}}
										/>
									)}
								</a>
							);
						})}
					</nav>

					{/* Right Side: Language Toggle, Theme Toggle & CV Button */}
					<div className='hidden md:flex items-center gap-2.5'>
						<LanguageToggle />
						<ThemeToggleWrapper />
						<button
							onClick={onOpenCV}
							className='inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white transition-all shadow-xs hover:scale-[1.02] active:scale-[0.98] cursor-pointer'>
							<FileText className='w-3.5 h-3.5' />
							<span>{t("nav.cv")}</span>
						</button>
					</div>

					{/* Mobile Menu & Controls */}
					<div className='flex items-center gap-2 md:hidden'>
						<LanguageToggle />
						<ThemeToggleWrapper />
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className='flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors'
							aria-label='Toggle menu'
							aria-expanded={mobileMenuOpen}>
							{mobileMenuOpen ?
								<X className='w-5 h-5' />
							:	<Menu className='w-5 h-5' />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Drawer Menu */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.2 }}
						className='md:hidden overflow-hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 shadow-xl'>
						<div className='max-w-6xl mx-auto px-6 py-5 flex flex-col gap-2'>
							{navLinks.map((link) => {
								const isActive = activeSection === link.href.substring(1);
								return (
									<a
										key={link.key}
										href={link.href}
										onClick={() => setMobileMenuOpen(false)}
										className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
											isActive ?
												"bg-brand-green/15 dark:bg-brand-green/10 text-[rgb(58,117,22)] dark:text-[hsl(96,82%,70%)] font-semibold"
											:	"text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 hover:text-zinc-900 dark:hover:text-white"
										}`}>
										<span>{t(link.key)}</span>
										<ArrowUpRight className='w-3.5 h-3.5 opacity-60' />
									</a>
								);
							})}
							<div className='pt-3 mt-1 border-t border-zinc-100 dark:border-zinc-800 flex flex-col gap-2'>
								<button
									onClick={() => {
										setMobileMenuOpen(false);
										onOpenCV();
									}}
									className='w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-[rgb(167,241,117)] text-zinc-950 hover:bg-[#96e062] transition-colors cursor-pointer'>
									<FileText className='w-4 h-4 text-[rgb(255,87,87)]' />
									<span>{t("nav.downloadCV")}</span>
								</button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
