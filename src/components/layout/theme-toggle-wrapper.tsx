/** @format */

"use client";

import { useTheme } from "next-themes";
import { useCallback, useRef, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

interface ThemeToggleWrapperProps extends React.ComponentPropsWithoutRef<"button"> {
	duration?: number;
}

const emptySubscribe = () => () => {};

export const ThemeToggleWrapper = ({
	className,
	duration = 400,
	...props
}: ThemeToggleWrapperProps) => {
	const { theme, setTheme } = useTheme();
	const mounted = useSyncExternalStore(
		emptySubscribe,
		() => true,
		() => false,
	);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const isDark = theme === "dark";

	const toggleTheme = useCallback(async () => {
		if (!buttonRef.current || !mounted) return;

		// Check if View Transitions API is supported
		if (!document.startViewTransition) {
			setTheme(isDark ? "light" : "dark");
			return;
		}

		await document.startViewTransition(() => {
			flushSync(() => {
				setTheme(isDark ? "light" : "dark");
			});
		}).ready;

		const { top, left, width, height } =
			buttonRef.current.getBoundingClientRect();
		const x = left + width / 2;
		const y = top + height / 2;
		const right = window.innerWidth - x;
		const bottom = window.innerHeight - y;
		const maxRadius = Math.hypot(Math.max(x, right), Math.max(y, bottom));

		document.documentElement.animate(
			{
				clipPath: [
					`circle(0px at ${x}px ${y}px)`,
					`circle(${maxRadius}px at ${x}px ${y}px)`,
				],
			},
			{
				duration,
				easing: "ease-in-out",
				pseudoElement: "::view-transition-new(root)",
			},
		);
	}, [isDark, setTheme, duration, mounted]);

	if (!mounted) {
		return (
			<button
				className={cn(
					"relative flex h-8 w-8 items-center justify-center rounded-full",
					className,
				)}
				disabled
				{...props}>
				<div className='h-4 w-4' />
			</button>
		);
	}

	return (
		<button
			ref={buttonRef}
			onClick={toggleTheme}
			className={cn(
				"relative flex h-8 w-8 items-center justify-center rounded-full text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer",
				className,
			)}
			aria-label='Toggle theme'
			{...props}>
			<Sun
				size={16}
				strokeWidth={2}
				className={cn(
					"absolute transition-all text-[#bf4800] dark:text-[#f56300]",
					isDark ?
						"rotate-90 scale-0 opacity-0"
					:	"rotate-0 scale-100 opacity-100",
				)}
				aria-hidden='true'
			/>
			<Moon
				size={16}
				strokeWidth={2}
				className={cn(
					"absolute transition-all text-[#2997ff]",
					isDark ?
						"rotate-0 scale-100 opacity-100"
					:	"rotate-90 scale-0 opacity-0",
				)}
				aria-hidden='true'
			/>
			<span className='sr-only'>Toggle theme</span>
		</button>
	);
};
