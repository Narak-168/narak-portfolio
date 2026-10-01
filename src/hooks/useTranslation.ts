/** @format */

"use client";

import {
	createContext,
	createElement,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
	useSyncExternalStore,
} from "react";
import type { ReactNode } from "react";
import enTranslations from "../../public/locales/en/common.json";
import kmTranslations from "../../public/locales/km/common.json";

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

function getInitialLocale(): string {
	if (typeof window === "undefined") return "en";
	try {
		const saved = localStorage.getItem("preferredLanguage");
		if (saved === "en" || saved === "km") return saved;
	} catch {
		// Ignore storage errors
	}
	return "en";
}

const emptySubscribe = () => () => {};

export function TranslationProvider({ children }: { children: ReactNode }) {
	const [locale, setLocale] = useState<string>(getInitialLocale);
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

	const changeLanguage = useCallback(async (newLocale: string) => {
		try {
			localStorage.setItem("preferredLanguage", newLocale);
		} catch (e) {
			console.warn("Could not save preferredLanguage to localStorage:", e);
		}
		setLocale(newLocale);
	}, []);

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
