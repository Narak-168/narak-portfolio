/** @format */

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio-data";
import { ThemeToggleWrapper } from "./theme-toggle-wrapper";
import { LanguageToggle } from "./language-toggle";
import { useTranslation } from "@/hooks/useTranslation";
import { Menu, X } from "lucide-react";
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
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { t } = useTranslation();

	useEffect(() => {
		const handleScroll = () => {
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

	// Lock page scroll while the full-screen mobile menu is open
	useEffect(() => {
		document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileMenuOpen]);

	return (
		<header className='fixed top-0 inset-x-0 z-40'>
			{/* Global Nav Bar */}
			<div className='relative z-10 bg-[rgba(251,251,253,0.8)] dark:bg-[rgba(22,22,23,0.8)] backdrop-blur-xl backdrop-saturate-[1.8]'>
				<div className='max-w-5xl mx-auto h-12 px-4 sm:px-6 flex items-center justify-between gap-4'>
					{/* Logo / Brand */}
					<a
						href='#home'
						aria-label='Go to homepage'
						className='flex items-center opacity-90 hover:opacity-100 transition-opacity'>
						<Image
							src='/images/favicon.svg'
							alt={personalInfo.name}
							width={28}
							height={28}
							className='h-7 w-7 object-cover rounded-lg'
							priority
						/>
					</a>

					{/* Desktop Navigation Links */}
					<nav
						className='hidden lg:flex flex-1 items-center justify-center gap-7'
						aria-label='Main Navigation'>
						{navLinks.map((link) => {
							const isActive = activeSection === link.href.substring(1);
							return (
								<a
									key={link.key}
									href={link.href}
									className={`text-xs transition-colors ${
										isActive ?
											"text-[#1d1d1f] dark:text-white font-medium"
										:	"text-[#1d1d1f]/70 hover:text-[#1d1d1f] dark:text-[#f5f5f7]/70 dark:hover:text-white"
									}`}>
									{t(link.key)}
								</a>
							);
						})}
					</nav>

					{/* Right Side Controls */}
					<div className='flex items-center gap-1.5 sm:gap-2'>
						<LanguageToggle className='hidden sm:inline-flex' />
						<ThemeToggleWrapper />
						<button
							onClick={onOpenCV}
							className='px-3 py-1 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-medium transition-colors cursor-pointer'>
							{t("nav.cv")}
						</button>
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className='lg:hidden flex h-8 w-8 items-center justify-center rounded-full text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer'
							aria-label='Toggle navigation menu'
							aria-expanded={mobileMenuOpen}>
							{mobileMenuOpen ?
								<X className='w-[18px] h-[18px]' />
							:	<Menu className='w-[18px] h-[18px]' />}
						</button>
					</div>
				</div>
			</div>

			{/* Full-screen Mobile Menu */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.25 }}
						className='lg:hidden fixed inset-0 top-12 bg-white dark:bg-black overflow-y-auto'>
						<nav
							className='max-w-5xl mx-auto px-8 sm:px-12 pt-8 pb-12 flex flex-col gap-1'
							aria-label='Mobile Navigation'>
							{navLinks.map((link, idx) => {
								const isActive = activeSection === link.href.substring(1);
								return (
									<motion.a
										key={link.key}
										href={link.href}
										onClick={() => setMobileMenuOpen(false)}
										initial={{ opacity: 0, y: -8 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.04 * idx, duration: 0.3 }}
										className={`py-2 text-[28px] font-semibold tracking-[-0.02em] transition-colors ${
											isActive ?
												"text-[#1d1d1f] dark:text-white"
											:	"text-[#1d1d1f]/60 hover:text-[#1d1d1f] dark:text-[#f5f5f7]/60 dark:hover:text-white"
										}`}>
										{t(link.key)}
									</motion.a>
								);
							})}
							<div className='sm:hidden mt-8'>
								<LanguageToggle />
							</div>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
