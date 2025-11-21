/** @format */

import React from "react";
import { ComponentPropsWithoutRef } from "react";

// Scroll Velocity Types
export interface ScrollVelocityRowProps
	extends React.HTMLAttributes<HTMLDivElement> {
	baseVelocity: number;
	direction?: 1 | -1;
}

export interface ScrollVelocityRowImplProps extends ScrollVelocityRowProps {
	children?: React.ReactNode;
	baseVelocity: number;
	direction: 1 | -1;
}

// Marquee Types
export interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
	pauseOnHover?: boolean;
	pauseOnClick?: boolean;
	repeat?: number;
	vertical?: boolean;
	reverse?: boolean;
}

// Animated Gradient Text Types
export interface AnimatedGradientTextProps
	extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	className?: string;
	animated?: boolean;
	speed?: number;
	colorFrom?: string;
	colorTo?: string;
}

// Theme Toggle Types
export interface ThemeToggleWrapperProps {
	children?: React.ReactNode;
}

// Bubble Menu Types
export type MenuItem = {
	label: string;
	icon: React.ReactNode;
	action: () => void;
	hoverStyles: { bgColor: string; textColor: string };
};

export type BubbleMenuProps = {
	items: MenuItem[];
	triggerIcon?: React.ReactNode;
	triggerLabel?: string;
	position?: "top" | "bottom" | "left" | "right";
	backgroundColor?: string;
	textColor?: string;
};

// Arrow Button Types
export interface ArrowButtonProps {
	href?: string;
	target?: string;
	rel?: string;
	children?: React.ReactNode;
	className?: string;
}

// Interactive Hover Button Types
export interface InteractiveHoverButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
}
