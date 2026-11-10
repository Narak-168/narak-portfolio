/** @format */

import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { TranslationProvider } from "@/hooks/useTranslation";
import { personalInfo } from "@/data/portfolio-data";
import {
	SITE_DESCRIPTION,
	SITE_KEYWORDS,
	SITE_NAME,
	SITE_ROLE,
	SITE_TITLE,
	SITE_URL,
} from "@/lib/site";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: SITE_TITLE,
		template: `%s | ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
	keywords: SITE_KEYWORDS,
	applicationName: `${SITE_NAME} Portfolio`,
	authors: [{ name: SITE_NAME, url: SITE_URL }],
	creator: SITE_NAME,
	publisher: SITE_NAME,
	category: "technology",
	// Canonical + hreflang are set per page (app/page.tsx and app/km/page.tsx) so
	// each language version points at itself on narak.dev, not the vercel.app copy
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	// Listing icons here overrides Next's automatic icon.png / apple-icon.png links,
	// so the PNG fallbacks (search results, iOS home screen) are listed explicitly
	icons: {
		icon: [
			{ url: "/images/favicon.svg", type: "image/svg+xml" },
			{ url: "/icon.png", type: "image/png", sizes: "48x48" },
		],
		apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
	},
	openGraph: {
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		url: "/",
		siteName: `${SITE_NAME} Portfolio`,
		locale: "en_US",
		alternateLocale: ["km_KH"],
		type: "profile",
		firstName: "Narak",
		lastName: "Leng",
	},
	twitter: {
		card: "summary_large_image",
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#000000" },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// Person + WebSite graph; profile links must match the real accounts exactly
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Person",
				"@id": `${SITE_URL}/#person`,
				name: SITE_NAME,
				givenName: "Narak",
				familyName: "Leng",
				url: SITE_URL,
				image: `${SITE_URL}/images/Narak-NoBG.PNG`,
				jobTitle: SITE_ROLE,
				description: SITE_DESCRIPTION,
				email: `mailto:${personalInfo.email}`,
				address: {
					"@type": "PostalAddress",
					addressLocality: "Phnom Penh",
					addressCountry: "KH",
				},
				worksFor: {
					"@type": "Organization",
					name: "DemoQ (Cambodia) Co., Ltd.",
					url: "https://demoq.com.kh",
				},
				alumniOf: [
					{
						"@type": "CollegeOrUniversity",
						name: "Royal University of Phnom Penh",
					},
					{
						"@type": "EducationalOrganization",
						name: "Institute of Science and Technology Advanced Development (ISTAD)",
					},
				],
				knowsLanguage: ["en", "km"],
				knowsAbout: [
					"Front End Development",
					"UX/UI Design",
					"React",
					"Next.js",
					"TypeScript",
					"JavaScript",
					"Tailwind CSS",
					"Figma",
					"Responsive Web Design",
					"Spring Boot",
					"PostgreSQL",
				],
				sameAs: [
					personalInfo.githubUrl,
					personalInfo.linkedinUrl,
					personalInfo.telegramUrl,
				],
			},
			{
				"@type": "WebSite",
				"@id": `${SITE_URL}/#website`,
				url: SITE_URL,
				name: `${SITE_NAME} Portfolio`,
				description: SITE_DESCRIPTION,
				inLanguage: ["en", "km"],
				publisher: { "@id": `${SITE_URL}/#person` },
			},
		],
	};

	return (
		// `relative` lets Motion's useScroll measure scroll offsets against the page
		<html lang='en' suppressHydrationWarning className='relative scroll-smooth'>
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
