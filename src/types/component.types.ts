/** @format */

import React from "react";

// TextType Component Props
export interface TextTypeProps {
	className?: string;
	showCursor?: boolean;
	hideCursorWhileTyping?: boolean;
	cursorCharacter?: string | React.ReactNode;
	cursorBlinkDuration?: number;
	cursorClassName?: string;
	text: string | string[];
	as?: React.ElementType;
	typingSpeed?: number;
	initialDelay?: number;
	pauseDuration?: number;
	deletingSpeed?: number;
	loop?: boolean;
	textColors?: string[];
	variableSpeed?: { min: number; max: number };
	onSentenceComplete?: (sentence: string, index: number) => void;
	startOnVisible?: boolean;
	reverseMode?: boolean;
}

// Falling Text Component Props
export interface FallingTextProps {
	text?: string;
	highlightWords?: string[];
	trigger?: "auto" | "scroll" | "click" | "hover";
	backgroundColor?: string;
	wireframes?: boolean;
	gravity?: number;
	mouseConstraintStiffness?: number;
	fontSize?: string;
}

// Grid Background Props
export interface GridBackgroundProps {
	className?: string;
	width?: number;
	height?: number;
	gridSize?: number;
	opacity?: number;
	animated?: boolean;
}

// Logo Loop Props
export type LogoItem =
	| {
			node: React.ReactNode;
			href?: string;
			title?: string;
			ariaLabel?: string;
	  }
	| {
			src: string;
			alt?: string;
			href?: string;
			title?: string;
			srcSet?: string;
			sizes?: string;
			width?: number;
			height?: number;
	  };

export interface LogoLoopProps {
	logos: LogoItem[];
	speed?: number;
	direction?: "left" | "right" | "up" | "down";
	width?: number | string;
	logoHeight?: number;
	gap?: number;
	pauseOnHover?: boolean;
	hoverSpeed?: number;
	fadeOut?: boolean;
	fadeOutColor?: string;
	scaleOnHover?: boolean;
	ariaLabel?: string;
}

// Floating Lines Props
export type WavePosition = "top" | "middle" | "bottom";

export type FloatingLinesProps = {
	enabledWaves?: WavePosition[];
	animationSpeed?: number;
	topLineCount?: number;
	middleLineCount?: number;
	bottomLineCount?: number;
	topLineDistance?: number;
	middleLineDistance?: number;
	bottomLineDistance?: number;
	interactive?: boolean;
	bendRadius?: number;
	bendStrength?: number;
	parallax?: boolean;
	parallaxStrength?: number;
	isDarkMode?: boolean;
	className?: string;
};

// Color Bends Props
export type ColorBendsProps = {
	speed?: number;
	transparent?: boolean;
	scale?: number;
	frequency?: number;
	warpStrength?: number;
	mouseInfluence?: number;
	parallax?: boolean;
	noise?: number;
	className?: string;
};

// Curved Loop Props
export interface CurvedLoopProps {
	children?: React.ReactNode;
	radius?: number;
	gap?: number;
	className?: string;
}

// Text Pressure Props
export interface TextPressureProps {
	text: string;
	className?: string;
	fontSize?: number;
	fontWeight?: string;
}

// Bounce Cards Props
export interface BounceCardsProps {
	children?: React.ReactNode;
	className?: string;
}

// Gradient Button Props
export interface GradientButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
	gradientFrom?: string;
	gradientTo?: string;
	onClick?: () => void;
}

// Chroma Grid Props
export interface ChromaItem {
	id: string | number;
	title: string;
	description?: string;
	color?: string;
}

export interface ChromaGridProps {
	items: ChromaItem[];
	columns?: number;
	gap?: number;
	className?: string;
}

// Card Swap Props
export interface CardSwapProps {
	children?: React.ReactNode;
	className?: string;
	autoplay?: boolean;
	delay?: number;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	index?: number;
	isActive?: boolean;
}

// Lanyard Props
export interface LanyardProps {
	className?: string;
	lanyard?: any;
}

// Navbar Props
export interface NavbarProps {
	className?: string;
}

export interface NavBodyProps {
	children?: React.ReactNode;
}

export interface NavItemsProps {
	items?: Array<{ name: string; link: string }>;
}

export interface MobileNavProps {
	isOpen?: boolean;
}

export interface MobileNavHeaderProps {
	children?: React.ReactNode;
}

export interface MobileNavMenuProps {
	items?: Array<{ name: string; link: string }>;
}

// Theme Toggle Wrapper Props
export interface NavbarWrapperProps {
	children?: React.ReactNode;
}
