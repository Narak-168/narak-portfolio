/** @format */

"use client";

import React from "react";
import GridBackground from "@/src/components/gridBackground/page";
import {
	ScrollVelocityContainer,
	ScrollVelocityRow,
} from "@/src/components/ui/scroll-based-velocity";
import { useTranslation } from "@/hooks/useTranslation";
import Hero from "@/components/homePage/heroPage";
import About from "@/components/aboutPage/aboutPage";
import ProjectPage from "@/components/projectsPage/project-page";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function HomePage() {
	const { t, locale, mounted } = useTranslation("common");

	if (!mounted) {
		return null;
	}
	return (
		<main
			className={`p-5 relative ${locale === "km" ? "font-khmer" : ""}`}
			key={locale}>
			<ScrollProgress className='top-0' />
			<GridBackground />
			{/* Home Section */}
			<section id='home'>
				<Hero />
			</section>
			{/* Scroll Velocity - Below Content Full Width */}
			<div className='relative flex items-center justify-center overflow-hidden py-10 -mx-5'>
				<ScrollVelocityContainer className='text-3xl font-bold md:text-4xl w-full gap-4 flex flex-col'>
					<ScrollVelocityRow
						baseVelocity={20}
						direction={1}
						className='text-white -rotate-1 bg-[#52edb5] py-3 sm:py-4 md:py-5 lg:py-6'>
						{t("hero.webDevelopment")}
					</ScrollVelocityRow>
					<ScrollVelocityRow
						baseVelocity={20}
						direction={-1}
						className='text-white rotate-3 bg-[#feb9b8] py-3 sm:py-4 md:py-5 lg:py-6'>
						{t("hero.education")}
					</ScrollVelocityRow>
				</ScrollVelocityContainer>
			</div>
			{/* About Section */}
			<section id='about'>
				<About />
			</section>
			{/* Projects Section */}
			<section id='project'>
				<ProjectPage />
			</section>
		</main>
	);
}
