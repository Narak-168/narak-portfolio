/** @format */

"use client";

import { useEffect, useRef, useState } from "react";
import { useAnimate } from "motion/react";
import {
	SiHtml5,
	SiCss,
	SiJavascript,
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiTailwindcss,
	SiBootstrap,
	SiSpringboot,
	SiPostgresql,
	SiGit,
	SiGithub,
	SiDocker,
	SiFigma,
	SiSketch,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import {
	Server,
	LayoutTemplate,
	PlayCircle,
	GitFork,
	FolderTree,
	Smartphone,
	CheckCheck,
	Component,
	Sparkles,
} from "lucide-react";
import { skillsData } from "@/data/portfolio-data";
import { useTranslation } from "@/hooks/useTranslation";
import { SectionHeader } from "@/components/ui/section-header";
import { TabNav } from "@/components/ui/tab-nav";

type SkillCategory = "frontend" | "backend" | "tools" | "uiux";

export function SkillsSection() {
	const { t } = useTranslation();
	const [activeCategory, setActiveCategory] =
		useState<SkillCategory>("frontend");
	const [shownCategory, setShownCategory] = useState<SkillCategory>("frontend");
	const [panelRef, animate] = useAnimate<HTMLDivElement>();
	const gridRef = useRef<HTMLDivElement>(null);
	const pendingCategory = useRef<SkillCategory>("frontend");
	const isFirstRender = useRef(true);

	// apple.com tabbed gallery: tab moves at once, the old panel fades out,
	// then the new one fades in while the panel height eases to fit it
	const changeCategory = async (id: string) => {
		const next = id as SkillCategory;
		if (next === pendingCategory.current) return;
		pendingCategory.current = next;
		setActiveCategory(next);
		const panel = panelRef.current;
		if (panel) {
			panel.style.height = `${panel.offsetHeight}px`;
			panel.style.overflow = "hidden";
			await animate(panel, { opacity: 0 }, { duration: 0.2, ease: "easeOut" });
		}
		// A newer tab click took over while this one was fading out
		if (pendingCategory.current !== next) return;
		setShownCategory(next);
	};

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		const panel = panelRef.current;
		const grid = gridRef.current;
		if (!panel || !grid) return;
		animate(
			panel,
			{ height: grid.offsetHeight, opacity: 1 },
			{
				height: { duration: 0.9, ease: [0.455, 0.03, 0.515, 0.955] },
				opacity: { duration: 0.3, ease: "easeOut" },
			},
		).then(() => {
			if (pendingCategory.current !== shownCategory) return;
			panel.style.height = "";
			panel.style.overflow = "";
		});
	}, [shownCategory, animate, panelRef]);

	// Adobe XD custom SVG icon
	const AdobeXDIcon = () => (
		<svg
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='w-6 h-6 text-[#FF61F6]'>
			<rect width='18' height='18' x='3' y='3' rx='4' />
			<path d='m7 8 4 8m0-8-4 8' />
			<path d='M14 8h1.5a2.5 2.5 0 0 1 0 5H14v3' />
		</svg>
	);

	const renderSkillIcon = (name: string) => {
		switch (name) {
			case "HTML5":
				return <SiHtml5 className='w-6 h-6 text-[#E34F26]' />;
			case "CSS3":
				return <SiCss className='w-6 h-6 text-[#1572B6]' />;
			case "JavaScript":
				return <SiJavascript className='w-6 h-6 text-[#F7DF1E]' />;
			case "TypeScript":
				return <SiTypescript className='w-6 h-6 text-[#3178C6]' />;
			case "React":
				return <SiReact className='w-6 h-6 text-[#61DAFB]' />;
			case "Next.js":
				return (
					<SiNextdotjs className='w-6 h-6 text-zinc-900 dark:text-white' />
				);
			case "Tailwind CSS":
				return <SiTailwindcss className='w-6 h-6 text-[#06B6D4]' />;
			case "Bootstrap":
				return <SiBootstrap className='w-6 h-6 text-[#7952B3]' />;
			case "Java":
				return <FaJava className='w-6 h-6 text-[#ED8B00]' />;
			case "Spring Boot":
				return <SiSpringboot className='w-6 h-6 text-[#6DB33F]' />;
			case "REST API":
				return <Server className='w-6 h-6 text-emerald-500' />;
			case "PostgreSQL":
				return <SiPostgresql className='w-6 h-6 text-[#4169E1]' />;
			case "Git":
				return <SiGit className='w-6 h-6 text-[#F05032]' />;
			case "GitHub":
				return <SiGithub className='w-6 h-6 text-zinc-900 dark:text-white' />;
			case "Docker":
				return <SiDocker className='w-6 h-6 text-[#2496ED]' />;
			case "Figma":
				return <SiFigma className='w-6 h-6 text-[#F24E1E]' />;
			case "Adobe XD":
				return <AdobeXDIcon />;
			case "Sketch":
				return <SiSketch className='w-6 h-6 text-[#F7B500]' />;
			case "Wireframing":
				return <LayoutTemplate className='w-6 h-6 text-emerald-500' />;
			case "Prototyping":
				return <PlayCircle className='w-6 h-6 text-teal-500' />;
			case "User Flow":
				return <GitFork className='w-6 h-6 text-cyan-500' />;
			case "Sitemap":
				return <FolderTree className='w-6 h-6 text-emerald-500' />;
			case "Responsive Design":
				return <Smartphone className='w-6 h-6 text-teal-500' />;
			case "Usability Testing":
				return <CheckCheck className='w-6 h-6 text-cyan-500' />;
			case "Design Systems":
				return <Component className='w-6 h-6 text-emerald-500' />;
			default:
				return <Sparkles className='w-6 h-6 text-emerald-500' />;
		}
	};

	const categories = [
		{ id: "frontend", label: t("skills.frontend") },
		{ id: "backend", label: t("skills.backend") },
		{ id: "tools", label: t("skills.tools") },
		{ id: "uiux", label: t("skills.uiux") },
	];

	const allSkills = [
		...skillsData.frontend.map((s) => ({ ...s, group: "Front-end" })),
		...skillsData.backend.map((s) => ({ ...s, group: "Backend" })),
		...skillsData.tools.map((s) => ({ ...s, group: "Tools" })),
		...skillsData.uiux.map((s) => ({ ...s, group: "UI/UX" })),
	];

	const filteredSkills = allSkills.filter((item) => {
		if (shownCategory === "frontend") return item.group === "Front-end";
		if (shownCategory === "backend") return item.group === "Backend";
		if (shownCategory === "tools") return item.group === "Tools";
		if (shownCategory === "uiux") return item.group === "UI/UX";
		return true;
	});

	return (
		<section id='skills' className='section-gray py-24 sm:py-32'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<SectionHeader
					eyebrow={t("skills.badge")}
					title={t("skills.title")}
					subtitle={t("skills.subtitle")}
					className='mb-10 sm:mb-12'
				/>

				{/* Apple-style tab nav */}
				<div className='flex justify-center mb-10 sm:mb-12'>
					<TabNav
						items={categories}
						activeId={activeCategory}
						onChange={changeCategory}
						ariaLabel={t("skills.title")}
					/>
				</div>

				{/* Skills Grid */}
				<div ref={panelRef} role='tabpanel'>
					<div
						ref={gridRef}
						className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4'>
						{filteredSkills.map((skill) => (
							<div
								key={skill.name}
								className='tile p-5 sm:p-6 flex flex-col transition-transform duration-300 hover:scale-[1.02]'>
								{/* App-icon squircle */}
								<div className='h-12 w-12 rounded-[14px] bg-[#f5f5f7] dark:bg-black flex items-center justify-center'>
									{renderSkillIcon(skill.name)}
								</div>

								<h3 className='mt-4 text-base sm:text-lg font-semibold tracking-[-0.015em] text-[#1d1d1f] dark:text-[#f5f5f7]'>
									{skill.name}
								</h3>
								<p className='mt-1 text-xs sm:text-sm leading-relaxed text-[#6e6e73] dark:text-[#86868b] line-clamp-2'>
									{skill.desc}
								</p>

								<p className='mt-auto pt-4 text-xs text-[#86868b]'>
									{skill.group}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
