/** @format */

"use client";

import Image from "next/image";
import { Expand } from "lucide-react";
import { ArtworkItem } from "@/data/portfolio-data";
import { useTranslation } from "@/hooks/useTranslation";

interface ArtworkCardProps {
	artwork: ArtworkItem;
	onSelect: (artwork: ArtworkItem) => void;
}

// Portrait sibling of ProjectCard: narrower so a mixed carousel row stays the same height
export function ArtworkCard({ artwork, onSelect }: ArtworkCardProps) {
	const { t } = useTranslation();

	return (
		<article className='group relative shrink-0 snap-start w-[72vw] max-w-[320px] sm:w-[320px] flex flex-col tile-gray p-6 sm:p-7 pb-16 sm:pb-16 overflow-hidden'>
			{/* Whole card opens the full-size poster */}
			<button
				onClick={() => onSelect(artwork)}
				className='absolute inset-0 z-20 rounded-[28px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]'
				aria-label={`${t("projects.artworkView")}: ${artwork.title}`}
			/>

			<div className='relative mb-7 w-full aspect-[4/5] rounded-2xl overflow-hidden'>
				<Image
					src={artwork.image}
					alt={artwork.title}
					fill
					sizes='(min-width: 640px) 320px, 72vw'
					className='object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]'
				/>
			</div>

			<p className='text-sm font-semibold text-[#0066cc] dark:text-[#2997ff]'>
				{t("projects.artworkCategory")}
			</p>
			<h3 className='mt-2 text-[22px] sm:text-2xl font-bold leading-[1.2] tracking-[-0.02em] text-[#1d1d1f] dark:text-[#f5f5f7]'>
				{artwork.title}
			</h3>
			<p className='mt-2 text-[15px] text-[#6e6e73] dark:text-[#86868b]'>
				{artwork.client}
			</p>

			<span
				aria-hidden='true'
				className='absolute bottom-5 right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#0071e3] text-white transition-transform duration-300 group-hover:scale-110'>
				<Expand className='w-4 h-4' strokeWidth={2.5} />
			</span>
		</article>
	);
}
