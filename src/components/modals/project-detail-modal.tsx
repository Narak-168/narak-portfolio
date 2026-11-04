/** @format */

"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/data/portfolio-data";
import { useTranslation } from "@/hooks/useTranslation";
import {
	X,
	ExternalLink,
	Github,
	CheckCircle2,
	Cpu,
	Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ProjectDetailModalProps {
	project: Project | null;
	isOpen: boolean;
	onClose: () => void;
}

export function ProjectDetailModal({
	project,
	isOpen,
	onClose,
}: ProjectDetailModalProps) {
	const { t, locale } = useTranslation();

	// Close on Escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		if (isOpen) {
			document.body.style.overflow = "hidden";
			window.addEventListener("keydown", handleKeyDown);
		}
		return () => {
			document.body.style.overflow = "auto";
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onClose]);

	if (!isOpen || !project) return null;

	return (
		<AnimatePresence>
			<div
				className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto ${
					locale === "km" ? "font-khmer" : ""
				}`}>
				{/* Backdrop */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={onClose}
					className='fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity'
					aria-hidden='true'
				/>

				{/* Modal Container - Apple macOS Quick Look Sheet */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.95, y: 20 }}
					transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
					className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[28px] bg-white dark:bg-[#1d1d1f] shadow-[0_24px_80px_rgba(0,0,0,0.3)] z-10 custom-scrollbar ${
						locale === "km" ? "font-khmer" : ""
					}`}>
					{/* Close Button - Apple Circular Frosted Disc */}
					<button
						onClick={onClose}
						className='absolute top-5 right-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-white transition-all cursor-pointer backdrop-blur-xl'
						aria-label='Close modal'>
						<X className='w-4 h-4' />
					</button>

					{/* Modal Header / Media Preview */}
					<div className='relative h-64 sm:h-72 w-full bg-black/3 dark:bg-[#0c0c0d] flex items-center justify-center overflow-hidden '>
						<div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10' />
						<Image
							src={project.previewImage}
							alt={project.title}
							fill
							className='object-contain p-6 hover:scale-105 transition-transform duration-500'
							priority
						/>
						<div className='absolute bottom-5 left-7 z-20 text-white'>
							<div className='flex flex-wrap items-center gap-2 mb-2'>
								<span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#0071e3]/20 text-[#2997ff] border border-[#0071e3]/30 backdrop-blur-md'>
									<Sparkles className='w-3 h-3 text-[#bf4800] dark:text-[#f56300]' />
									{project.category}
								</span>
								{project.statusTag && (
									<span className='inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white border border-white/20 backdrop-blur-md'>
										{project.statusTag}
									</span>
								)}
							</div>
							<h3 className='text-2xl sm:text-3xl font-bold tracking-[-0.02em]'>
								{project.title}
							</h3>
						</div>
					</div>

					{/* Modal Body */}
					<div className='p-6 sm:p-8 space-y-6'>
						{/* Overview */}
						<div>
							<h4 className='text-sm font-semibold uppercase tracking-wider text-[#0066cc] dark:text-[#2997ff] mb-2'>
								{t("projects.modalOverview")}
							</h4>
							<p className='text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base'>
								{project.longDescription}
							</p>
						</div>

						{/* Quick Stats Grid */}
						{project.stats && (
							<div className='grid grid-cols-2 sm:grid-cols-4 gap-3 p-5 rounded-2xl bg-[#f5f5f7] dark:bg-black'>
								{project.stats.map((s, idx) => (
									<div key={idx} className='text-center'>
										<p className='text-xs text-zinc-500 dark:text-zinc-400 font-medium'>
											{s.label}
										</p>
										<p className='text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5'>
											{s.value}
										</p>
									</div>
								))}
							</div>
						)}

						{/* Key Features */}
						<div>
							<h4 className='text-sm font-semibold uppercase tracking-wider text-[#0066cc] dark:text-[#2997ff] mb-3 flex items-center gap-2'>
								<CheckCircle2 className='w-4 h-4 text-[#bf4800] dark:text-[#f56300]' />
								{t("projects.modalFeatures")}
							</h4>
							<ul className='grid grid-cols-1 sm:grid-cols-2 gap-2.5'>
								{project.features.map((feature, idx) => (
									<li
										key={idx}
										className='flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300 p-1'>
										<span className='h-1.5 w-1.5 rounded-full bg-[#f56300] mt-2 shrink-0' />
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Technologies */}
						<div>
							<h4 className='text-sm font-semibold uppercase tracking-wider text-[#0066cc] dark:text-[#2997ff] mb-3 flex items-center gap-2'>
								<Cpu className='w-4 h-4 text-[#bf4800] dark:text-[#f56300]' />
								{t("projects.modalTech")}
							</h4>
							<div className='flex flex-wrap gap-2'>
								{project.technologies.map((tech, idx) => (
									<span
										key={idx}
										className='px-3 py-1 text-xs font-medium rounded-full bg-[#f5f5f7] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7]'>
										{tech}
									</span>
								))}
							</div>
						</div>

						{/* Actions */}
						<div className='pt-4 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center justify-between gap-4'>
							<div className='flex items-center gap-3'>
								{project.githubUrl && (
									<a
										href={project.githubUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-[#f5f5f7] dark:bg-black hover:bg-[#e8e8ed] dark:hover:bg-[#2c2c2e] text-[#1d1d1f] dark:text-[#f5f5f7] transition-colors'>
										<Github className='w-4 h-4' />
										{t("projects.sourceCode")}
									</a>
								)}
								{project.liveUrl && project.projectType === "uxui" ?
									<a
										href={project.liveUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-colors shadow-sm shadow-purple-600/20'>
										<ExternalLink className='w-4 h-4' />
										<span>Figma Prototype</span>
									</a>
								: project.liveUrl && project.statusTag !== "Console" ?
									<a
										href={project.liveUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white transition-colors'>
										<ExternalLink className='w-4 h-4' />
										{t("projects.liveDemo")}
									</a>
								:	null}
							</div>
							<button
								onClick={onClose}
								className='text-xs font-medium text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors cursor-pointer'>
								{t("projects.modalClose")}
							</button>
						</div>
					</div>
				</motion.div>
			</div>
		</AnimatePresence>
	);
}
