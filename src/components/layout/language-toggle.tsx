/** @format */

"use client";

import React from "react";
import { useTranslation } from "@/hooks/useTranslation";

interface LanguageToggleProps {
	className?: string;
}

export function LanguageToggle({ className = "" }: LanguageToggleProps) {
	const { locale, changeLanguage } = useTranslation();

	return (
		<div
			className={`inline-flex items-center p-0.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/60 transition-colors ${className}`}
			role='group'
			aria-label='Language Selector'>
			<button
				type='button'
				onClick={() => changeLanguage("en")}
				className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
					locale === "en" ?
						"bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs font-bold"
					:	"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
				}`}
				aria-pressed={locale === "en"}
				title='Switch to English'>
				<span>EN</span>
			</button>

			<button
				type='button'
				onClick={() => changeLanguage("km")}
				className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
					locale === "km" ?
						"bg-[rgb(167,241,117)] text-zinc-950 font-bold shadow-xs"
					:	"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
				}`}
				aria-pressed={locale === "km"}
				title='ប្តូរទៅជាភាសាខ្មែរ (Switch to Khmer)'>
				<span className='font-khmer'>ខ្មែរ</span>
			</button>
		</div>
	);
}

export default LanguageToggle;
