/** @format */

"use client";

import React, { useState, useMemo } from "react";
import { Project, projectsData } from "@/data/portfolio-data";
import { ProjectCard } from "@/components/ui/project-card";
import { ProjectDetailModal } from "@/components/modals/project-detail-modal";
import { useTranslation } from "@/hooks/useTranslation";
import { FolderGit2, ArrowUpRight } from "lucide-react";

const itemKeyMap: Record<string, string> = {
	exstad: "exstad",
	taskify: "taskify",
	techdeal: "techdeal",
	"mobile-apis": "mobileApis",
	"product-inventory": "productInventory",
	"personal-portfolio": "personalPortfolio",
	"exstad-uxui": "exstadUxui",
	"taskify-uxui": "taskifyUxui",
	"techdeal-uxui": "techdealUxui",
	"dambaul-uxui": "dambaulUxui",
	"acleda-uxui": "acledaUxui",
};

export function ProjectsSection() {
	const { t } = useTranslation();
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [activeFilter, setActiveFilter] = useState("all");

	const localizedProjects = useMemo(() => {
		return projectsData.map((project) => {
			const itemKey = itemKeyMap[project.id] || project.id;

			const translatedTitle = t(`projects.items.${itemKey}.title`);
			const translatedCategory = t(`projects.items.${itemKey}.category`);
			const translatedShort = t(`projects.items.${itemKey}.shortDescription`);
			const translatedLong = t(`projects.items.${itemKey}.longDescription`);
			const translatedFeatures = t(`projects.items.${itemKey}.features`, {
				returnObjects: true,
			});

			return {
				...project,
				title:
					translatedTitle !== `projects.items.${itemKey}.title` ?
						translatedTitle
					:	project.title,
				category:
					translatedCategory !== `projects.items.${itemKey}.category` ?
						translatedCategory
					:	project.category,
				shortDescription:
					translatedShort !== `projects.items.${itemKey}.shortDescription` ?
						translatedShort
					:	project.shortDescription,
				longDescription:
					translatedLong !== `projects.items.${itemKey}.longDescription` ?
						translatedLong
					:	project.longDescription,
				features:
					Array.isArray(translatedFeatures) ? translatedFeatures : (
						project.features
					),
			};
		});
	}, [t]);

	const categories = [
		{
			id: "all",
			label: t("projects.filterAll"),
			count: localizedProjects.length,
		},
		{
			id: "coding",
			label: t("projects.filterCoding"),
			count: localizedProjects.filter((p) => p.projectType === "coding").length,
		},
		{
			id: "uxui",
			label: t("projects.filterUxui"),
			count: localizedProjects.filter((p) => p.projectType === "uxui").length,
		},
	];

	const filteredProjects = localizedProjects.filter((p) => {
		if (activeFilter === "all") return true;
		if (activeFilter === "coding") return p.projectType === "coding";
		if (activeFilter === "uxui") return p.projectType === "uxui";
		return true;
	});

	// If selected project is open, keep its localized version updated
	const currentSelectedProject = useMemo(() => {
		if (!selectedProject) return null;
		return (
			localizedProjects.find((p) => p.id === selectedProject.id) ||
			selectedProject
		);
	}, [selectedProject, localizedProjects]);

	return (
		<section id='projects' className='py-20 sm:py-28 relative'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				{/* Section Header */}
				<div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12'>
					<div>
						<span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#a7f175]/15 text-[#3a7516] dark:text-[#a7f175] border border-[#a7f175]/30 mb-3'>
							<FolderGit2 className='w-3.5 h-3.5 text-[#ff5757]' />
							{t("projects.badge")}
						</span>
						<h2 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white'>
							{t("projects.title")}
						</h2>
						<p className='text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-lg'>
							{t("projects.subtitle")}
						</p>
					</div>

					{/* Category Filter Pills */}
					<div className='flex flex-wrap items-center gap-2 self-start md:self-end bg-zinc-100 dark:bg-zinc-900/90 p-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800'>
						{categories.map((cat) => (
							<button
								key={cat.id}
								onClick={() => setActiveFilter(cat.id)}
								className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg transition-all cursor-pointer ${
									activeFilter === cat.id ?
										"bg-[#a7f175] text-zinc-950 shadow-xs font-bold"
									:	"text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white font-medium"
								}`}>
								<span>{cat.label}</span>
								<span
									className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono leading-none ${
										activeFilter === cat.id ?
											"bg-zinc-950/20 text-zinc-950 font-bold"
										:	"bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
									}`}>
									{cat.count}
								</span>
							</button>
						))}
					</div>
				</div>

				{/* Projects Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
					{filteredProjects.map((project, idx) => (
						<ProjectCard
							key={project.id}
							project={project}
							index={idx}
							onSelect={(p) => setSelectedProject(p)}
						/>
					))}
				</div>

				{/* GitHub Explore Prompt */}
				<div className='mt-12 text-center'>
					<a
						href='https://github.com/Narak-168'
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors group'>
						<span>{t("projects.seeGithub")}</span>
						<ArrowUpRight className='w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' />
					</a>
				</div>
			</div>

			{/* Project Detail Modal */}
			<ProjectDetailModal
				project={currentSelectedProject}
				isOpen={!!currentSelectedProject}
				onClose={() => setSelectedProject(null)}
			/>
		</section>
	);
}
