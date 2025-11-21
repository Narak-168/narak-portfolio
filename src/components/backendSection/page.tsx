/** @format */

"use client";

import { RiJavaFill } from "react-icons/ri";
import {
	SiSpringboot,
	SiSpring,
	SiKeycloak,
	SiPostgresql,
	SiMysql,
} from "react-icons/si";
import CardSwap, { Card } from "../CardSwap";
import ColorBends from "../ColorBends";
import GradientButton from "../GradientButton";
import Image from "next/image";
import { JSX } from "react/jsx-dev-runtime";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function BackendPage(): JSX.Element | null {
	const [showBackendModal, setShowBackendModal] = useState(false);
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
				{/* Backend Skills Content */}
				<div className='w-full lg:w-1/2 px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12'>
					{" "}
					<h2 className='text-start text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 uppercase'>
						{t("technologyStack.backend.0.title")}
					</h2>
					<p className='text-start text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed'>
						{t("technologyStack.backend.0.subtitle")}
					</p>
					<GradientButton
						variant='green'
						onClick={() => setShowBackendModal(true)}
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
						{t("technologyStack.backend.0.exploreMore") || "Explore More"}
					</GradientButton>
				</div>
				{/* Card Swap Component for Backend Skills */}
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
								colors={["#22c55e", "#86efac", "#10b981"]}
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
									<h3 className='w-full text-lg sm:text-xl md:text-2xl font-bold text-center py-2 sm:py-3 md:py-4 text-white bg-green-600'>
										Spring Boot
									</h3>
									<div className='flex flex-col h-full p-4 sm:p-6 md:p-8 border border-white rounded-3xl rounded-t-none'>
										<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600' />
										<div className='flex-1 flex items-center justify-center'>
											<div className='rounded-full bg-white p-6 sm:p-8 md:p-10 shadow-lg'>
												<SiSpringboot
													className='text-6xl sm:text-7xl md:text-8xl text-green-600'
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
								colors={["#16a34a", "#4ade80", "#22c55e"]}
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
									<h3 className='w-full text-lg sm:text-xl md:text-2xl font-bold text-center py-2 sm:py-3 md:py-4 text-white bg-green-500'>
										Spring Security
									</h3>
									<div className='flex flex-col h-full p-4 sm:p-6 md:p-8'>
										<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600' />
										<div className='flex-1 flex items-center justify-center'>
											<div className='rounded-full bg-white p-6 sm:p-8 md:p-10 shadow-lg'>
												<SiSpring
													className='text-6xl sm:text-7xl md:text-8xl text-green-500'
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
								colors={["#dc2626", "#ef4444", "#f87171"]}
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
									<h3 className='w-full text-lg sm:text-xl md:text-2xl font-bold text-center py-2 sm:py-3 md:py-4 text-white bg-red-600'>
										Keycloak
									</h3>
									<div className='flex flex-col h-full p-4 sm:p-6 md:p-8'>
										<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600' />
										<div className='flex-1 flex items-center justify-center'>
											<div className='rounded-full bg-white p-6 sm:p-8 md:p-10 shadow-lg'>
												<SiKeycloak
													className='text-6xl sm:text-7xl md:text-8xl text-red-600'
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
								colors={["#7c3aed", "#c084fc", "#e9d5ff"]}
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
									<h3 className='w-full text-lg sm:text-xl md:text-2xl font-bold text-center py-2 sm:py-3 md:py-4 text-white bg-violet-600'>
										OAuth2
									</h3>
									<div className='flex flex-col h-full p-4 sm:p-6 md:p-8'>
										<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600' />
										<div className='flex-1 flex items-center justify-center'>
											<div className='rounded-full bg-white p-6 sm:p-8 md:p-10 shadow-lg'>
												<Image
													unoptimized
													src='https://i0.wp.com/www.omnidefend.com/wp-content/uploads/2022/03/0Auth_Trans.png?fit=1014%2C676&ssl=1'
													alt='OAuth2 Logo'
													width={80}
													height={80}
												/>
											</div>
										</div>
									</div>
								</div>
							</ColorBends>
						</Card>

						<Card>
							<ColorBends
								colors={["#22c55e", "#4ade80", "#86efac"]}
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
									<h3 className='w-full text-lg sm:text-xl md:text-2xl font-bold text-center py-2 sm:py-3 md:py-4 text-white bg-green-500'>
										Spring Data JPA
									</h3>
									<div className='flex flex-col h-full p-4 sm:p-6 md:p-8'>
										<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600' />
										<div className='flex-1 flex items-center justify-center'>
											<div className='rounded-full bg-white p-6 sm:p-8 md:p-10 shadow-lg'>
												<SiSpringboot
													className='text-6xl sm:text-7xl md:text-8xl text-green-600'
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
								colors={["#ea580c", "#fb923c", "#fdba74"]}
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
									<h3 className='w-full text-lg sm:text-xl md:text-2xl font-bold text-center py-2 sm:py-3 md:py-4 text-white bg-orange-600'>
										Java
									</h3>
									<div className='flex flex-col h-full p-4 sm:p-6 md:p-8'>
										<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600' />
										<div className='flex-1 flex items-center justify-center'>
											<div className='rounded-full bg-white p-6 sm:p-8 md:p-10 shadow-lg'>
												<RiJavaFill
													className='text-6xl sm:text-7xl md:text-8xl text-orange-600'
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
								colors={["#8b5cf6", "#a78bfa", "#ddd6fe"]}
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
									<h3 className='w-full text-lg sm:text-xl md:text-2xl font-bold text-center py-2 sm:py-3 md:py-4 text-white bg-purple-600'>
										JWT
									</h3>
									<div className='flex flex-col h-full p-4 sm:p-6 md:p-8'>
										<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600' />
										<div className='flex-1 flex items-center justify-center'>
											<div className='rounded-full bg-white p-6 sm:p-8 md:p-10 shadow-lg'>
												<div className='text-6xl sm:text-7xl md:text-8xl'>
													<Image
														unoptimized
														src='https://cdn.worldvectorlogo.com/logos/jwt-3.svg'
														alt='JWT Logo'
														width={100}
														height={100}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</ColorBends>
						</Card>

						<Card>
							<ColorBends
								colors={["#0369a1", "#0284c7", "#38bdf8"]}
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
									<h3 className='w-full text-lg sm:text-xl md:text-2xl font-bold text-center py-2 sm:py-3 md:py-4 text-white bg-sky-600'>
										PostgreSQL
									</h3>
									<div className='flex flex-col h-full p-4 sm:p-6 md:p-8'>
										<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600' />
										<div className='flex-1 flex items-center justify-center'>
											<div className='rounded-full bg-white p-6 sm:p-8 md:p-10 shadow-lg'>
												<SiPostgresql
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
								colors={["#0ea5e9", "#06b6d4", "#22d3ee"]}
								rotation={8}
								speed={0.27}
								scale={1.05}
								frequency={1.05}
								warpStrength={1.1}
								mouseInfluence={0.6}
								parallax={0.42}
								noise={0.05}
								transparent>
								<div className='flex flex-col h-full rounded-3xl overflow-hidden'>
									<h3 className='w-full text-lg sm:text-xl md:text-2xl font-bold text-center py-2 sm:py-3 md:py-4 text-white bg-[#4479a1]'>
										MySQL
									</h3>
									<div className='flex flex-col h-full p-4 sm:p-6 md:p-8'>
										<div className='w-full h-0.5 bg-gray-300 dark:bg-gray-600' />
										<div className='flex-1 flex items-center justify-center'>
											<div className='rounded-full bg-white p-6 sm:p-8 md:p-10 shadow-lg'>
												<div className='text-6xl sm:text-7xl md:text-8xl'>
													<Image
														unoptimized
														src='https://www.techspot.com/images2/downloads/topdownload/2020/01/2020-01-28-ts3_thumbs-c3e.png'
														alt='MySQL Logo'
														width={100}
														height={100}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</ColorBends>
						</Card>
					</CardSwap>
				</div>
			</section>
			{/* Backend Technologies Modal */}
			{showBackendModal && (
				<div
					className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md transition-all duration-300'
					onClick={() => setShowBackendModal(false)}>
					<div
						className='rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/30 transform transition-all duration-300 backdrop-blur-xl bg-white/10 dark:bg-black/20 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
						style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
							backgroundRepeat: "repeat",
						}}
						onClick={(e) => e.stopPropagation()}>
						{/* Header with Gradient */}
						<div className='bg-linear-to-r from-green-500/30 to-emerald-500/30 p-8 flex items-center justify-between relative overflow-hidden'>
							<div className='relative z-10'>
								<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white'>
									Backend Tech Stack
								</h2>
								<p className='text-white/90 text-sm sm:text-base mt-2'>
									Server-side technologies & frameworks
								</p>
							</div>
							{/* Close Button */}
							<button
								onClick={() => setShowBackendModal(false)}
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
								{/* Spring Boot */}
								<div className='flex items-center gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40 group cursor-pointer'>
									<div className='text-5xl sm:text-6xl shrink-0 text-green-600 group-hover:scale-110 transition-transform'>
										<SiSpringboot aria-hidden />
									</div>
									<div className='flex-1'>
										<h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
											Spring Boot
										</h3>
										<p className='text-white/70 text-sm sm:text-base'>
											Enterprise-grade framework for building scalable Java
											applications
										</p>
									</div>
								</div>

								{/* Java */}
								<div className='flex items-center gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40 group cursor-pointer'>
									<div className='text-5xl sm:text-6xl shrink-0 text-orange-600 group-hover:scale-110 transition-transform'>
										<RiJavaFill aria-hidden />
									</div>
									<div className='flex-1'>
										<h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
											Java
										</h3>
										<p className='text-white/70 text-sm sm:text-base'>
											Object-oriented language for robust backend development
										</p>
									</div>
								</div>

								{/* PostgreSQL */}
								<div className='flex items-center gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40 group cursor-pointer'>
									<div className='text-5xl sm:text-6xl shrink-0 text-blue-600 group-hover:scale-110 transition-transform'>
										<SiPostgresql aria-hidden />
									</div>
									<div className='flex-1'>
										<h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
											PostgreSQL
										</h3>
										<p className='text-white/70 text-sm sm:text-base'>
											Powerful relational database with advanced features
										</p>
									</div>
								</div>

								{/* Spring Security */}
								<div className='flex items-center gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40 group cursor-pointer'>
									<div className='text-5xl sm:text-6xl shrink-0 text-green-700 group-hover:scale-110 transition-transform'>
										<SiSpring aria-hidden />
									</div>
									<div className='flex-1'>
										<h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
											Spring Security
										</h3>
										<p className='text-white/70 text-sm sm:text-base'>
											Framework for authentication and authorization
										</p>
									</div>
								</div>

								{/* JWT */}
								<div className='flex items-center gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40 group cursor-pointer'>
									<div className='text-5xl sm:text-6xl shrink-0 group-hover:scale-110 transition-transform'>
										<img
											src='https://cdn.worldvectorlogo.com/logos/jwt-3.svg'
											alt='JWT'
											className='h-16 w-16 object-cover transition-transform group-hover:scale-110'
										/>
									</div>
									<div className='flex-1'>
										<h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
											JWT (JSON Web Token)
										</h3>
										<p className='text-white/70 text-sm sm:text-base'>
											Stateless authentication mechanism for secure APIs
										</p>
									</div>
								</div>

								{/* OAuth2 */}
								<div className='flex items-center gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40 group cursor-pointer'>
									<div className='text-5xl sm:text-6xl shrink-0 group-hover:scale-110 transition-transform'>
										<img
											src='https://i0.wp.com/www.omnidefend.com/wp-content/uploads/2022/03/0Auth_Trans.png?fit=1014%2C676&ssl=1'
											alt='OAuth2'
											className='h-16 w-16 object-cover transition-transform group-hover:scale-110'
										/>
									</div>
									<div className='flex-1'>
										<h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
											OAuth2
										</h3>
										<p className='text-white/70 text-sm sm:text-base'>
											Industry-standard authorization protocol
										</p>
									</div>
								</div>

								{/* Keycloak */}
								<div className='flex items-center gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40 group cursor-pointer'>
									<div className='text-5xl sm:text-6xl shrink-0 text-red-600 group-hover:scale-110 transition-transform'>
										<SiKeycloak aria-hidden />
									</div>
									<div className='flex-1'>
										<h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
											Keycloak
										</h3>
										<p className='text-white/70 text-sm sm:text-base'>
											Identity and access management platform
										</p>
									</div>
								</div>

								{/* MySQL */}
								<div className='flex items-center gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40 group cursor-pointer'>
									<div className='text-5xl sm:text-6xl shrink-0 group-hover:scale-110 transition-transform'>
										<img
											src='https://www.techspot.com/images2/downloads/topdownload/2020/01/2020-01-28-ts3_thumbs-c3e.png'
											alt='MySQL'
											className='h-16 w-16 object-cover transition-transform group-hover:scale-110'
										/>
									</div>
									<div className='flex-1'>
										<h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
											MySQL
										</h3>
										<p className='text-white/70 text-sm sm:text-base'>
											Reliable relational database management system
										</p>
									</div>
								</div>

								{/* Spring Data JPA */}
								<div className='flex items-center gap-6 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-white/40 group cursor-pointer'>
									<div className='text-5xl sm:text-6xl shrink-0 group-hover:scale-110 transition-transform'>
										<img
											src='https://huongdanjava.com/wp-content/uploads/2022/02/spring-data.png'
											alt='Spring Data JPA'
											className='h-16 w-16 object-cover transition-transform group-hover:scale-110'
										/>
									</div>
									<div className='flex-1'>
										<h3 className='text-lg sm:text-xl font-bold text-white mb-2'>
											Spring Data JPA
										</h3>
										<p className='text-white/70 text-sm sm:text-base'>
											Data access abstraction for database operations
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
