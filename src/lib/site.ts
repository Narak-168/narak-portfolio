/** @format */

// Single source of truth for SEO: metadata, sitemap, robots, manifest and the
// social share image all read from here so the domain and wording stay in sync.

// The custom domain is canonical; narak-portfolio.vercel.app serves the same site
export const SITE_URL = "https://narak.dev";

export const SITE_NAME = "Narak Leng";

export const SITE_ROLE = "Front End Developer & UX/UI Designer";

// ~60 characters so it isn't truncated in search results
export const SITE_TITLE = `${SITE_NAME} | ${SITE_ROLE}`;

// ~155 characters: who, what, where, and a reason to click
export const SITE_DESCRIPTION =
	"Narak Leng is a Front End Developer & UX/UI Designer in Phnom Penh, Cambodia, building fast, responsive websites with React, Next.js and TypeScript.";

// Khmer version served at /km (Khmer name order: family name first)
export const SITE_TITLE_KM =
	"ឡេង ណារ៉ាក់ | Front End Developer & អ្នករចនា UX/UI";

export const SITE_DESCRIPTION_KM =
	"ឡេង ណារ៉ាក់ ជា Front End Developer និងអ្នករចនា UX/UI នៅរាជធានីភ្នំពេញ កម្ពុជា ដែលបង្កើតគេហទំព័រលឿន និងបង្ហាញបានល្អលើគ្រប់ឧបករណ៍ ដោយប្រើ React, Next.js និង TypeScript។";

// The URL decides the language: "/" is English, "/km" is Khmer
export const LOCALE_PATHS = { en: "/", km: "/km" } as const;

export type SiteLocale = keyof typeof LOCALE_PATHS;

export function localeFromPath(pathname: string | null): SiteLocale {
	return pathname === "/km" || pathname?.startsWith("/km/") ? "km" : "en";
}

// hreflang links so search engines pair the two language versions
export const LANGUAGE_ALTERNATES = {
	en: LOCALE_PATHS.en,
	km: LOCALE_PATHS.km,
	"x-default": LOCALE_PATHS.en,
};

export const SITE_KEYWORDS = [
	"Narak Leng",
	"Front End Developer",
	"UX/UI Designer",
	"Front End Developer Cambodia",
	"UX/UI Designer Cambodia",
	"Web Developer Phnom Penh",
	"React Developer",
	"Next.js Developer",
	"TypeScript",
	"Tailwind CSS",
	"Figma",
	"Portfolio",
];
