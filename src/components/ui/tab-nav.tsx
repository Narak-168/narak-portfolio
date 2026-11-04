/** @format */

"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface TabNavItem {
	id: string;
	label: string;
}

interface TabNavProps {
	items: TabNavItem[];
	activeId: string;
	onChange: (id: string) => void;
	ariaLabel: string;
	className?: string;
}

// apple.com "Explore the lineup" tab nav: gray platter, dark pill indicator that
// glides to the selected tab (left/width 320ms ease-out), copy fades to white (160ms).
export function TabNav({
	items,
	activeId,
	onChange,
	ariaLabel,
	className,
}: TabNavProps) {
	const platterRef = useRef<HTMLDivElement>(null);
	const listRef = useRef<HTMLUListElement>(null);
	const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
	const [indicator, setIndicator] = useState({ left: 0, width: 0 });
	// No glide on first paint, only on later changes
	const [ready, setReady] = useState(false);

	const measure = useCallback(() => {
		const tab = tabRefs.current[activeId];
		const platter = platterRef.current;
		if (!tab || !platter) return;
		const tabRect = tab.getBoundingClientRect();
		setIndicator({
			left: tabRect.left - platter.getBoundingClientRect().left,
			width: tabRect.width,
		});
	}, [activeId]);

	useLayoutEffect(() => {
		// Keep the active tab visible when the platter is narrower than its tabs.
		// Scroll only the tab strip; scrollIntoView would also scroll the page.
		const tab = tabRefs.current[activeId];
		const list = listRef.current;
		if (tab && list && list.scrollWidth > list.clientWidth) {
			const target = tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2;
			list.scrollTo({ left: target, behavior: ready ? "smooth" : "auto" });
		}
		measure();
		const frame = requestAnimationFrame(() => setReady(true));
		return () => cancelAnimationFrame(frame);
	}, [measure, activeId, ready, items]);

	useLayoutEffect(() => {
		window.addEventListener("resize", measure);
		document.fonts?.ready.then(measure);
		return () => window.removeEventListener("resize", measure);
	}, [measure]);

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
		e.preventDefault();
		const index = items.findIndex((item) => item.id === activeId);
		const next =
			items[
				(index + (e.key === "ArrowRight" ? 1 : -1) + items.length) %
					items.length
			];
		onChange(next.id);
		tabRefs.current[next.id]?.focus();
	};

	return (
		<div
			ref={platterRef}
			className={cn(
				"relative h-11 sm:h-14 max-w-full w-fit p-1 sm:p-1.5 rounded-full bg-[#e8e8ed] dark:bg-[#333336]",
				className,
			)}>
			{/* Gliding indicator */}
			<div
				aria-hidden='true'
				className={cn(
					"absolute top-1 bottom-1 sm:top-1.5 sm:bottom-1.5 rounded-full bg-[#1d1d1f] dark:bg-[#f5f5f7] pointer-events-none",
					ready && "transition-[left,width] duration-[320ms] ease-out",
				)}
				style={{ left: indicator.left, width: indicator.width }}
			/>

			<ul
				ref={listRef}
				role='tablist'
				aria-label={ariaLabel}
				onKeyDown={handleKeyDown}
				onScroll={measure}
				className='no-scrollbar relative flex h-full overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_12px,black_calc(100%-12px),transparent)] sm:[mask-image:none]'>
				{items.map((item) => {
					const isActive = item.id === activeId;
					return (
						<li key={item.id} role='presentation' className='h-full shrink-0'>
							<button
								ref={(el) => {
									tabRefs.current[item.id] = el;
								}}
								type='button'
								role='tab'
								aria-selected={isActive}
								tabIndex={isActive ? 0 : -1}
								onClick={() => onChange(item.id)}
								className={cn(
									"h-full flex items-center px-4 sm:px-[22px] rounded-full whitespace-nowrap text-sm sm:text-[17px] tracking-[-0.016em] sm:tracking-[-0.022em] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071e3] transition-[color,opacity]",
									isActive ?
										"text-white dark:text-black opacity-100 cursor-default duration-[160ms] ease-out"
									:	"text-black dark:text-white opacity-80 hover:opacity-100 cursor-pointer duration-100 ease-in-out",
								)}>
								{item.label}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
