/** @format */

import React, {
	Children,
	cloneElement,
	forwardRef,
	isValidElement,
	ReactElement,
	ReactNode,
	RefObject,
	useEffect,
	useMemo,
	useRef,
} from "react";
import gsap from "gsap";

export interface CardSwapProps {
	width?: number | string;
	height?: number | string;
	cardDistance?: number;
	verticalDistance?: number;
	delay?: number;
	pauseOnHover?: boolean;
	onCardClick?: (idx: number) => void;
	skewAmount?: number;
	easing?: "linear" | "elastic";
	/** If true, the card stack will align flush to the bottom edge of its container (no Y translate). */
	alignBottom?: boolean;
	children: ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
	({ customClass, children, ...rest }, ref) => (
		<div
			ref={ref}
			{...rest}
			className={`absolute top-1/2 left-1/2 rounded-3xl border bg-white dark:bg-background border-gray-400 dark:border-white shadow-sm transform-3d will-change-transform backface-hidden overflow-hidden ${
				customClass ?? ""
			} ${rest.className ?? ""}`.trim()}
			style={{
				backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
				backgroundRepeat: "repeat",
				...rest.style,
			}}>
			{children}
		</div>
	)
);
Card.displayName = "Card";

type CardRef = RefObject<HTMLDivElement | null>;
interface Slot {
	x: number;
	y: number;
	z: number;
	zIndex: number;
}

