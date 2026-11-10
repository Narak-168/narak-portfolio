/** @format */

"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import {
	motion,
	useMotionValue,
	useReducedMotion,
	useSpring,
	useTransform,
	type MotionValue,
} from "motion/react";

type ShapeKind = "star" | "circle" | "ring" | "square" | "pill";

interface ShapeConfig {
	kind: ShapeKind;
	// Final offset from the burst origin, as a fraction of the container's width / height
	x: number;
	y: number;
	size: number;
	rotate: number;
	colors: [string, string];
}

// Apple system colours, paired into two-tone gradients
const SHAPES: ShapeConfig[] = [
	{
		kind: "star",
		x: -0.42,
		y: -0.3,
		size: 44,
		rotate: -25,
		colors: ["#ffd60a", "#ff9f0a"],
	},
	{
		kind: "circle",
		x: 0.4,
		y: -0.36,
		size: 30,
		rotate: 0,
		colors: ["#64d2ff", "#0071e3"],
	},
	{
		kind: "square",
		x: -0.3,
		y: -0.04,
		size: 26,
		rotate: 35,
		colors: ["#ff375f", "#bf5af2"],
	},
	{
		kind: "ring",
		x: 0.34,
		y: -0.06,
		size: 40,
		rotate: 0,
		colors: ["#30d158", "#64d2ff"],
	},
	{
		kind: "pill",
		x: -0.46,
		y: 0.12,
		size: 46,
		rotate: -35,
		colors: ["#0071e3", "#bf5af2"],
	},
	{
		kind: "star",
		x: 0.46,
		y: 0.1,
		size: 32,
		rotate: 20,
		colors: ["#ff375f", "#ff9f0a"],
	},
	{
		kind: "circle",
		x: -0.2,
		y: -0.44,
		size: 18,
		rotate: 0,
		colors: ["#bf5af2", "#ff375f"],
	},
	{
		kind: "square",
		x: 0.22,
		y: -0.46,
		size: 20,
		rotate: -20,
		colors: ["#ffd60a", "#30d158"],
	},
	{
		kind: "ring",
		x: -0.38,
		y: -0.52,
		size: 24,
		rotate: 0,
		colors: ["#ff9f0a", "#ff375f"],
	},
	{
		kind: "pill",
		x: 0.42,
		y: -0.22,
		size: 34,
		rotate: 50,
		colors: ["#64d2ff", "#30d158"],
	},
	{
		kind: "star",
		x: -0.06,
		y: -0.56,
		size: 22,
		rotate: 15,
		colors: ["#0071e3", "#64d2ff"],
	},
];

const STAR_CLIP =
	"polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";

function shapeStyle({ kind, size, colors }: ShapeConfig): CSSProperties {
	const gradient = `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;
	switch (kind) {
		case "star":
			return {
				width: size,
				height: size,
				background: gradient,
				clipPath: STAR_CLIP,
			};
		case "ring":
			return {
				width: size,
				height: size,
				borderRadius: "9999px",
				border: `${Math.round(size * 0.2)}px solid ${colors[0]}`,
			};
		case "square":
			return {
				width: size,
				height: size,
				borderRadius: "22%",
				background: gradient,
			};
		case "pill":
			return {
				width: size,
				height: Math.round(size * 0.42),
				borderRadius: "9999px",
				background: gradient,
			};
		default:
			return {
				width: size,
				height: size,
				borderRadius: "9999px",
				background: gradient,
			};
	}
}

export interface BurstTiming {
	// Progress at which the first shape starts, the delay between shapes, and how long each takes
	start: number;
	step: number;
	span: number;
}

const DEFAULT_TIMING: BurstTiming = { start: 0.02, step: 0.012, span: 0.22 };

interface ShapeProps {
	config: ShapeConfig;
	index: number;
	progress: MotionValue<number>;
	width: MotionValue<number>;
	height: MotionValue<number>;
	originY: string;
	timing: BurstTiming;
	spread: number;
}

function Shape({
	config,
	index,
	progress,
	width,
	height,
	originY,
	timing,
	spread,
}: ShapeProps) {
	// Staggered windows so the shapes pop out one after another
	const start = timing.start + index * timing.step;
	const t = useTransform(progress, [start, start + timing.span], [0, 1]);

	const x = useTransform(
		[t, width],
		([v, w]: number[]) => v * config.x * spread * w,
	);
	const y = useTransform(
		[t, height],
		([v, h]: number[]) => v * config.y * spread * h,
	);
	// Overshoot then settle, for the "pop"
	const scale = useTransform(t, [0, 0.6, 1], [0.2, 1.15, 1]);
	const opacity = useTransform(t, [0, 0.15], [0, 1]);
	const spin = index % 2 === 0 ? 180 : -180;
	const rotate = useTransform(t, [0, 1], [0, config.rotate + spin]);

	const style = shapeStyle(config);

	return (
		<motion.span
			className='absolute left-1/2 will-change-transform'
			style={{
				...style,
				top: originY,
				marginLeft: -(Number(style.width) / 2),
				marginTop: -(Number(style.height) / 2),
				x,
				y,
				scale,
				rotate,
				opacity,
			}}
		/>
	);
}

interface ShapeBurstProps {
	// 0 → 1 scroll progress of the element the burst lives in
	progress: MotionValue<number>;
	// Recolours every shape from this list instead of the default Apple colours
	palette?: string[];
	// Vertical burst origin within the container
	originY?: string;
	timing?: BurstTiming;
	// Scales how far the shapes travel; below 1 keeps them inside a small container
	spread?: number;
}

// Colourful shapes that burst out from behind a portrait as the page scrolls
export function ShapeBurst({
	progress,
	palette,
	originY = "57%",
	timing = DEFAULT_TIMING,
	spread = 1,
}: ShapeBurstProps) {
	const reduceMotion = useReducedMotion();
	const ref = useRef<HTMLDivElement>(null);
	const width = useMotionValue(700);
	const height = useMotionValue(600);
	const smooth = useSpring(progress, {
		stiffness: 140,
		damping: 18,
		mass: 0.6,
	});

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new ResizeObserver(([entry]) => {
			width.set(entry.contentRect.width);
			height.set(entry.contentRect.height);
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, [width, height]);

	if (reduceMotion) return null;

	return (
		<div
			ref={ref}
			aria-hidden='true'
			className='absolute inset-0 pointer-events-none'>
			{SHAPES.map((config, index) => (
				<Shape
					key={index}
					config={
						palette ?
							{
								...config,
								colors: [
									palette[index % palette.length],
									palette[(index + 1) % palette.length],
								],
							}
						:	config
					}
					index={index}
					progress={smooth}
					width={width}
					height={height}
					originY={originY}
					timing={timing}
					spread={spread}
				/>
			))}
		</div>
	);
}
