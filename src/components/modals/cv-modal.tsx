/** @format */

"use client";

import React, { useEffect } from "react";
import {
	X,
	Printer,
	Mail,
	MapPin,
	Briefcase,
	GraduationCap,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
	personalInfo,
	experiencesData,
	journeyData,
} from "@/data/portfolio-data";

interface CVModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
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

	const handlePrint = () => {
		window.print();
	};

	if (!isOpen) return null;

	return (
		<AnimatePresence>
			<div className='fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto'>
				{/* Backdrop */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={onClose}
					className='fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity'
					aria-hidden='true'
				/>

				{/* Modal Container */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.95, y: 20 }}
					transition={{ duration: 0.2, ease: "easeOut" }}
					className='relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl z-10 custom-scrollbar'>
					{/* Modal Action Bar */}
					<div className='sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800'>
						<div className='flex items-center gap-2'>
							<span className='h-2.5 w-2.5 rounded-full bg-[rgb(255,87,87)] animate-pulse' />
							<h3 className='font-semibold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base'>
								Curriculum Vitae — Narak Leng
							</h3>
						</div>
						<div className='flex items-center gap-2'>
							<button
								onClick={handlePrint}
								className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 transition-colors'
								title='Print CV'>
								<Printer className='w-3.5 h-3.5' />
								<span className='hidden sm:inline'>Print / Save PDF</span>
							</button>
							<a
								href={`mailto:${personalInfo.email}?subject=Job Opportunity for Narak Leng`}
								className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[rgb(167,241,117)] hover:bg-[#96e062] text-zinc-950 transition-colors'>
								<Mail className='w-3.5 h-3.5 text-[rgb(255,87,87)]' />
								<span className='hidden sm:inline'>Contact</span>
							</a>
							<button
								onClick={onClose}
								className='flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors ml-1'
								aria-label='Close'>
								<X className='w-4 h-4' />
							</button>
						</div>
					</div>

					{/* Resume Document Content */}
					<div className='p-6 sm:p-10 space-y-8 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200'>
						{/* Header */}
						<div className='border-b border-zinc-200 dark:border-zinc-800 pb-6'>
							<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
								<div>
									<h1 className='text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white'>
										{personalInfo.name}
									</h1>
									<p className='text-[rgb(58,117,22)] dark:text-[rgb(167,241,117)] font-semibold text-lg mt-1'>
										{personalInfo.role}
									</p>
								</div>
								<div className='text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 space-y-1 sm:text-right'>
									<p className='flex items-center sm:justify-end gap-1.5'>
										<MapPin className='w-3.5 h-3.5 text-[rgb(255,87,87)]' />
										{personalInfo.location}
									</p>
									<p className='flex items-center sm:justify-end gap-1.5'>
										<Mail className='w-3.5 h-3.5 text-[rgb(255,87,87)]' />
										{personalInfo.email}
									</p>
									<p className='text-[rgb(58,117,22)] dark:text-[rgb(167,241,117)] font-mono'>
										{personalInfo.portfolio}
									</p>
								</div>
							</div>

							<div className='mt-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800'>
								<p className='text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed'>
									{personalInfo.aboutBio}
								</p>
							</div>
						</div>

						{/* Professional Experience */}
						<div className='space-y-4'>
							<h2 className='text-sm font-bold uppercase tracking-wider text-[rgb(58,117,22)] dark:text-[rgb(167,241,117)] flex items-center gap-2'>
								<Briefcase className='w-4 h-4 text-[rgb(255,87,87)]' />
								Professional Experience
							</h2>
							<div className='space-y-5'>
								{experiencesData.map((exp, idx) => (
									<div
										key={idx}
										className='p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/30'>
										<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2'>
											<div>
												<h3 className='font-bold text-zinc-900 dark:text-zinc-100 text-base'>
													{exp.role}
												</h3>
												<p className='text-sm text-[rgb(58,117,22)] dark:text-[rgb(167,241,117)] font-medium'>
													{exp.company}
												</p>
											</div>
											<span className='text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1 sm:mt-0'>
												{exp.period}
											</span>
										</div>
										<ul className='mt-3 space-y-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300'>
											{exp.responsibilities.map((r, rIdx) => (
												<li key={rIdx} className='flex items-start gap-2'>
													<span className='h-1.5 w-1.5 rounded-full bg-[rgb(255,87,87)] mt-2 shrink-0' />
													<span>{r}</span>
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>

						{/* Education & Journey */}
						<div className='space-y-4'>
							<h2 className='text-sm font-bold uppercase tracking-wider text-[rgb(58,117,22)] dark:text-[rgb(167,241,117)] flex items-center gap-2'>
								<GraduationCap className='w-4 h-4 text-[rgb(255,87,87)]' />
								Education & Certifications
							</h2>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
								{journeyData.map((item, idx) => (
									<div
										key={idx}
										className='p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/30'>
										<span className='inline-block px-2 py-0.5 rounded text-xs font-mono bg-zinc-200/60 dark:bg-zinc-700/60 text-zinc-800 dark:text-zinc-200 mb-2'>
											{item.period}
										</span>
										<h3 className='font-semibold text-zinc-900 dark:text-zinc-100 text-sm'>
											{item.title}
										</h3>
										<p className='text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 font-medium'>
											{item.institution}
										</p>
										<p className='text-xs text-zinc-600 dark:text-zinc-300 mt-2 line-clamp-3'>
											{item.description}
										</p>
									</div>
								))}
							</div>
						</div>

						{/* Technical Skills Overview */}
						<div className='space-y-4'>
							<h2 className='text-sm font-bold uppercase tracking-wider text-[rgb(58,117,22)] dark:text-[rgb(167,241,117)]'>
								Core Skills & Technical Competencies
							</h2>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm'>
								<div className='p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/20'>
									<h4 className='font-semibold text-zinc-900 dark:text-zinc-100 mb-2'>
										Front-end & Styling
									</h4>
									<p className='text-zinc-600 dark:text-zinc-400 leading-relaxed'>
										HTML5, CSS3, JavaScript (ES6+), TypeScript, React, Next.js,
										Tailwind CSS, Bootstrap, Responsive UI.
									</p>
								</div>
								<div className='p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/20'>
									<h4 className='font-semibold text-zinc-900 dark:text-zinc-100 mb-2'>
										Backend & Architecture
									</h4>
									<p className='text-zinc-600 dark:text-zinc-400 leading-relaxed'>
										Java, Spring Boot, REST APIs, PostgreSQL, Keycloak
										Authentication, System Analysis.
									</p>
								</div>
								<div className='p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/20'>
									<h4 className='font-semibold text-zinc-900 dark:text-zinc-100 mb-2'>
										UI/UX & Design
									</h4>
									<p className='text-zinc-600 dark:text-zinc-400 leading-relaxed'>
										Wireframing, Prototyping, User Flow, Sitemap, Responsive
										Design, Usability Testing, Design Systems in Figma.
									</p>
								</div>
								<div className='p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/20'>
									<h4 className='font-semibold text-zinc-900 dark:text-zinc-100 mb-2'>
										Tools & Collaboration
									</h4>
									<p className='text-zinc-600 dark:text-zinc-400 leading-relaxed'>
										Git, GitHub, Docker, Figma, Adobe XD, Sketch, Agile
										Workflows.
									</p>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</AnimatePresence>
	);
}
