/** @format */

"use client";

import {
	SiNextdotjs,
	SiHtml5,
	SiCss3,
	SiBootstrap,
	SiTailwindcss,
	SiJavascript,
	SiTypescript,
	SiReact,
} from "react-icons/si";
import CardSwap, { Card } from "../CardSwap";
import ColorBends from "../ColorBends";
import GradientButton from "../GradientButton";
import Image from "next/image";
import { JSX } from "react";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const technologyStack = {
	frontend: {
		title: "frontend_title",
	},
};

export default function FrontendPage(): JSX.Element | null {
	const [showModal, setShowModal] = useState(false);
	const { t, mounted } = useTranslation("common");

	if (!mounted) {
		return null;
	}

	return (
		<>
			<section
				className='bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/20  relative flex flex-row w-11/12 mx-auto shadow-md overflow-hidden rounded-3xl items-center'
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
					backgroundRepeat: "repeat",
				}}>
				{/* Frontend Skills Content */}
				<div className='w-full lg:w-1/2 px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12'>
					<h2 className='text-start text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 uppercase'>
						{t("technologyStack.frontend.0.title")}
					</h2>
					<p className='text-start text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed'>
						{t("technologyStack.frontend.0.subtitle")}
					</p>
					<GradientButton
						variant='purple'
						onClick={() => setShowModal(true)}
						icon={
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 512 512'
								className='w-10 h-10 rotate-45 justify-end rounded-full p-1 duration-300 ease-linear group-hover:rotate-90 group-hover:border-none'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm80.09 224L272 208.42V358h-32V208.42L175.91 272l-22.54-22.7L256 147.46 358.63 249.3z'></path>
							</svg>
						}>
						{t("technologyStack.frontend.0.exploreMore") || "Explore More"}
					</GradientButton>
				</div>
				{/* Card Swap Component for Frontend Skills */}
				<div
					style={{
						height: "480px",
						position: "relative",
						overflow: "visible",
						width: "100%",
						alignItems: "flex-end",
					}}
					className='hidden lg:flex w-full lg:w-1/2'>
					<CardSwap
						cardDistance={100}
						verticalDistance={120}
						delay={5000}
						pauseOnHover={false}
						alignBottom={true}>
						<Card>
							<ColorBends
								colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
								rotation={30}
								speed={0.3}
								scale={1.2}
								frequency={1.4}
								warpStrength={1.2}
								mouseInfluence={0.8}
								parallax={0.6}
								noise={0.08}
								transparent>
								<div className='flex flex-col h-full rounded-3xl overflow-hidden'>
									<h3 className='w-full text-lg sm:text-xl md:text-2xl font-bold text-center py-2 sm:py-3 md:py-4 text-white bg-pink-500'>
										Next.js
									</h3>
									<div className='flex flex-col h-full p-4 sm:p-6 md:p-8 border border-white rounded-3xl rounded-t-none'>
										<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600' />
										<div className='flex-1 flex items-center justify-center'>
											<div className='rounded-full bg-white p-6 sm:p-8 md:p-10 shadow-lg'>
												<SiNextdotjs
													className='text-6xl sm:text-7xl md:text-8xl text-black'
													aria-hidden
												/>
											</div>
										</div>
									</div>
								</div>
							</ColorBends>
						</Card>
						<Card>
							<ColorBends
								colors={["#ff7a00", "#ffb86b"]}
								rotation={20}
								speed={0.25}
								scale={1.05}
								frequency={1}
								warpStrength={0.9}
								mouseInfluence={0.6}
								parallax={0.4}
								noise={0.06}
								transparent>
								<div className='flex flex-col h-full rounded-3xl overflow-hidden'>
									<h3 className='w-full text-lg sm:text-xl md:text-2xl font-bold text-center py-2 sm:py-3 md:py-4 text-white bg-orange-500'>
										HTML
									</h3>
									<div className='flex flex-col h-full p-4 sm:p-6 md:p-8'>
										<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600' />
										<div className='flex-1 flex items-center justify-center'>
											<div className='rounded-full bg-white p-6 sm:p-8 md:p-10 shadow-lg'>
												<SiHtml5
													className='text-6xl sm:text-7xl md:text-8xl text-orange-500'
													aria-hidden
												/>
											</div>
										</div>
									</div>
								</div>
							</ColorBends>
						</Card>

						<Card>
							<ColorBends
								colors={["#2b8cff", "#6fb3ff"]}
								rotation={-15}
								speed={0.22}
								scale={1.05}
								frequency={1.1}
								warpStrength={1}
								mouseInfluence={0.5}
								parallax={0.4}
								noise={0.04}
								transparent>
								<div className='flex flex-col h-full rounded-3xl overflow-hidden'>
									<h3 className='w-full text-lg sm:text-xl md:text-2xl font-bold text-center py-2 sm:py-3 md:py-4 text-white bg-blue-600'>
										CSS
									</h3>
									<div className='flex flex-col h-full p-4 sm:p-6 md:p-8'>
										<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600' />
										<div className='flex-1 flex items-center justify-center'>
											<div className='rounded-full bg-white p-6 sm:p-8 md:p-10 shadow-lg'>
												<SiCss3
													className='text-6xl sm:text-7xl md:text-8xl text-blue-500'
													aria-hidden
												/>
											</div>
										</div>
									</div>
								</div>
							</ColorBends>
						</Card>

						<Card>
							<ColorBends
								colors={["#8b5cff", "#cfa9ff"]}
								rotation={10}
								speed={0.2}
								scale={1.02}
								frequency={1}
								warpStrength={0.9}
								mouseInfluence={0.5}
								parallax={0.45}
								noise={0.05}
								transparent>
								<div className='flex flex-col h-full rounded-3xl overflow-hidden'>
									<h3 className='w-full text-lg sm:text-xl md:text-2xl font-bold text-center py-2 sm:py-3 md:py-4 text-white bg-purple-600'>
										Bootstrap
									</h3>
									<div className='flex flex-col h-full p-4 sm:p-6 md:p-8'>
										<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600' />
										<div className='flex-1 flex items-center justify-center'>
											<div className='rounded-full bg-white p-6 sm:p-8 md:p-10 shadow-lg'>
												<SiBootstrap
													className='text-6xl sm:text-7xl md:text-8xl text-purple-600'
													aria-hidden
												/>
											</div>
										</div>
									</div>
								</div>
							</ColorBends>
						</Card>

						<Card>
							<ColorBends
								colors={["#06b6d4", "#7dd3fc"]}
								rotation={25}
								speed={0.28}
								scale={1.03}
								frequency={1}
								warpStrength={1}
								mouseInfluence={0.55}
								parallax={0.45}
								noise={0.04}
								transparent>
								<div className='flex flex-col h-full rounded-3xl overflow-hidden'>
									<h3 className='w-full text-lg sm:text-xl md:text-2xl font-bold text-center py-2 sm:py-3 md:py-4 text-white bg-cyan-500'>
										Tailwind CSS
									</h3>
									<div className='flex flex-col h-full p-4 sm:p-6 md:p-8'>
										<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600' />
										<div className='flex-1 flex items-center justify-center'>
											<div className='rounded-full bg-white p-6 sm:p-8 md:p-10 shadow-lg'>
												<SiTailwindcss
													className='text-6xl sm:text-7xl md:text-8xl text-sky-500'
													aria-hidden
												/>
											</div>
										</div>
									</div>
								</div>
							</ColorBends>
						</Card>

						<Card>
							<ColorBends
								colors={["#ffd54f", "#ffb84d"]}
								rotation={5}
								speed={0.24}
								scale={1.04}
								frequency={1}
								warpStrength={0.9}
								mouseInfluence={0.5}
								parallax={0.35}
								noise={0.05}
								transparent>
								<div className='flex flex-col h-full rounded-3xl overflow-hidden'>
									<h3 className='w-full text-lg sm:text-xl md:text-2xl font-bold text-center py-2 sm:py-3 md:py-4 text-white bg-yellow-400'>
										JavaScript
									</h3>
									<div className='flex flex-col h-full p-4 sm:p-6 md:p-8'>
										<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600' />
										<div className='flex-1 flex items-center justify-center'>
											<div className='rounded-full bg-white p-6 sm:p-8 md:p-10 shadow-lg'>
												<SiJavascript
													className='text-6xl sm:text-7xl md:text-8xl text-yellow-500'
													aria-hidden
												/>
											</div>
										</div>
									</div>
								</div>
							</ColorBends>
						</Card>

						<Card>
							<ColorBends
								colors={["#2f6fbf", "#78a9ff"]}
								rotation={-8}
								speed={0.23}
								scale={1.03}
								frequency={1}
								warpStrength={0.95}
								mouseInfluence={0.5}
								parallax={0.4}
								noise={0.04}
								transparent>
								<div className='flex flex-col h-full rounded-3xl overflow-hidden'>
									<h3 className='w-full text-lg sm:text-xl md:text-2xl font-bold text-center py-2 sm:py-3 md:py-4 text-white bg-blue-600'>
										TypeScript
									</h3>
									<div className='flex flex-col h-full p-4 sm:p-6 md:p-8'>
										<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600' />
										<div className='flex-1 flex items-center justify-center'>
											<div className='rounded-full bg-white p-6 sm:p-8 md:p-10 shadow-lg'>
												<SiTypescript
													className='text-6xl sm:text-7xl md:text-8xl text-blue-600'
													aria-hidden
												/>
											</div>
										</div>
									</div>
								</div>
							</ColorBends>
						</Card>

						<Card>
							<ColorBends
								colors={["#61dafb", "#a7f0ff"]}
								rotation={12}
								speed={0.26}
								scale={1.04}
								frequency={1}
								warpStrength={0.9}
								mouseInfluence={0.5}
								parallax={0.35}
								noise={0.03}
								transparent>
								<div className='flex flex-col h-full rounded-3xl overflow-hidden'>
									<h3 className='w-full text-lg sm:text-xl md:text-2xl font-bold text-center py-2 sm:py-3 md:py-4 text-white bg-sky-400'>
										React.js
									</h3>
									<div className='flex flex-col h-full p-4 sm:p-6 md:p-8'>
										<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600' />
										<div className='flex-1 flex items-center justify-center'>
											<div className='rounded-full bg-white p-6 sm:p-8 md:p-10 shadow-lg'>
												<SiReact
													className='text-6xl sm:text-7xl md:text-8xl text-cyan-500'
													aria-hidden
												/>
											</div>
										</div>
									</div>
								</div>
							</ColorBends>
						</Card>
					</CardSwap>
				</div>
			</section>
			{/* Frontend Technologies Modal */}
			{showModal && (
				<div
					className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md transition-all duration-300'
					onClick={() => setShowModal(false)}>
					<div
						className='rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/30 transform transition-all duration-300 backdrop-blur-xl bg-white/10 dark:bg-black/20 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
						style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
							backgroundRepeat: "repeat",
						}}
						onClick={(e) => e.stopPropagation()}>
						{/* Header with Gradient */}
						<div className='bg-linear-to-r from-purple-500/30 to-blue-500/30 p-8 flex items-center justify-between relative overflow-hidden'>
							<div className='relative z-10'>
								<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white'>
									Frontend Tech Stack
								</h2>
								<p className='text-white/90 text-sm sm:text-base mt-2'>
									Tools & technologies I master
								</p>
							</div>
							{/* Close Button */}
							<button
								onClick={() => setShowModal(false)}
								className='relative z-10 text-white hover:text-gray-300 transition-colors'>
								<svg
									className='w-8 h-8'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>

						{/* Content - List View */}
						<div
							className='p-8 sm:p-10 md:p-12'
							style={{
								backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
								backgroundRepeat: "repeat",
							}}>
							{/* Technologies List */}
							<div className='space-y-4'>
								{/* Next.js */}
								<div className='flex items-center gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40 group cursor-pointer'>
									<div className='text-5xl sm:text-6xl shrink-0 group-hover:scale-110 transition-transform'>
										<SiNextdotjs aria-hidden />
									</div>
									<div className='flex-1'>
										<h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
											Next.js
										</h3>
										<p className='text-white/70 text-sm sm:text-base'>
											React framework for production with SSR, SSG, and API
											routes
										</p>
									</div>
								</div>

								{/* React */}
								<div className='flex items-center gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40 group cursor-pointer'>
									<div className='text-5xl sm:text-6xl shrink-0 text-cyan-500 group-hover:scale-110 transition-transform'>
										<SiReact aria-hidden />
									</div>
									<div className='flex-1'>
										<h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
											React.js
										</h3>
										<p className='text-white/70 text-sm sm:text-base'>
											JavaScript library for building interactive user
											interfaces
										</p>
									</div>
								</div>

								{/* TypeScript */}
								<div className='flex items-center gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40 group cursor-pointer'>
									<div className='text-5xl sm:text-6xl shrink-0 text-blue-600 group-hover:scale-110 transition-transform'>
										<SiTypescript aria-hidden />
									</div>
									<div className='flex-1'>
										<h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
											TypeScript
										</h3>
										<p className='text-white/70 text-sm sm:text-base'>
											Typed superset of JavaScript for better development
											experience
										</p>
									</div>
								</div>

								{/* Tailwind CSS */}
								<div className='flex items-center gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40 group cursor-pointer'>
									<div className='text-5xl sm:text-6xl shrink-0 text-sky-500 group-hover:scale-110 transition-transform'>
										<SiTailwindcss aria-hidden />
									</div>
									<div className='flex-1'>
										<h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
											Tailwind CSS
										</h3>
										<p className='text-white/70 text-sm sm:text-base'>
											Utility-first CSS framework for rapid UI development
										</p>
									</div>
								</div>

								{/* JavaScript */}
								<div className='flex items-center gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40 group cursor-pointer'>
									<div className='text-5xl sm:text-6xl shrink-0 text-yellow-500 group-hover:scale-110 transition-transform'>
										<SiJavascript aria-hidden />
									</div>
									<div className='flex-1'>
										<h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
											JavaScript
										</h3>
										<p className='text-white/70 text-sm sm:text-base'>
											Core language for interactive web experiences
										</p>
									</div>
								</div>

								{/* HTML */}
								<div className='flex items-center gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40 group cursor-pointer'>
									<div className='text-5xl sm:text-6xl shrink-0 text-orange-500 group-hover:scale-110 transition-transform'>
										<SiHtml5 aria-hidden />
									</div>
									<div className='flex-1'>
										<h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
											HTML5
										</h3>
										<p className='text-white/70 text-sm sm:text-base'>
											Semantic markup for structured and accessible content
										</p>
									</div>
								</div>

								{/* CSS */}
								<div className='flex items-center gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40 group cursor-pointer'>
									<div className='text-5xl sm:text-6xl shrink-0 text-blue-500 group-hover:scale-110 transition-transform'>
										<SiCss3 aria-hidden />
									</div>
									<div className='flex-1'>
										<h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
											CSS3
										</h3>
										<p className='text-white/70 text-sm sm:text-base'>
											Modern styling with animations and responsive design
										</p>
									</div>
								</div>

								{/* Bootstrap */}
								<div className='flex items-center gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40 group cursor-pointer'>
									<div className='text-5xl sm:text-6xl shrink-0 text-purple-600 group-hover:scale-110 transition-transform'>
										<SiBootstrap aria-hidden />
									</div>
									<div className='flex-1'>
										<h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
											Bootstrap
										</h3>
										<p className='text-white/70 text-sm sm:text-base'>
											Responsive CSS framework for rapid web development
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
