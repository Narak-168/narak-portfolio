/** @format */

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { TranslationProvider } from "@/hooks/useTranslation";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Narak Leng | Front-end Developer",
		template: "%s | Narak Leng",
	},
	description:
		"Portfolio of Narak Leng, a Front-end Developer from Cambodia specializing in React, Next.js, TypeScript, UI/UX, and responsive web development.",
	keywords: [
		"Narak Leng",
		"Front-end Developer",
		"Frontend Engineer",
		"React Developer",
		"Next.js Developer",
		"TypeScript",
		"Tailwind CSS",
		"UI/UX Design",
		"Web Developer Cambodia",
		"Phnom Penh Developer",
		"Portfolio",
	],
	authors: [{ name: "Narak Leng", url: "https://narak.dev" }],
	creator: "Narak Leng",
	publisher: "Narak Leng",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	icons: {
		icon: [{ url: "/images/favicon.svg", type: "image/svg+xml" }],
	},
	metadataBase: new URL("https://narak.dev"),
	openGraph: {
		title: "Narak Leng | Front-end Developer",
		description:
			"Portfolio of Narak Leng, a Front-end Developer from Cambodia specializing in React, Next.js, TypeScript, UI/UX, and responsive web development.",
		url: "https://narak.dev",
		siteName: "Narak Leng Portfolio",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Narak Leng | Front-end Developer",
		description:
			"Portfolio of Narak Leng, a Front-end Developer from Cambodia specializing in React, Next.js, TypeScript, UI/UX, and responsive web development.",
		creator: "@Narak-168",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Narak Leng",
		url: "https://narak.dev",
		jobTitle: "Front-end Developer",
		address: {
			"@type": "PostalAddress",
			addressLocality: "Phnom Penh",
			addressCountry: "Cambodia",
		},
		description:
			"Portfolio of Narak Leng, a Front-end Developer from Cambodia specializing in React, Next.js, TypeScript, UI/UX, and responsive web development.",
		email: "narakleng168@gmail.com",
		sameAs: [
			"https://github.com/Narak-168",
			"https://www.linkedin.com/in/narak-leng",
			"https://t.me/narakleng",
		],
		knowsAbout: [
			"React",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"Tailwind CSS",
			"Frontend Development",
			"UI/UX Design",
			"Responsive Web Design",
			"Spring Boot",
			"PostgreSQL",
		],
	};

	return (
		<html lang='en' suppressHydrationWarning className='scroll-smooth'>
			<head>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body
				className={`${geistSans.variable} font-sans min-h-screen bg-neutral-50 dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-400`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
					disableTransitionOnChange>
					<TranslationProvider>{children}</TranslationProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
