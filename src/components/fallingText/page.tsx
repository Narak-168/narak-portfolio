/** @format */

import { useRef, useState, useEffect } from "react";
import Matter from "matter-js";
import type { FallingTextProps } from "@/src/types";

const FallingText: React.FC<FallingTextProps> = ({
	text = "",
	highlightWords = [],
	trigger = "auto",
	backgroundColor = "transparent",
	wireframes = false,
	gravity = 1,
	mouseConstraintStiffness = 0.2,
	fontSize = "1rem",
}) => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const textRef = useRef<HTMLDivElement | null>(null);
	const canvasContainerRef = useRef<HTMLDivElement | null>(null);

	const [effectStarted, setEffectStarted] = useState(false);

	useEffect(() => {
		if (!textRef.current) return;
		// Split by | to keep phrases together, then trim whitespace
		const words = text
			.split("|")
			.map((w) => w.trim())
			.filter((w) => w.length > 0);

		// Array of color classes for different words
		const colorClasses = [
			"bg-blue-500",
			"bg-purple-500",
			"bg-pink-500",
			"bg-green-500",
			"bg-yellow-500",
			"bg-red-500",
			"bg-indigo-500",
			"bg-cyan-500",
			"bg-orange-500",
			"bg-teal-500",
		];

		const newHTML = words
			.map((word, index) => {
				const isHighlighted = highlightWords.some(
					(hw) => hw.trim() === word.trim()
				);
				const colorClass = colorClasses[index % colorClasses.length];
				return `<span
          class="inline-block mx-0.5 sm:mx-1 my-0.5 sm:my-1 px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-3 lg:py-4 rounded-full select-none text-center whitespace-nowrap text-white text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl ${
						isHighlighted ? "font-bold ring-1 sm:ring-2 ring-white" : ""
					} ${colorClass}"
          style="min-width: 80px;"
        >
          ${word}
        </span>`;
			})
			.join(" ");

		textRef.current.innerHTML = newHTML;
	}, [text, highlightWords]);

	useEffect(() => {
		if (trigger === "auto") {
			setEffectStarted(true);
			return;
		}
		if (trigger === "scroll" && containerRef.current) {
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						setEffectStarted(true);
						observer.disconnect();
					}
				},
				{ threshold: 0.1 }
			);
			observer.observe(containerRef.current);
			return () => observer.disconnect();
		}
	}, [trigger]);

	useEffect(() => {
		if (!effectStarted) return;

		const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } =
			Matter;

		if (!containerRef.current || !canvasContainerRef.current) return;

		const containerRect = containerRef.current.getBoundingClientRect();
		const width = containerRect.width;
		const height = containerRect.height;

		if (width <= 0 || height <= 0) return;

		const engine = Engine.create();
		engine.world.gravity.y = gravity;

		const render = Render.create({
			element: canvasContainerRef.current,
			engine,
			options: {
				width,
				height,
				background: backgroundColor,
				wireframes,
			},
		});

		const boundaryOptions = {
			isStatic: true,
			render: { fillStyle: "transparent" },
		};
		const floor = Bodies.rectangle(
			width / 2,
			height - 25,
			width,
			50,
			boundaryOptions
		);
		const leftWall = Bodies.rectangle(
			-25,
			height / 2,
			50,
			height,
			boundaryOptions
		);
		const rightWall = Bodies.rectangle(
			width + 25,
			height / 2,
			50,
			height,
			boundaryOptions
		);
		const ceiling = Bodies.rectangle(
			width / 2,
			-25,
			width,
			50,
			boundaryOptions
		);

		if (!textRef.current) return;
		const wordSpans = textRef.current.querySelectorAll("span");
		const wordBodies = [...wordSpans].map((elem) => {
			const rect = elem.getBoundingClientRect();

			const x = rect.left - containerRect.left + rect.width / 2;
			const y = rect.top - containerRect.top + rect.height / 2;

			const body = Bodies.rectangle(x, y, rect.width, rect.height, {
				render: { fillStyle: "transparent" },
				restitution: 0.8,
				frictionAir: 0.01,
				friction: 0.2,
			});
			Matter.Body.setVelocity(body, {
				x: (Math.random() - 0.5) * 5,
				y: 0,
			});
			Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);

			return { elem, body };
		});

		wordBodies.forEach(({ elem, body }) => {
			elem.style.position = "absolute";
			elem.style.left = `${
				body.position.x - body.bounds.max.x + body.bounds.min.x / 2
			}px`;
			elem.style.top = `${
				body.position.y - body.bounds.max.y + body.bounds.min.y / 2
			}px`;
			elem.style.transform = "none";
		});

		// Remove mouse constraint - words will only fall, not be draggable
		World.add(engine.world, [
			floor,
			leftWall,
			rightWall,
			ceiling,
			...wordBodies.map((wb) => wb.body),
		]);

		const runner = Runner.create();
		Runner.run(runner, engine);
		Render.run(render);

		const updateLoop = () => {
			wordBodies.forEach(({ body, elem }) => {
				const { x, y } = body.position;
				elem.style.left = `${x}px`;
				elem.style.top = `${y}px`;
				elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
			});
			Matter.Engine.update(engine);
			requestAnimationFrame(updateLoop);
		};
		updateLoop();

		return () => {
			Render.stop(render);
			Runner.stop(runner);
			if (render.canvas && canvasContainerRef.current) {
				canvasContainerRef.current.removeChild(render.canvas);
			}
			World.clear(engine.world, false);
			Engine.clear(engine);
		};
	}, [
		effectStarted,
		gravity,
		wireframes,
		backgroundColor,
		mouseConstraintStiffness,
	]);

	const handleTrigger = () => {
		if (!effectStarted && (trigger === "click" || trigger === "hover")) {
			setEffectStarted(true);
		}
	};

	return (
		<div
			ref={containerRef}
			className='relative z-1 w-full h-full cursor-pointer text-center overflow-hidden'
			onClick={trigger === "click" ? handleTrigger : undefined}
			onMouseEnter={trigger === "hover" ? handleTrigger : undefined}>
			<div
				ref={textRef}
				className='inline-block'
				style={{
					fontSize,
					lineHeight: 1.4,
				}}
			/>

			<div className='absolute top-0 left-0 z-0' ref={canvasContainerRef} />
		</div>
	);
};

export default FallingText;
