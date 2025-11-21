/** @format */

"use client";

import React from "react";
import Link from "next/link";
import {
	ScrollVelocityContainer,
	ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import ProjectCardPage from "@/src/components/projectCard/page";
import { InteractiveHoverButton } from "@/src/components/ui/interactive-hover-button";
import CircularGallery from "@/src/components/CircularGallery";
import { useTranslation } from "@/src/hooks/useTranslation";
import { motion } from "motion/react";

export default function ProjectPage() {
	const { t } = useTranslation("common");

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
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6 }}
					className='relative z-10 mx-auto w-11/12'>
					<p className='font-bold tracking-tighter text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-start'>
						{t("projectsDev.title")}{" "}
					</p>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className='mt-6 text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300'>
						<span className='font-bold text-[#ff1349]'>
							❋{t("projectsDev.note")}❋{" "}
						</span>
						{t("projectsDev.description")}
					</motion.p>
				</motion.div>
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
				<div className='w-full flex justify-center'>
					<p className='relative z-10 font-extrabold tracking-tighter text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-center py-5 max-w-4xl'>
						{t("projectsArt.subtitle")}{" "}
						<span className='text-[#ff1349]'>
							{t("projectsArt.subtitleColorful")}
						</span>
					</p>
				</div>
				<div className='relative z-10 w-11/12 mx-auto flex justify-center py-5 items-center gap-4'>
					<Link href='/art-portfolio' target='_blank' rel='noopener noreferrer'>
						<InteractiveHoverButton>
							{t("projectsArt.explore")}
						</InteractiveHoverButton>
					</Link>
				</div>
			</section>
		</>
	);
}
