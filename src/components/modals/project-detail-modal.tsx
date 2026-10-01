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

				{/* Modal Container */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.95, y: 20 }}
					transition={{ duration: 0.2, ease: "easeOut" }}
					className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl z-10 custom-scrollbar ${
						locale === "km" ? "font-khmer" : ""
					}`}>
					{/* Close Button */}
					<button
						onClick={onClose}
						className='absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer'
						aria-label='Close modal'>
						<X className='w-5 h-5' />
					</button>

					{/* Modal Header / Media Preview */}
					<div className='relative h-64 sm:h-72 w-full bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center overflow-hidden border-b border-zinc-200 dark:border-zinc-800'>
						<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10' />
						<Image
							src={project.previewImage}
							alt={project.title}
							fill
							className='object-contain p-6 hover:scale-105 transition-transform duration-500'
							priority
						/>
						<div className='absolute bottom-4 left-6 z-20 text-white'>
							<div className='flex flex-wrap items-center gap-2 mb-2'>
								<span className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#a7f175]/20 text-[#a7f175] border border-[#a7f175]/30 backdrop-blur-xs'>
									<Sparkles className='w-3 h-3 text-[#ff5757]' />
									{project.category}
								</span>
								{project.statusTag && (
									<span className='inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/20 text-white border border-white/20 backdrop-blur-xs'>
										{project.statusTag}
									</span>
								)}
							</div>
							<h3 className='text-2xl sm:text-3xl font-bold tracking-tight'>
								{project.title}
							</h3>
						</div>
					</div>

					{/* Modal Body */}
					<div className='p-6 sm:p-8 space-y-6'>
						{/* Overview */}
						<div>
							<h4 className='text-sm font-semibold uppercase tracking-wider text-[#3a7516] dark:text-[#a7f175] mb-2'>
								{t("projects.modalOverview")}
							</h4>
							<p className='text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base'>
								{project.longDescription}
							</p>
						</div>

						{/* Quick Stats Grid */}
						{project.stats && (
							<div className='grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-800'>
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
							<h4 className='text-sm font-semibold uppercase tracking-wider text-[#3a7516] dark:text-[#a7f175] mb-3 flex items-center gap-2'>
								<CheckCircle2 className='w-4 h-4 text-[#ff5757]' />
								{t("projects.modalFeatures")}
							</h4>
							<ul className='grid grid-cols-1 sm:grid-cols-2 gap-2.5'>
								{project.features.map((feature, idx) => (
									<li
										key={idx}
										className='flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300 bg-zinc-50/70 dark:bg-zinc-800/30 p-2.5 rounded-lg border border-zinc-200/60 dark:border-zinc-800/60'>
										<span className='h-1.5 w-1.5 rounded-full bg-[#ff5757] mt-2 shrink-0' />
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Technologies */}
						<div>
							<h4 className='text-sm font-semibold uppercase tracking-wider text-[#3a7516] dark:text-[#a7f175] mb-3 flex items-center gap-2'>
								<Cpu className='w-4 h-4 text-[#ff5757]' />
								{t("projects.modalTech")}
							</h4>
							<div className='flex flex-wrap gap-2'>
								{project.technologies.map((tech, idx) => (
									<span
										key={idx}
										className='px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/60'>
										{tech}
									</span>
								))}
							</div>
						</div>

						{/* Actions */}
						<div className='pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4'>
							<div className='flex items-center gap-3'>
								{project.githubUrl && (
									<a
										href={project.githubUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 transition-colors border border-zinc-200 dark:border-zinc-700'>
										<Github className='w-4 h-4' />
										{t("projects.sourceCode")}
									</a>
								)}
								{project.liveUrl && project.projectType === "uxui" ?
									<a
										href={project.liveUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-purple-600 hover:bg-purple-500 text-white transition-colors shadow-sm shadow-purple-600/20'>
										<ExternalLink className='w-4 h-4' />
										<span>Figma Prototype</span>
									</a>
								: project.liveUrl && project.statusTag !== "Console" ?
									<a
										href={project.liveUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-[#a7f175] hover:bg-[#96e062] text-zinc-950 transition-colors shadow-sm shadow-[#a7f175]/20'>
										<ExternalLink className='w-4 h-4' />
										{t("projects.liveDemo")}
									</a>
								: null}
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
