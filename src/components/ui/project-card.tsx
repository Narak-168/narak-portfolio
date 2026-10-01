/** @format */

"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/data/portfolio-data";
import { useTranslation } from "@/hooks/useTranslation";
import { Github, ExternalLink, Eye, Terminal, Palette } from "lucide-react";
import { motion } from "motion/react";

interface ProjectCardProps {
	project: Project;
	onSelect: (project: Project) => void;
	index: number;
}

export function ProjectCard({ project, onSelect, index }: ProjectCardProps) {
	const { t } = useTranslation();

	const renderStatusBadge = () => {
		if (!project.statusTag) return null;
		if (project.statusTag === "Production") {
			return (
				<span className='inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 backdrop-blur-md shadow-xs'>
					<span className='h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse' />
					Production
				</span>
			);
		}
		if (project.statusTag === "Local") {
			return (
				<span className='inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-sky-500/15 text-sky-700 dark:text-sky-400 border border-sky-500/30 backdrop-blur-md shadow-xs'>
					<span className='h-1.5 w-1.5 rounded-full bg-sky-500' />
					Local
				</span>
			);
		}
		if (project.statusTag === "Console") {
			return (
				<span className='inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 backdrop-blur-md shadow-xs'>
					<Terminal className='w-3 h-3 text-amber-500' />
					Console
				</span>
			);
		}
		if (project.statusTag === "UI/UX Design") {
			return (
				<span className='inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-500/15 text-purple-700 dark:text-purple-400 border border-purple-500/30 backdrop-blur-md shadow-xs'>
					<Palette className='w-3 h-3 text-purple-500' />
					UI/UX
				</span>
			);
		}
		return null;
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
			className='group relative rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/70 overflow-hidden shadow-xs hover:shadow-xl hover:shadow-[#a7f175]/10 hover:border-[#a7f175]/50 dark:hover:border-[#a7f175]/50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between'>
			<div>
				{/* Image Preview Container */}
				<div className='relative h-56 sm:h-64 w-full bg-zinc-100 dark:bg-zinc-950/80 overflow-hidden flex items-center justify-center border-b border-zinc-100 dark:border-zinc-800/80'>
					<Image
						src={project.previewImage}
						alt={project.title}
						fill
						className='object-contain p-6 group-hover:scale-105 transition-transform duration-500 ease-out'
					/>

					{/* Badges Container */}
					<div className='absolute top-3 left-3 z-10 flex flex-wrap items-center gap-1.5'>
						<span className='px-2.5 py-1 rounded-full text-[11px] font-medium font-mono bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/80 shadow-xs'>
							{project.category}
						</span>
						{renderStatusBadge()}
					</div>

					{/* Quick overlay click to open details */}
					<button
						onClick={() => onSelect(project)}
						className='absolute inset-0 z-10 w-full h-full cursor-pointer focus:outline-none'
						aria-label={`View details for ${project.title}`}
					/>
				</div>

				{/* Card Body */}
				<div className='p-6'>
					<div className='flex items-start justify-between gap-2 mb-2'>
						<h3 className='text-xl font-bold text-zinc-900 dark:text-white tracking-tight group-hover:text-[#3a7516] dark:group-hover:text-[#a7f175] transition-colors'>
							{project.title}
						</h3>
					</div>

					<p className='text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed mb-4'>
						{project.shortDescription}
					</p>

					{/* Technologies Tags */}
					<div className='flex flex-wrap gap-1.5 mb-6'>
						{project.technologies.map((tech, idx) => (
							<span
								key={idx}
								className='px-2.5 py-0.5 rounded-md text-[11px] font-medium font-mono bg-zinc-100 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/50'>
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>

			{/* Card Footer: Action Buttons */}
			<div className='px-6 pb-6 pt-2 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between gap-2'>
				<div className='flex items-center gap-2'>
					{project.githubUrl && (
						<a
							href={project.githubUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors border border-zinc-200/80 dark:border-zinc-700/70 hover:border-[#ff5757]/60'
							title='View Source Code'>
							<Github className='w-3.5 h-3.5' />
							<span>{t("projects.sourceCode")}</span>
						</a>
					)}
					{project.liveUrl && project.projectType === "uxui" ?
						<a
							href={project.liveUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-purple-700 dark:text-purple-400 bg-purple-500/10 hover:bg-purple-500/20 transition-colors border border-purple-500/30'
							title='Figma Prototype'>
							<Palette className='w-3.5 h-3.5' />
							<span>Figma</span>
						</a>
					: project.liveUrl && project.statusTag !== "Console" ?
						<a
							href={project.liveUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#3a7516] dark:text-[#a7f175] hover:bg-[#a7f175]/15 dark:hover:bg-[#a7f175]/10 transition-colors border border-[#a7f175]/40'
							title='Open Live Demo'>
							<ExternalLink className='w-3.5 h-3.5' />
							<span>{t("projects.liveDemo")}</span>
						</a>
					: null}
				</div>

				<button
					onClick={() => onSelect(project)}
					className='inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group/btn cursor-pointer'
					title='View Full Project Details'>
					<Eye className='w-3.5 h-3.5 text-zinc-500 group-hover/btn:text-[#ff5757]' />
					<span>{t("projects.details")}</span>
				</button>
			</div>
		</motion.div>
	);
}
