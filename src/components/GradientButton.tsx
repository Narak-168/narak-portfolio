/** @format */

import React, { ReactNode } from "react";

interface GradientButtonProps {
	variant: "purple" | "green" | "blue" | "red" | "yellow";
	onClick: () => void;
	icon?: ReactNode;
	children: ReactNode;
}

export default function GradientButton({
	variant,
	onClick,
	icon,
	children,
}: GradientButtonProps) {
	const gradientClasses = {
		purple: "before:bg-purple-500 dark:before:bg-purple-800",
		green: "before:bg-green-600 dark:before:bg-green-800",
		blue: "before:bg-blue-500 dark:before:bg-blue-800",
		red: "before:bg-red-500 dark:before:bg-red-800",
		yellow: "before:bg-yellow-500 dark:before:bg-yellow-800",
	};

	return (
		<button
			className={`cursor-pointer p-3 group relative isolation-auto z-10 flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-gray-500 dark:border-white/20 px-3 py-1 text-lg backdrop-blur-xl bg-white/20 dark:bg-black/20 before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full ${gradientClasses[variant]} before:transition-all before:duration-700 text-gray-800 dark:text-gray-100 hover:text-white dark:hover:text-white hover:before:left-0 hover:before:w-full hover:before:scale-150 hover:before:duration-700 lg:font-semibold transition-all duration-300 hover:bg-white/10 dark:hover:bg-black/10 mt-6`}
			onClick={onClick}>
			{icon}
			{children}
		</button>
	);
}
