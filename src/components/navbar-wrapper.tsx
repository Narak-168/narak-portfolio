/** @format */

"use client";

import {
	Navbar,
	NavBody,
	NavItems,
	MobileNav,
	NavbarLogo,
	MobileNavHeader,
	MobileNavToggle,
	MobileNavMenu,
} from "./navbar/resizable-navbar";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Globe } from "lucide-react";
import { ThemeToggleWrapper } from "./theme-toggle-wrapper";
import { useTranslation } from "@/hooks/useTranslation";

export function NavbarWrapper() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const { t, locale, changeLanguage } = useTranslation("common");

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleLanguageChange = () => {
		const newLocale = locale === "en" ? "km" : "en";
		console.log("Button clicked! Current:", locale, "New:", newLocale);
		changeLanguage(newLocale);
	};

	// Use placeholder values until mounted to avoid hydration mismatch
	const navItems = mounted
		? [
				{ name: t("nav.home"), link: "#home" },
				{ name: t("nav.about"), link: "#about" },
				{ name: t("nav.project"), link: "#project" },
				{ name: t("nav.contact"), link: "#contact" },
		  ]
		: [
				{ name: "Home", link: "#home" },
				{ name: "About", link: "#about" },
				{ name: "Project", link: "#project" },
				{ name: "Contact", link: "#contact" },
		  ];

	console.log("NavbarWrapper render - locale:", locale, "navItems:", navItems);

	if (!mounted) {
		return null;
	}

	return (
		<Navbar key={locale}>
			<NavBody>
				<NavbarLogo />
				<div className={locale === "km" ? "font-khmer" : ""}>
					<NavItems items={navItems} />
				</div>
				<div className='flex items-center gap-4 relative z-70'>
					{/* Dark Mode Toggle */}
					<ThemeToggleWrapper />

					{/* Language Switcher */}
					<button
						onClick={handleLanguageChange}
						className='flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition text-sm font-medium pointer-events-auto cursor-pointer'
						aria-label='Switch language'>
						<Globe className='w-4 h-4' />
						{locale.toUpperCase()}
					</button>
				</div>
			</NavBody>

			<MobileNav>
				<MobileNavHeader>
					<NavbarLogo />
					<div className='flex items-center gap-2'>
						{/* Mobile Dark Mode Toggle */}
						<ThemeToggleWrapper />

						{/* Mobile Language Switcher */}
						<button
							onClick={handleLanguageChange}
							className='flex items-center gap-2 px-2 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition text-sm font-medium pointer-events-auto cursor-pointer'
							aria-label='Switch language'>
							<Globe className='w-4 h-4' />
							<span className='text-xs'>{locale.toUpperCase()}</span>
						</button>

						<MobileNavToggle
							isOpen={isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						/>
					</div>
				</MobileNavHeader>

				<MobileNavMenu
					isOpen={isMobileMenuOpen}
					onClose={() => setIsMobileMenuOpen(false)}>
					<div
						className={`flex flex-col gap-4 w-full ${
							locale === "km" ? "font-khmer" : ""
						}`}>
						{navItems.map((item, idx) => (
							<a
								key={idx}
								href={item.link}
								onClick={() => setIsMobileMenuOpen(false)}
								className='text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors'>
								{item.name}
							</a>
						))}
					</div>
				</MobileNavMenu>
			</MobileNav>
		</Navbar>
	);
}
