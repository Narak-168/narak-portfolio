/** @format */

"use client";

import React, { useId } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
	className?: string;
}

// Inline SVG flags: Windows does not render regional-indicator flag emoji
function UKFlag() {
	// Clip-path ids must be unique because the toggle renders in more than one place
	const id = useId();
	return (
		<svg
			viewBox='0 0 60 30'
			preserveAspectRatio='xMidYMid slice'
			className='h-full w-full'
			aria-hidden='true'>
			<clipPath id={`${id}-s`}>
				<path d='M0,0 v30 h60 v-30 z' />
			</clipPath>
			<clipPath id={`${id}-t`}>
				<path d='M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z' />
			</clipPath>
			<g clipPath={`url(#${id}-s)`}>
				<path d='M0,0 v30 h60 v-30 z' fill='#012169' />
				<path d='M0,0 L60,30 M60,0 L0,30' stroke='#fff' strokeWidth='6' />
				<path
					d='M0,0 L60,30 M60,0 L0,30'
					clipPath={`url(#${id}-t)`}
					stroke='#C8102E'
					strokeWidth='4'
				/>
				<path d='M30,0 v30 M0,15 h60' stroke='#fff' strokeWidth='10' />
				<path d='M30,0 v30 M0,15 h60' stroke='#C8102E' strokeWidth='6' />
			</g>
		</svg>
	);
}

function CambodiaFlag() {
	return (
		<svg
			viewBox='0 0 60 40'
			preserveAspectRatio='xMidYMid slice'
			className='h-full w-full'
			aria-hidden='true'>
			<rect width='60' height='40' fill='#032EA1' />
			<rect y='10' width='60' height='20' fill='#E00025' />
			{/* Simplified Angkor Wat */}
			<g fill='#fff'>
				<rect x='17' y='26' width='26' height='2' />
				<rect x='19' y='22' width='22' height='4' />
				<polygon points='27,22 27,17 28.5,15 30,11 31.5,15 33,17 33,22' />
				<polygon points='21,22 21,18.5 22,17 23,14.5 24,17 25,18.5 25,22' />
				<polygon points='35,22 35,18.5 36,17 37,14.5 38,17 39,18.5 39,22' />
			</g>
		</svg>
	);
}

const languages = [
	{ code: "en", label: "English", Flag: UKFlag },
	{ code: "km", label: "ភាសាខ្មែរ (Khmer)", Flag: CambodiaFlag },
] as const;

export function LanguageToggle({ className = "" }: LanguageToggleProps) {
	const { locale, changeLanguage } = useTranslation();

	return (
		<div
			className={cn(
				"inline-flex items-center gap-0.5 p-0.5 rounded-full bg-black/5 dark:bg-white/10",
				className,
			)}
			role='group'
			aria-label='Language Selector'>
			{languages.map(({ code, label, Flag }) => {
				const isActive = locale === code;
				return (
					<button
						key={code}
						type='button'
						onClick={() => changeLanguage(code)}
						aria-pressed={isActive}
						aria-label={label}
						title={label}
						className={cn(
							"flex h-7 w-7 items-center justify-center rounded-full transition-[background-color,box-shadow,opacity] duration-200 cursor-pointer",
							isActive ?
								"bg-white dark:bg-[#3a3a3c] shadow-[0_1px_2px_rgba(0,0,0,0.12)]"
							:	"opacity-55 hover:opacity-100",
						)}>
						<span className='block h-[18px] w-[18px] overflow-hidden rounded-full ring-1 ring-black/10 dark:ring-white/15'>
							<Flag />
						</span>
					</button>
				);
			})}
		</div>
	);
}

export default LanguageToggle;
