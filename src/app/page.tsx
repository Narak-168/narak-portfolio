/** @format */

"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EducationTimeline } from "@/components/sections/education-timeline";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";
import { CVModal } from "@/components/modals/cv-modal";
import { useTranslation } from "@/hooks/useTranslation";

export default function PortfolioPage() {
	const [isCVOpen, setIsCVOpen] = useState(false);
	const { locale } = useTranslation();

	return (
		<div
			className={`min-h-screen flex flex-col bg-white dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] transition-colors duration-200 selection:bg-[#0071e3]/30 selection:text-black dark:selection:text-white ${
				locale === "km" ? "font-khmer" : ""
			}`}>
			{/* Sticky Navigation Bar */}
			<Navbar onOpenCV={() => setIsCVOpen(true)} />

			{/* Main Content Area */}
			<main className='flex-1'>
				<HeroSection onOpenCV={() => setIsCVOpen(true)} />
				<AboutSection />
				<ProjectsSection />
				<SkillsSection />
				<ExperienceSection />
				<EducationTimeline />
				<ContactSection />
			</main>

			{/* Minimal Developer Footer */}
			<Footer />

			{/* Interactive CV Viewer & Download Modal */}
			<CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
		</div>
	);
}