const makeSlot = (
	i: number,
	distX: number,
	distY: number,
	total: number
): Slot => ({
	x: i * distX,
	y: -i * distY,
	z: -i * distX * 1.5,
	zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
	gsap.set(el, {
		x: slot.x,
		y: slot.y,
		z: slot.z,
		xPercent: -50,
		yPercent: -50,
		skewY: skew,
		transformOrigin: "center center",
		zIndex: slot.zIndex,
		force3D: true,
	});

const CardSwap: React.FC<CardSwapProps> = ({
	width = 500,
	height = 400,
	cardDistance = 100,
	verticalDistance = 120,
	delay = 5000,
	pauseOnHover = false,
	onCardClick,
	skewAmount = 6,
	easing = "elastic",
	alignBottom = false,
	children,
}) => {
	const config =
		easing === "elastic"
			? {
					ease: "elastic.out(0.6,0.9)",
					durDrop: 2,
					durMove: 2,
					durReturn: 2,
					promoteOverlap: 0.9,
					returnDelay: 0.05,
			  }
			: {
					ease: "power1.inOut",
					durDrop: 0.8,
					durMove: 0.8,
					durReturn: 0.8,
					promoteOverlap: 0.45,
					returnDelay: 0.2,
			  };

	const childArr = useMemo(
		() => Children.toArray(children) as ReactElement<CardProps>[],
		[children]
	);
	const refs = useMemo<CardRef[]>(
		() => childArr.map(() => React.createRef<HTMLDivElement>()),
		[childArr.length]
	);

	const order = useRef<number[]>(
		Array.from({ length: childArr.length }, (_, i) => i)
	);

	const tlRef = useRef<gsap.core.Timeline | null>(null);
	const intervalRef = useRef<number>(0);
	const container = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const total = refs.length;
		const visibleCount = Math.min(3, total);

		// initial placement: place first `visibleCount` into visible slots, hide the rest offscreen
		refs.forEach((r, i) => {
			const el = r.current!;
			if (i < visibleCount) {
				placeNow(
					el,
					makeSlot(i, cardDistance, verticalDistance, visibleCount),
					skewAmount
				);
				gsap.set(el, { opacity: 1 });
			} else {
				// hide offscreen and make invisible
				gsap.set(el, {
					x: (visibleCount + 1) * cardDistance,
					y: 2000,
					z: -10000,
					opacity: 0,
					zIndex: 0,
				});
			}
		});

		const swap = () => {
			if (order.current.length < 2) return;

			const [front, ...restAll] = order.current;
			const elFront = refs[front].current!;
			const tl = gsap.timeline();
			tlRef.current = tl;

			// drop the front card
			tl.to(elFront, {
				y: "+=500",
				duration: config.durDrop,
				ease: config.ease,
			});

			// promote label where visible cards start to move up
			tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);

			// Move up the next visibleCount-1 items (they are currently at restAll[0..visibleCount-2])
			const moving = restAll.slice(0, Math.max(0, visibleCount - 1));
			moving.forEach((idx, i) => {
				const el = refs[idx].current!;
				const slot = makeSlot(i, cardDistance, verticalDistance, visibleCount);
				tl.set(el, { zIndex: slot.zIndex }, "promote");
				tl.to(
					el,
					{
						x: slot.x,
						y: slot.y,
						z: slot.z,
						duration: config.durMove,
						ease: config.ease,
					},
					`promote+=${i * 0.15}`
				);
			});

			// Determine incoming element (the one after the visible window)
			const incomingIdx = order.current[visibleCount];
			const backSlot = makeSlot(
				visibleCount - 1,
				cardDistance,
				verticalDistance,
				visibleCount
			);

			// return label timing
			tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);

			if (typeof incomingIdx !== "undefined") {
				const incomingEl = refs[incomingIdx].current!;
				// bring incoming from hidden into the back slot
				tl.set(incomingEl, { zIndex: backSlot.zIndex, opacity: 1 }, "return");
				tl.to(
					incomingEl,
					{
						x: backSlot.x,
						y: backSlot.y,
						z: backSlot.z,
						duration: config.durReturn,
						ease: config.ease,
					},
					"return"
				);

				// move the front to hidden/offscreen
				tl.to(
					elFront,
					{
						x: (visibleCount + 1) * cardDistance,
						y: 2000,
						z: -10000,
						opacity: 0,
						duration: config.durReturn,
						ease: config.ease,
					},
					"return"
				);
			} else {
				// No incoming (total <= visibleCount): rotate front to back slot as before
				tl.call(
					() => {
						gsap.set(elFront, { zIndex: backSlot.zIndex });
					},
					undefined,
					"return"
				);
				tl.to(
					elFront,
					{
						x: backSlot.x,
						y: backSlot.y,
						z: backSlot.z,
						duration: config.durReturn,
						ease: config.ease,
					},
					"return"
				);
			}

			// after animation, rotate order so the next window is correct
			tl.call(() => {
				order.current = [...restAll, front];
				// ensure offscreen elements remain hidden
				order.current.forEach((idx, pos) => {
					const el = refs[idx].current!;
					if (pos < visibleCount) {
						placeNow(
							el,
							makeSlot(pos, cardDistance, verticalDistance, visibleCount),
							skewAmount
						);
						gsap.set(el, { opacity: 1 });
					} else {
						gsap.set(el, {
							x: (visibleCount + 1) * cardDistance,
							y: 2000,
							z: -10000,
							opacity: 0,
							zIndex: 0,
						});
					}
				});
			});
		};

		swap();
		intervalRef.current = window.setInterval(swap, delay);

		if (pauseOnHover) {
			const node = container.current!;
			const pause = () => {
				tlRef.current?.pause();
				clearInterval(intervalRef.current);
			};
			const resume = () => {
				tlRef.current?.play();
				intervalRef.current = window.setInterval(swap, delay);
			};
			node.addEventListener("mouseenter", pause);
			node.addEventListener("mouseleave", resume);
			return () => {
				node.removeEventListener("mouseenter", pause);
				node.removeEventListener("mouseleave", resume);
				clearInterval(intervalRef.current);
			};
		}
		return () => clearInterval(intervalRef.current);
	}, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

	const rendered = childArr.map((child, i) =>
		isValidElement<CardProps>(child)
			? cloneElement(child, {
					key: i,
					ref: refs[i],
					style: { width, height, ...(child.props.style ?? {}) },
					onClick: (e) => {
						child.props.onClick?.(e as React.MouseEvent<HTMLDivElement>);
						onCardClick?.(i);
					},
			  } as CardProps & React.RefAttributes<HTMLDivElement>)
			: child
	);

	const translateX = "5%";
	const translateY = alignBottom ? "0%" : "20%";

	// Inline transform so we can toggle translateY via prop (keeps responsive classes for scaling)
	const containerStyle: React.CSSProperties = {
		width,
		height,
		transform: `translateX(${translateX}) translateY(${translateY})`,
	};

	return (
		<div
			ref={container}
			className='absolute bottom-0 right-0 origin-bottom-right perspective-[900px] overflow-visible max-[768px]:translate-x-[25%] max-[768px]:translate-y-[25%] max-[768px]:scale-[0.75] max-[480px]:translate-x-[25%] max-[480px]:translate-y-[25%] max-[480px]:scale-[0.55]'
			style={containerStyle}>
			{rendered}
		</div>
	);
};

export default CardSwap;
