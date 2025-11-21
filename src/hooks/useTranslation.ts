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
} from "react";
import type { ReactNode } from "react";

type TranslationContextValue = {
	t: (key: string) => string;
	locale: string;
	changeLanguage: (newLocale: string) => Promise<void>;
	mounted: boolean;
};

const TranslationContext = createContext<TranslationContextValue | null>(null);

export function TranslationProvider({ children }: { children: ReactNode }) {
	const [locale, setLocale] = useState("en");
	const [translations, setTranslations] = useState<Record<string, any>>({});
	const [mounted, setMounted] = useState(false);

	const loadTranslations = useCallback(async (lang: string) => {
		try {
			const response = await fetch(`/locales/${lang}/common.json`);
			const data = await response.json();
			setTranslations(data);
		} catch (error) {
			console.error("Failed to load translations:", error);
		}
	}, []);

	useEffect(() => {
		const initializeTranslations = async () => {
			const savedLocale = localStorage.getItem("preferredLanguage") || "en";
			setLocale(savedLocale);
			await loadTranslations(savedLocale);
			setMounted(true);
		};
		initializeTranslations();
	}, [loadTranslations]);

	const t = useCallback(
		(key: string) => {
			const keys = key.split(".");
			let translation: any = translations;
			for (const k of keys) {
				translation = translation?.[k];
			}
			return translation || key;
		},
		[translations]
	);

	const changeLanguage = useCallback(
		async (newLocale: string) => {
			localStorage.setItem("preferredLanguage", newLocale);
			setLocale(newLocale);
			await loadTranslations(newLocale);
		},
		[loadTranslations]
	);

	const value = useMemo(
		() => ({ t, locale, changeLanguage, mounted }),
		[t, locale, changeLanguage, mounted]
	);

	return createElement(TranslationContext.Provider, { value }, children);
}

export function useTranslation(p0: string) {
	const context = useContext(TranslationContext);
	if (!context) {
		throw new Error("useTranslation must be used within a TranslationProvider");
	}
	return context;
}
