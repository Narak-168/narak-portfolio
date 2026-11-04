/** @format */

"use client";

import React, {
	useState,
	useMemo,
	useRef,
	useCallback,
	useEffect,
} from "react";
import { motion, useAnimate } from "motion/react";
import {
	ArtworkItem,
	Project,
	artworksData,
	projectsData,
} from "@/data/portfolio-data";
import { ProjectCard } from "@/components/ui/project-card";
import { ArtworkCard } from "@/components/ui/artwork-card";
import { ProjectDetailModal } from "@/components/modals/project-detail-modal";
import { ArtworkLightbox } from "@/components/modals/artwork-lightbox";
import { useTranslation } from "@/hooks/useTranslation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { TabNav } from "@/components/ui/tab-nav";

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
	"public-school-mis": "publicSchoolMis",
};

export function ProjectsSection() {
	const { t } = useTranslation();
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [selectedArtwork, setSelectedArtwork] = useState<ArtworkItem | null>(
		null,
	);
	const [activeFilter, setActiveFilter] = useState("all");
	const [shownFilter, setShownFilter] = useState("all");

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
		{ id: "all", label: t("projects.filterAll") },
		{ id: "coding", label: t("projects.filterCoding") },
		{ id: "uxui", label: t("projects.filterUxui") },
		{ id: "artwork", label: t("projects.filterArtwork") },
	];

	const filteredProjects = localizedProjects.filter((p) => {
		if (shownFilter === "all") return true;
		if (shownFilter === "coding") return p.projectType === "coding";
		if (shownFilter === "uxui") return p.projectType === "uxui";
		return false;
	});

	const localizedArtworks = useMemo(
		() =>
			artworksData.map((artwork) => {
				const key = `projects.artworks.${artwork.id}`;
				const title = t(key);
				return { ...artwork, title: title !== key ? title : artwork.title };
			}),
		[t],
	);

	const shownArtworks =
		shownFilter === "all" || shownFilter === "artwork" ? localizedArtworks : [];

	const [scrollerRef, animate] = useAnimate<HTMLDivElement>();
	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(true);

	const frameRef = useRef<number | null>(null);

	const updateScrollState = useCallback(() => {
		const el = scrollerRef.current;
		if (!el) return;
		setCanScrollPrev(el.scrollLeft > 4);
		setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
	}, [scrollerRef]);

	// Scroll fires many times per frame; measure at most once per frame
	const handleScroll = useCallback(() => {
		if (frameRef.current !== null) return;
		frameRef.current = requestAnimationFrame(() => {
			frameRef.current = null;
			updateScrollState();
		});
	}, [updateScrollState]);

	const scrollByCard = (direction: 1 | -1) => {
		const el = scrollerRef.current;
		const card = el?.firstElementChild as HTMLElement | null;
		if (!el || !card) return;
		const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
		el.scrollBy({
			left: direction * (card.offsetWidth + gap),
			behavior: "smooth",
		});
	};

	// apple.com tabbed gallery: the tab moves at once, the old panel fades out,
	// then the new one fades in from its first card
	const pendingFilter = useRef(activeFilter);

	const changeFilter = async (id: string) => {
		if (id === pendingFilter.current) return;
		pendingFilter.current = id;
		setActiveFilter(id);
		const el = scrollerRef.current;
		if (el)
			await animate(el, { opacity: 0 }, { duration: 0.2, ease: "easeOut" });
		// A newer tab click took over while this one was fading out
		if (pendingFilter.current !== id) return;
		setShownFilter(id);
	};

	useEffect(() => {
		const el = scrollerRef.current;
		if (!el) return;
		el.scrollTo({ left: 0 });
		updateScrollState();
		animate(el, { opacity: 1 }, { duration: 0.3, ease: "easeOut" });
	}, [shownFilter, updateScrollState, animate, scrollerRef]);

	useEffect(() => {
		window.addEventListener("resize", handleScroll);
		return () => {
			window.removeEventListener("resize", handleScroll);
			if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
		};
	}, [handleScroll]);

	const closeArtwork = useCallback(() => setSelectedArtwork(null), []);

	// If selected project is open, keep its localized version updated
	const currentSelectedProject = useMemo(() => {
		if (!selectedProject) return null;
		return (
			localizedProjects.find((p) => p.id === selectedProject.id) ||
			selectedProject
		);
	}, [selectedProject, localizedProjects]);

	return (
		<section id='projects' className='section-white py-24 sm:py-32'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<SectionHeader
					eyebrow={t("projects.badge")}
					title={t("projects.title")}
					subtitle={t("projects.subtitle")}
					className='mb-10 sm:mb-12'
				/>

				{/* Apple-style tab nav */}
				<div className='flex justify-center mb-10 sm:mb-12'>
					<TabNav
						items={categories}
						activeId={activeFilter}
						onChange={changeFilter}
						ariaLabel={t("projects.title")}
					/>
				</div>
			</div>

			{/* Projects Carousel — first card lines up with the content column, row bleeds to the screen edge */}
			<motion.div
				initial={{ opacity: 0, y: 32 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-80px" }}
				transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
				<div
					ref={scrollerRef}
					role='tabpanel'
					onScroll={handleScroll}
					className='no-scrollbar flex gap-4 sm:gap-5 overflow-x-auto overscroll-x-contain snap-x snap-proximity py-2 px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-72rem)/2+2rem))] scroll-px-4 sm:scroll-px-6 lg:scroll-px-[max(2rem,calc((100vw-72rem)/2+2rem))]'>
					{filteredProjects.map((project) => (
						<ProjectCard
							key={project.id}
							project={project}
							onSelect={(p) => setSelectedProject(p)}
						/>
					))}
					{shownArtworks.map((artwork) => (
						<ArtworkCard
							key={artwork.id}
							artwork={artwork}
							onSelect={setSelectedArtwork}
						/>
					))}
				</div>
			</motion.div>

			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Carousel paddles */}
				<div className='mt-6 flex justify-end gap-3'>
					<button
						onClick={() => scrollByCard(-1)}
						disabled={!canScrollPrev}
						className='flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f7] dark:bg-[#1d1d1f] text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-[#e8e8ed] dark:hover:bg-[#2c2c2e] disabled:opacity-40 disabled:hover:bg-[#f5f5f7] dark:disabled:hover:bg-[#1d1d1f] transition-colors cursor-pointer disabled:cursor-default'
						aria-label='Previous projects'>
						<ChevronLeft className='w-5 h-5' />
					</button>
					<button
						onClick={() => scrollByCard(1)}
						disabled={!canScrollNext}
						className='flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f7] dark:bg-[#1d1d1f] text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-[#e8e8ed] dark:hover:bg-[#2c2c2e] disabled:opacity-40 disabled:hover:bg-[#f5f5f7] dark:disabled:hover:bg-[#1d1d1f] transition-colors cursor-pointer disabled:cursor-default'
						aria-label='Next projects'>
						<ChevronRight className='w-5 h-5' />
					</button>
				</div>

				{/* GitHub Explore Prompt */}
				<div className='mt-10 text-center'>
					<a
						href='https://github.com/Narak-168'
						target='_blank'
						rel='noopener noreferrer'
						className='link-more'>
						{t("projects.seeGithub")}
						<ChevronRight className='w-4 h-4' />
					</a>
				</div>
			</div>

			{/* Full-size poster viewer */}
			<ArtworkLightbox artwork={selectedArtwork} onClose={closeArtwork} />

			{/* Project Detail Modal */}
			<ProjectDetailModal
				project={currentSelectedProject}
				isOpen={!!currentSelectedProject}
				onClose={() => setSelectedProject(null)}
			/>
		</section>
	);
}
