/** @format */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
	SiReact,
	SiNextdotjs,
	SiTypescript,
	SiTailwindcss,
	SiJavascript,
	SiSpringboot,
	SiDocker,
	SiPostgresql,
	SiHtml5,
	SiCss3,
	SiKeycloak,
	SiSpring,
	SiBootstrap,
} from "react-icons/si";
import { RiJavaFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import {
	IoArrowBackCircleOutline,
	IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { AnimatedGradientText } from "../ui/animated-gradient-text";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import {
	ScrollVelocityContainer,
	ScrollVelocityRow,
} from "@/src/components/ui/scroll-based-velocity";
import GridBackground from "@/src/components/gridBackground/page";
import LogoLoop from "@/src/components/LogoLoop";
import FrontendPage from "@/components/frontendSection/page";
import BackendPage from "@/components/backendSection/page";
import { useTranslation } from "@/hooks/useTranslation";

export default function About() {
	const [activeCard, setActiveCard] = useState("github");
	const { t, locale, mounted } = useTranslation("common");

	if (!mounted) {
		return null;
	}

	const onPrevious = () => {
		setActiveCard((prev) => {
			const cards = ["github", "design", "office"];
			const currentIndex = cards.indexOf(prev);
			return cards[(currentIndex - 1 + cards.length) % cards.length];
		});
	};

	const onNext = () => {
		setActiveCard((prev) => {
			const cards = ["github", "design", "office"];
			const currentIndex = cards.indexOf(prev);
			return cards[(currentIndex + 1) % cards.length];
		});
	};

	return (
		<>
			<section className='relative z-10 px-4 md:px-8 lg:px-16 pb-0'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto'>
					{/* Text Content */}
					<div className='space-y-6 order-1 lg:order-1 z-30 relative items-center'>
						<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  text-gray-900 dark:text-white'>
							{t("about.title")}
						</h2>
						<AnimatedGradientText className='font-bold text-lg sm:text-xl md:text-2xl'>
							{t("about.subtitle")}{" "}
						</AnimatedGradientText>
						<p className='text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed py-5 max-w-2xl'>
							{t("about.description")}
						</p>
						<div className='relative z-10 start-0 flex justify-start items-center gap-4'>
							<Link
								href='https://drive.google.com/file/d/1Uj8j06BBfBAT1G5YVO2r5bGSh0WxhcS-/view?usp=sharing'
								target='_blank'
								rel='noopener noreferrer'>
								<InteractiveHoverButton>View My CV</InteractiveHoverButton>
							</Link>
						</div>
					</div>

					{/* Image */}
					<div
						className='relative order-2 lg:order-2 z-10 -mb-20 md:-mb-24 lg:-mb-32'
						style={{ animation: "rotateImage 20s linear infinite" }}>
						<Image
							unoptimized
							src='/images/Narak-NoBG.PNG'
							alt='Leng Narak - Full Stack Developer'
							width={800}
							height={800}
							className='w-full h-auto'
						/>
					</div>
				</div>
			</section>
			<section className='relative flex items-center justify-center overflow-hidden py-20 -mx-5'>
				<ScrollVelocityContainer className='text-3xl font-bold md:text-4xl w-full gap-4 flex flex-col'>
					<ScrollVelocityRow
						baseVelocity={20}
						direction={1}
						className='text-white z-20 bg-purple-600 py-3 sm:py-4 md:py-5 lg:py-6'>
						{t("hero.aboutMe")}
					</ScrollVelocityRow>
				</ScrollVelocityContainer>
			</section>
			{/* Education Section */}
			<section className='relative pb-20'>
				<div className='absolute inset-0 z-0 opacity-20'>
					<GridBackground />
				</div>
				<div className='relative z-10 w-full'>
					<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white px-4 md:px-8 lg:px-16'>
						{t("academicsBackground.title")}
					</h2>
					<p className='text-center max-w-7xl mx-auto mb-12 md:mb-16 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 px-4 sm:px-6 md:px-8 lg:px-16'>
						{t("academicsBackground.subtitle")}
					</p>

					<div className='overflow-x-auto py-12 md:py-16 px-4 md:px-8 lg:px-16 -mx-5 [&::-webkit-scrollbar]:hidden'>
						<div className='flex gap-4 sm:gap-6 md:gap-8 min-w-max pl-5'>
							{/* Education Card 1 - ISTAD */}
							<div
								className='bg-gray-100 dark:bg-gray-950 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 flex flex-col w-72 sm:w-80 md:w-96 lg:w-[420px] group relative'
								style={{
									backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
									backgroundRepeat: "repeat",
								}}>
								<div
									className='p-4 sm:p-5 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 flex items-center justify-center z-10 bg-linear-to-t from-blue-900/90 to-transparent'
									style={{ backdropFilter: "blur(8px)" }}>
									<h3
										className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center'
										style={{ animation: "textFadeUp 0.5s ease-out" }}>
										Full Stack Web <br /> Development
									</h3>
								</div>
								<div className='relative h-64 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center p-6 sm:p-8 overflow-hidden'>
									<Image
										unoptimized
										src='/images/ISTAD.PNG'
										alt='ISTAD Logo'
										width={300}
										height={300}
										className='object-contain max-w-[85%] max-h-[85%] object-center'
									/>
								</div>
							</div>{" "}
							{/* Education Card 2 - RUPP ITE */}
							<div
								className='bg-gray-100 dark:bg-gray-950 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 flex flex-col w-72 sm:w-80 md:w-96 lg:w-[420px] group relative'
								style={{
									backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
									backgroundRepeat: "repeat",
								}}>
								{" "}
								<div
									className='p-4 sm:p-5 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 flex items-center justify-center z-10 bg-linear-to-t from-red-500/90 to-transparent'
									style={{ backdropFilter: "blur(8px)" }}>
									<h3
										className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center'
										style={{ animation: "textFadeUp 0.5s ease-out" }}>
										Bachelor's Degree <br /> of ITE
									</h3>
								</div>
								<div className='relative h-64 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center p-6 sm:p-8 overflow-hidden'>
									<Image
										unoptimized
										src='/images/RUPP.png'
										alt='RUPP Logo'
										width={300}
										height={300}
										className='object-contain max-w-[85%] max-h-[85%] object-center'
									/>
								</div>
							</div>
							{/* Education Card 3 - RUPP English */}
							<div
								className='bg-gray-100 dark:bg-gray-950 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 flex flex-col w-72 sm:w-80 md:w-96 lg:w-[420px] group relative'
								style={{
									backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
									backgroundRepeat: "repeat",
								}}>
								<div
									className='p-4 sm:p-5 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 flex items-center justify-center z-10 bg-linear-to-t from-[#dfc46a]/90 to-transparent'
									style={{ backdropFilter: "blur(8px)" }}>
									<h3
										className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center'
										style={{ animation: "textFadeUp 0.5s ease-out" }}>
										Upper-Intermediate <br /> Levels in English
									</h3>
								</div>
								<div className='relative h-64 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center p-6 sm:p-8 overflow-hidden'>
									<Image
										unoptimized
										src='/images/RUPP-Eng.png'
										alt='RUPP Logo'
										width={300}
										height={300}
										className='object-contain max-w-[85%] max-h-[85%] object-center'
									/>
								</div>
							</div>
							{/* Education Card 4 - UC */}
							<div
								className='bg-gray-100 dark:bg-gray-950 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 flex flex-col w-72 sm:w-80 md:w-96 lg:w-[420px] group relative'
								style={{
									backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
									backgroundRepeat: "repeat",
								}}>
								<div
									className='p-4 sm:p-5 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 flex items-center justify-center z-10 bg-linear-to-t from-[#dfc46a]/90 to-transparent'
									style={{ backdropFilter: "blur(8px)" }}>
									<h3
										className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center'
										style={{ animation: "textFadeUp 0.5s ease-out" }}>
										Intensive English <br /> Program
									</h3>
								</div>
								<div className='relative h-64 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center p-6 sm:p-8 overflow-hidden'>
									<Image
										unoptimized
										src='/images/UC.png'
										alt='UC Logo'
										width={300}
										height={300}
										className='object-contain max-w-[85%] max-h-[85%] object-center'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Technology Stack Section */}
			<>
				<section className='relative'>
					<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white px-4 md:px-8 lg:px-16'>
						{t("technologyStack.title")}
					</h2>
					<p className='text-center max-w-7xl mx-auto mb-12 md:mb-16 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 px-4 sm:px-6 md:px-8 lg:px-16'>
						{t("technologyStack.subtitle")}
					</p>
					<div
						style={{
							height: "auto",
							position: "relative",
							overflow: "hidden",
						}}>
						<LogoLoop
							logos={[
								{
									node: <SiReact />,
									title: "React",
									href: "https://react.dev",
								},
								{
									node: <SiNextdotjs />,
									title: "Next.js",
									href: "https://nextjs.org",
								},
								{
									node: <SiCss3 />,
									title: "CSS3",
									href: "https://developer.mozilla.org/docs/Web/CSS",
								},
								{
									node: <SiTypescript />,
									title: "TypeScript",
									href: "https://www.typescriptlang.org",
								},
								{
									node: <SiTailwindcss />,
									title: "Tailwind CSS",
									href: "https://tailwindcss.com",
								},
								{
									node: <SiJavascript />,
									title: "JavaScript",
									href: "https://javascript.com",
								},
								{
									node: <RiJavaFill />,
									title: "Java",
									href: "https://www.java.com",
								},
								{
									node: <SiSpringboot />,
									title: "Spring Boot",
									href: "https://spring.io/projects/spring-boot",
								},
								{
									node: <SiDocker />,
									title: "Docker",
									href: "https://www.docker.com",
								},
								{
									node: <SiPostgresql />,
									title: "PostgreSQL",
									href: "https://www.postgresql.org",
								},
								{
									node: <SiHtml5 />,
									title: "HTML5",
									href: "https://developer.mozilla.org/docs/Web/HTML",
								},

								{
									node: <SiKeycloak />,
									title: "Keycloak",
									href: "https://www.keycloak.org",
								},
								{
									node: <SiSpring />,
									title: "Spring Framework",
									href: "https://spring.io/projects/spring-framework",
								},
								{
									node: <FaGithub />,
									title: "GitHub",
									href: "https://github.com",
								},
							]}
							speed={120}
							direction='left'
							logoHeight={48}
							gap={40}
							hoverSpeed={0}
							scaleOnHover
							ariaLabel='Technology partners'
						/>
					</div>
				</section>
				<section className='gap-20 flex flex-col py-20'>
					{/* Frontend Skills Section */}
					<FrontendPage />
					{/* Backend Skills Section */}
					<BackendPage />
				</section>
			</>
			{/* Additional Skills Section */}
			<section className='w-11/12 max-w-7xl mx-auto'>
				<div className='relative flex flex-col py-20'>
					{/* Two Column Layout - Responsive */}
					<div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8'>
						{/* Left: Title + Buttons */}
						<div className='w-full lg:flex-1 flex flex-col justify-between'>
							<div>
								<p className='font-bold tracking-tighter text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-start'>
									{t("technologyStack.additionalSkills.title")}
								</p>
							</div>

							{/* Buttons */}
							<div className='flex gap-3 justify-start mt-8'>
								{/* Previous Button */}
								<motion.button
									className='w-12 h-12 flex items-center justify-center rounded-full cursor-pointer border-2 border-foreground/20 hover:border-foreground/60 transition-all duration-300 group relative overflow-hidden'
									whileHover={{ scale: 1.08 }}
									whileTap={{ scale: 0.95 }}
									onClick={onPrevious}
									aria-label='Previous'>
									<div className='absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
									<div className='relative z-10 flex items-center justify-center text-foreground/70 group-hover:text-foreground transition-colors duration-300'>
										<IoArrowBackCircleOutline className='w-6 h-6' />
									</div>
								</motion.button>

								{/* Next Button */}
								<motion.button
									className='w-12 h-12 flex items-center justify-center rounded-full cursor-pointer border-2 border-foreground/20 hover:border-foreground/60 transition-all duration-300 group relative overflow-hidden'
									whileHover={{ scale: 1.08 }}
									whileTap={{ scale: 0.95 }}
									onClick={onNext}
									aria-label='Next'>
									<div className='absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
									<div className='relative z-10 flex items-center justify-center text-foreground/70 group-hover:text-foreground transition-colors duration-300'>
										<IoArrowForwardCircleOutline className='w-6 h-6' />
									</div>
								</motion.button>
							</div>
						</div>

						{/* Right: Swapping Cards */}
						<div className='w-full lg:flex-1 flex justify-center lg:justify-end'>
							{activeCard === "github" ? (
								<motion.div
									key='github'
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -20 }}
									transition={{ duration: 0.3 }}
									className='bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/20 rounded-2xl p-8 w-full flex flex-col'
									style={{
										backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
									}}>
									<h3 className='text-2xl font-bold text-orange-600 dark:text-orange-400 mb-4'>
										GitHub & Version Control
									</h3>
									<p className='text-gray-700 dark:text-gray-300 mb-6'>
										Proficient in version control and collaborative development
										with Git and GitHub for managing code repositories and team
										projects.
									</p>
									<div className='flex flex-wrap gap-2'>
										{["GitHub", "GitLab", "Version Control"].map((skill) => (
											<span
												key={skill}
												className='px-3 py-1 bg-orange-200 dark:bg-orange-800 text-orange-900 dark:text-orange-100 rounded-full text-sm font-medium'>
												{skill}
											</span>
										))}
									</div>
								</motion.div>
							) : activeCard === "design" ? (
								<motion.div
									key='design'
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -20 }}
									transition={{ duration: 0.3 }}
									className='bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/20 rounded-2xl p-8 w-full flex flex-col'
									style={{
										backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
									}}>
									<h3 className='text-2xl font-bold text-pink-600 dark:text-pink-400 mb-4'>
										Design Tools
									</h3>
									<p className='text-gray-700 dark:text-gray-300 mb-6'>
										Creative design expertise using Canva, Photoshop, and
										Affinity for stunning graphics, UI/UX design, and visual
										content creation.
									</p>
									<div className='flex flex-wrap gap-2'>
										{["Figma", "Canva"].map((skill) => (
											<span
												key={skill}
												className='px-3 py-1 bg-pink-200 dark:bg-pink-800 text-pink-900 dark:text-pink-100 rounded-full text-sm font-medium'>
												{skill}
											</span>
										))}
									</div>
								</motion.div>
							) : (
								<motion.div
									key='office'
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -20 }}
									transition={{ duration: 0.3 }}
									className='bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/20 rounded-2xl p-8 w-full flex flex-col'
									style={{
										backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
									}}>
									<h3 className='text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4'>
										Microsoft Office
									</h3>
									<p className='text-gray-700 dark:text-gray-300 mb-6'>
										Proficiency in Microsoft Office suite including Word, Excel,
										and PowerPoint for professional documentation and
										presentations.
									</p>
									<div className='flex flex-wrap gap-2'>
										{["Word", "Excel", "PowerPoint"].map((skill) => (
											<span
												key={skill}
												className='px-3 py-1 bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100 rounded-full text-sm font-medium'>
												{skill}
											</span>
										))}
									</div>
								</motion.div>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
