/** @format */

"use client";

import {
	createContext,
	createElement,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useSyncExternalStore,
} from "react";
import type { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import enTranslations from "../../public/locales/en/common.json";
import kmTranslations from "../../public/locales/km/common.json";
import { LOCALE_PATHS, localeFromPath, type SiteLocale } from "@/lib/site";

type TranslationDictionary = Record<string, unknown>;

const dictionaries: Record<string, TranslationDictionary> = {
	en: enTranslations as TranslationDictionary,
	km: kmTranslations as TranslationDictionary,
};

type TranslationContextValue = {
	t: (key: string, options?: { returnObjects?: boolean }) => any;
	locale: string;
	changeLanguage: (newLocale: string) => Promise<void>;
	mounted: boolean;
};

const TranslationContext = createContext<TranslationContextValue | null>(null);

const PREFERENCE_KEY = "preferredLanguage";

function getSavedLocale(): SiteLocale | null {
	try {
		const saved = localStorage.getItem(PREFERENCE_KEY);
		if (saved === "en" || saved === "km") return saved;
	} catch {
		// Ignore storage errors
	}
	return null;
}

const emptySubscribe = () => () => {};

export function TranslationProvider({ children }: { children: ReactNode }) {
	// The URL decides the language ("/" English, "/km" Khmer). The server renders
	// each page in its own language, so search engines can index both.
	const pathname = usePathname();
	const router = useRouter();
	const locale = localeFromPath(pathname);
	const mounted = useSyncExternalStore(
		emptySubscribe,
		() => true,
		() => false,
	);

	useEffect(() => {
		if (typeof document !== "undefined") {
			document.documentElement.lang = locale;
			if (locale === "km") {
				document.documentElement.classList.add("font-khmer");
				document.body.classList.add("font-khmer");
			} else {
				document.documentElement.classList.remove("font-khmer");
				document.body.classList.remove("font-khmer");
			}
		}
	}, [locale]);

	// Returning visitors who picked Khmer before are sent to the Khmer page
	useEffect(() => {
		if (locale === "en" && getSavedLocale() === "km") {
			router.replace(LOCALE_PATHS.km, { scroll: false });
		}
	}, [locale, router]);

	const changeLanguage = useCallback(
		async (newLocale: string) => {
			if (newLocale !== "en" && newLocale !== "km") return;
			try {
				localStorage.setItem(PREFERENCE_KEY, newLocale);
			} catch (e) {
				console.warn("Could not save preferredLanguage to localStorage:", e);
			}
			if (newLocale === locale) return;
			// Switch pages but keep the reader's scroll position
			router.push(LOCALE_PATHS[newLocale], { scroll: false });
		},
		[locale, router],
	);

	const t = useCallback(
		(key: string, options?: { returnObjects?: boolean }): any => {
			const keys = key.split(".");
			const currentDict = dictionaries[locale] || dictionaries.en;
			let translation: unknown = currentDict;

			for (const k of keys) {
				if (translation && typeof translation === "object") {
					translation = (translation as Record<string, unknown>)[k];
				} else {
					translation = undefined;
					break;
				}
			}

			// Fallback to English if key is missing in Khmer
			if (translation === undefined && locale !== "en") {
				let fallback: unknown = dictionaries.en;
				for (const k of keys) {
					if (fallback && typeof fallback === "object") {
						fallback = (fallback as Record<string, unknown>)[k];
					} else {
						fallback = undefined;
						break;
					}
				}
				translation = fallback;
			}

			if (options?.returnObjects && typeof translation === "object") {
				return translation;
			}

			return (
				typeof translation === "string" ? translation
				: translation !== undefined ? String(translation)
				: key
			);
		},
		[locale],
	);

	const value = useMemo(
		() => ({ t, locale, changeLanguage, mounted }),
		[t, locale, changeLanguage, mounted],
	);

	return createElement(TranslationContext.Provider, { value }, children);
}

export function useTranslation() {
	const context = useContext(TranslationContext);
	if (!context) {
		throw new Error("useTranslation must be used within a TranslationProvider");
	}
	return context;
}
