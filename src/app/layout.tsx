/** @format */

import type { Metadata } from "next";
import { Geist, Geist_Mono, Suwannaphum } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/components/theme-provider";
import { NavbarWrapper } from "@/src/components/navbar-wrapper";
import Footer from "@/components/footer/social-links-page";
import { TranslationProvider } from "@/hooks/useTranslation";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// Khmer font
const suwannaphum = Suwannaphum({
	variable: "--font-suwannaphum",
	subsets: ["khmer"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: {
		default: "Narak Leng",
		template: "%s | Narak Leng",
	},
	description:
		"Narak Leng is a Full Stack Developer specializing in modern web development with React, Next.js, TypeScript, and Node.js. Explore my portfolio of innovative web applications and projects.",
	keywords: [
		"Narak Leng",
		"Full Stack Developer",
		"Web Developer",
		"React Developer",
		"Next.js Developer",
		"TypeScript",
		"Frontend Developer",
		"Backend Developer",
		"Portfolio",
		"Web Design",
		"UI/UX",
		"JavaScript",
		"Node.js",
	],
	authors: [{ name: "Narak Leng", url: "https://narak-portfolio.vercel.app" }],
	creator: "Narak Leng",
	publisher: "Narak Leng",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	icons: {
		icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
	},
	metadataBase: new URL("https://narak-portfolio.vercel.app"),
	alternates: {
		canonical: "/",
		languages: {
			"en-US": "/en",
			"km-KH": "/km",
		},
	},
	openGraph: {
		title: "Narak Leng - Full Stack Developer & Web Designer",
		description:
			"Narak Leng is a Full Stack Developer specializing in modern web development with React, Next.js, TypeScript, and Node.js. Explore my portfolio of innovative web applications and projects.",
		url: "https://narak-portfolio.vercel.app",
		siteName: "Narak Leng Portfolio",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Narak Leng - Full Stack Developer & Web Designer",
		description:
			"Narak Leng is a Full Stack Developer specializing in modern web development. Explore my portfolio of innovative projects.",
		creator: "@narakleng",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "your-google-verification-code",
		// yandex: "your-yandex-verification-code",
		// yahoo: "your-yahoo-verification-code",
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
		url: "https://narak-portfolio.vercel.app",
		image: "https://narak-portfolio.vercel.app/opengraph-image",
		jobTitle: "Full Stack Developer",
		description:
			"Full Stack Developer specializing in modern web development with React, Next.js, TypeScript, and Node.js",
		email: "narakleng168@gmail.com",
		sameAs: [
			"https://github.com/Narak-168",
			"https://facebook.com/narakleng",
			"https://instagram.com/narakleng",
			"https://t.me/narakleng",
		],
		knowsAbout: [
			"React",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"Node.js",
			"Web Development",
			"Frontend Development",
			"Backend Development",
			"UI/UX Design",
		],
	};

	return (
		<>
			<html lang='en' suppressHydrationWarning>
				<head>
					<script
						type='application/ld+json'
						dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
					/>
				</head>
				<body
					className={`${geistSans.variable} ${geistMono.variable} ${suwannaphum.variable} antialiased`}>
					<TranslationProvider>
						<ThemeProvider
							attribute='class'
							defaultTheme='system'
							enableSystem
							disableTransitionOnChange>
							<NavbarWrapper />
							<main>{children}</main>
							<Footer />
						</ThemeProvider>
					</TranslationProvider>
				</body>
			</html>
		</>
	);
}
