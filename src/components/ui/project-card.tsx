/** @format */

"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/data/portfolio-data";
import { ChevronRight } from "lucide-react";

interface ProjectCardProps {
	project: Project;
	onSelect: (project: Project) => void;
}

// Plain element on purpose: per-card in-view animations re-trigger while the carousel scrolls
export function ProjectCard({ project, onSelect }: ProjectCardProps) {
	return (
		<article
			className='group relative shrink-0 snap-start w-[85vw] max-w-[400px] sm:w-[400px] flex flex-col tile-gray p-6 sm:p-7 pb-16 sm:pb-16 overflow-hidden'>
			{/* Whole card opens the detail view */}
			<button
				onClick={() => onSelect(project)}
				className='absolute inset-0 z-20 rounded-[28px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]'
				aria-label={`View details for ${project.title}`}
			/>

			{/* Visual */}
			<div className='relative mb-7 w-full aspect-[842/595] rounded-2xl overflow-hidden'>
				<Image
					src={project.previewImage}
					alt={project.title}
					fill
					sizes='(min-width: 640px) 400px, 85vw'
					className='object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]'
				/>
			</div>

			{/* Copy */}
			<p className='text-sm font-semibold text-[#0066cc] dark:text-[#2997ff]'>
				{project.category}
			</p>
			<h3 className='mt-2 text-[26px] sm:text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1d1d1f] dark:text-[#f5f5f7]'>
				{project.title}
			</h3>
			<p className='mt-3 text-[15px] leading-snug text-[#1d1d1f] dark:text-[#f5f5f7]/90 line-clamp-3'>
				{project.shortDescription}
			</p>

			{/* Corner affordance */}
			<span
				aria-hidden='true'
				className='absolute bottom-5 right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#0071e3] text-white transition-transform duration-300 group-hover:scale-110'>
				<ChevronRight className='w-5 h-5' strokeWidth={2.5} />
			</span>
		</article>
	);
}
