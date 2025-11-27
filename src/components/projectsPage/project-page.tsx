/** @format */

"use client";

import Link from "next/link";
import {
	ScrollVelocityContainer,
	ScrollVelocityRow,
} from "@/src/components/ui/scroll-based-velocity";
import ProjectCardPage from "@/components/projectCard/page";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import CircularGallery from "@/components/CircularGallery";
import { useTranslation } from "@/hooks/useTranslation";
import { useState } from "react";

export default function ProjectPage() {
	const { t } = useTranslation("common");
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<>
			{/* Projects Section */}
			<section className='relative flex items-center justify-center overflow-hidden py-20 -mx-5'>
				<ScrollVelocityContainer className='text-3xl font-bold md:text-4xl w-full gap-4 flex flex-col'>
					<ScrollVelocityRow
						baseVelocity={20}
						direction={1}
						className='text-black z-20 bg-[#a7f175] py-3 sm:py-4 md:py-5 lg:py-6'>
						{t("projectsDev.exploreMoreProjects") || "EXPLORE MY PROJECTS ✧˖°."}
					</ScrollVelocityRow>
				</ScrollVelocityContainer>
			</section>
			{/*  */}
			<section>
				<div className='relative z-10 mx-auto w-11/12'>
					<p className='font-bold tracking-tighter text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-start'>
						{t("projectsDev.title")}{" "}
					</p>
					<p className='mt-6 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300'>
						<span className='font-bold text-[#ff1349]'>
							❋{t("projectsDev.note")}❋{" "}
						</span>
						{t("projectsDev.description")}
					</p>
				</div>
				<div>
					<ProjectCardPage />
				</div>
				<div className='relative z-10 start-0 w-11/12 mx-auto flex justify-start py-5 items-center gap-4'>
					<Link
						href='https://github.com/Narak-168'
						target='_blank'
						rel='noopener noreferrer'>
						<InteractiveHoverButton>
							{t("projectsDev.exploreMore")}
						</InteractiveHoverButton>
					</Link>
				</div>
			</section>
			<section>
				<div className='relative z-10 mx-auto w-11/12 py-5'>
					<p className='font-bold tracking-tighter text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-start py-5'>
						{t("projectsArt.title")}
					</p>
					<p className='mt-6 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300'>
						<span className='font-bold text-[#ff1349]'>
							❋{t("projectsDev.note")}❋{" "}
						</span>
						{t("projectsArt.subtitle1")}
					</p>{" "}
					<div className='flex items-center -mx-5'>
						<div className='w-screen h-px bg-purple-500 my-4 start-0'></div>
						<span className='font-bold text-[#ff1349] ml-1'>❋❋ </span>
					</div>
				</div>
			</section>
			<section className='w-full mx-auto'>
				<div style={{ height: "600px", position: "relative" }}>
					<CircularGallery
						bend={3}
						textColor='#ffffff'
						borderRadius={0.01}
						scrollEase={0.02}
					/>
				</div>

				<div className='relative z-10 w-11/12 mx-auto flex justify-center py-5 items-center gap-4'>
					<Link href='#' target='_blank' rel='noopener noreferrer'>
						<InteractiveHoverButton>
							{t("projectsArt.explore")}
						</InteractiveHoverButton>
					</Link>
				</div>
			</section>

			{/* UX/UI Design Section */}
			<section>
				<div className='relative z-10 mx-auto w-11/12 py-5'>
					<p className='font-bold tracking-tighter text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-start py-5'>
						{t("projectUXUI.title")}
					</p>
					<p className='mt-6 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300'>
						<span className='font-bold text-[#ff1349]'>
							❋{t("projectsDev.note")}❋{" "}
						</span>
						{t("projectUXUI.subtitle")}
					</p>{" "}
					<div className='flex items-center -mx-5'>
						<div className='w-screen h-px bg-[#a7f175] my-4 start-0'></div>
					</div>
				</div>
				<div
					className='overflow-x-auto py-12 md:py-16 px-4 md:px-8 lg:px-16 -mx-5 [&::-webkit-scrollbar]:hidden scroll-smooth'
					id='uxui-scroll-container'>
					<div className='flex gap-4 sm:gap-6 md:gap-8 min-w-max pl-5'>
						{[
							{
								link: "https://www.figma.com/design/yMUt0IWhuZurDVpXdERXHi/exSTAD?node-id=2890-56322&t=ZORtBD7i7Htec1Hz-1",
							},
							{
								link: "https://www.figma.com/design/2cUvQDg1h6YZFs2QQwxapX/Taskify-UI-UX?node-id=0-1&t=qfcOa5PRaIRnWIQw-1",
							},
							{
								link: "https://www.figma.com/design/qqCQtagVQskj6os5rPMJY6/Final-Project?node-id=0-1&t=HJgUFt43UuEvazyI-1",
							},
							{
								link: "https://www.figma.com/design/Al9waELCy5mwDx8CjJiOAR/Dambaul-Mini-Project-Leng-Narak?node-id=1-49&t=Bv461p4E1AHM70rD-1",
							},
							{
								link: "https://www.figma.com/design/bYnXpMbnKL3VjhY43A792V/ACLEDA-Cloning-G02?node-id=0-1&t=mP9FQzIhSwEUCPC1-1",
							},
						].map((project, index) => {
							const projectData = t(`projectUXUI.projects.${index}`, {
								returnObjects: true,
							}) as { title: string; description: string };
							return (
								<div
									key={index}
									className='bg-gray-100 dark:bg-gray-950 flex flex-col w-[45vw] min-w-[400px] max-w-[600px] h-96 group relative overflow-hidden items-start p-3 border border-gray-200 dark:border-white/20 rounded'
									style={{
										backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
										backgroundRepeat: "repeat",
									}}>
									{/* Animated borders */}
									<span className='absolute top-0 left-0 w-0 h-0.5 bg-[#ff1349] group-hover:w-full transition-all duration-500 ease-out rounded-tl-sm z-20'></span>
									<span className='absolute bottom-0 right-0 w-0 h-0.5 bg-[#ff1349] group-hover:w-full transition-all duration-500 ease-out rounded-br-sm z-20'></span>
									<span className='absolute bottom-0 left-0 w-0.5 h-0 bg-[#ff1349] group-hover:h-full transition-all duration-500 ease-out delay-500 rounded-bl-sm z-20'></span>
									<span className='absolute top-0 right-0 h-0 w-0.5 bg-[#ff1349] group-hover:h-full transition-all duration-500 ease-out delay-500 rounded-tr-sm z-20'></span>

									{/* Content */}
									<div className='relative z-10 p-5 flex flex-col items-start'>
										<h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl group-hover:text-[#ff1349] dark:group-hover:text-[#ff1349] font-bold text-gray-900 dark:text-white text-start'>
											{projectData.title}
										</h3>
										<p className='text-base text-gray-800 dark:text-gray-300 text-start mt-2'>
											{projectData.description
												.split(" & ")
												.map((line: string, i: number, arr: string[]) =>
													i < arr.length - 1 ? (
														<>
															{line} & <br />
														</>
													) : (
														line
													)
												)}
										</p>
									</div>

									{/* Button */}
									<div className='absolute bottom-4 p-3'>
										<Link
											href={project.link}
											target='_blank'
											rel='noopener noreferrer'>
											<InteractiveHoverButton>
												{t("projectUXUI.viewDesign")}
											</InteractiveHoverButton>
										</Link>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* Custom Scroll Indicator */}
				<div className='flex justify-center gap-3 sm:pt-3 sm:pb-6 pt-6 pb-12 z-10 relative'>
					{[0, 1, 2, 3].map((index) => (
						<button
							key={index}
							onClick={() => {
								const container = document.getElementById(
									"uxui-scroll-container"
								);
								if (container) {
									const firstCard = container.querySelector(
										'div[class*="w-[45vw]"]'
									) as HTMLElement;
									if (firstCard) {
										const cardWidth = firstCard.offsetWidth;
										const gap = parseInt(getComputedStyle(container).gap) || 32;
										const scrollAmount = (cardWidth + gap) * index;
										container.scrollTo({
											left: scrollAmount,
											behavior: "smooth",
										});
										setActiveIndex(index);
									}
								}
							}}
							className={`w-3 h-3 rounded-full hover:scale-125 transition-all duration-300 cursor-pointer ${
								activeIndex === index
									? "bg-[#ff1349]"
									: "bg-gray-400 dark:bg-gray-600 hover:bg-[#ff1349]"
							}`}
							aria-label={`Scroll to project ${index + 1}`}
						/>
					))}
				</div>
			</section>
		</>
	);
}
