/** @format */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
	Wrench,
	Sparkles,
} from "lucide-react";
import { skillsData } from "@/data/portfolio-data";
import { useTranslation } from "@/hooks/useTranslation";

type SkillCategory = "all" | "frontend" | "backend" | "tools" | "uiux";

export function SkillsSection() {
	const { t } = useTranslation();
	const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

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
		{ id: "all", label: t("skills.all") },
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
		if (activeCategory === "all") return true;
		if (activeCategory === "frontend") return item.group === "Front-end";
		if (activeCategory === "backend") return item.group === "Backend";
		if (activeCategory === "tools") return item.group === "Tools";
		if (activeCategory === "uiux") return item.group === "UI/UX";
		return true;
	});

	return (
		<section id='skills' className='py-20 sm:py-28 relative'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* Section Header */}
				<div className='text-center max-w-2xl mx-auto mb-12'>
					<span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#a7f175]/15 text-[#3a7516] dark:text-[#a7f175] border border-[#a7f175]/30 mb-3'>
						<Wrench className='w-3.5 h-3.5 text-[#ff5757]' />
						{t("skills.badge")}
					</span>
					<h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white'>
						{t("skills.title")}
					</h2>
					<p className='text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2'>
						{t("skills.subtitle")}
					</p>
				</div>

				{/* Filter Category Tabs */}
				<div className='flex flex-wrap items-center justify-center gap-2 mb-12'>
					{categories.map((cat) => (
						<button
							key={cat.id}
							onClick={() => setActiveCategory(cat.id as SkillCategory)}
							className={`px-4 py-2 rounded-xl text-xs sm:text-sm transition-all cursor-pointer ${
								activeCategory === cat.id ?
									"bg-[#a7f175] text-zinc-950 font-bold shadow-xs"
								:	"bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-800 font-medium"
							}`}>
							{cat.label}
						</button>
					))}
				</div>

				{/* Skills Grid */}
				<motion.div
					layout
					className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
					<AnimatePresence>
						{filteredSkills.map((skill) => (
							<motion.div
								key={skill.name}
								layout
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.25 }}
								className='p-4 sm:p-5 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-[#a7f175]/50 dark:hover:border-[#a7f175]/50 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-[#a7f175]/10 group flex flex-col justify-between'>
								<div>
									<div className='flex items-center justify-between mb-3'>
										<div className='p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-100 dark:border-zinc-700/60 group-hover:scale-110 transition-transform'>
											{renderSkillIcon(skill.name)}
										</div>
										<span className='px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/60'>
											{skill.group}
										</span>
									</div>

									<h3 className='font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 group-hover:text-[#3a7516] dark:group-hover:text-[#a7f175] transition-colors'>
										{skill.name}
									</h3>

									<p className='text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed'>
										{skill.desc}
									</p>
								</div>

								<div className='mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-[10px] font-mono text-zinc-600 dark:text-zinc-400'>
									<span>{t("skills.proficiency")}</span>
									<span className='text-[#3a7516] dark:text-[#a7f175] font-semibold'>
										{t(`skills.levels.${skill.level}`) || skill.level}
									</span>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>
			</div>
		</section>
	);
}
