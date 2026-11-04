/** @format */

"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { ArtworkItem } from "@/data/portfolio-data";
import { useTranslation } from "@/hooks/useTranslation";

interface ArtworkLightboxProps {
	artwork: ArtworkItem | null;
	onClose: () => void;
}

// Full-screen poster viewer: closes on Esc, the close button, or a click outside the poster
export function ArtworkLightbox({ artwork, onClose }: ArtworkLightboxProps) {
	const { t } = useTranslation();

	useEffect(() => {
		if (!artwork) return;
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		document.addEventListener("keydown", handleKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", handleKey);
			document.body.style.overflow = "";
		};
	}, [artwork, onClose]);

	return (
		<AnimatePresence>
			{artwork && (
				<motion.div
					key='artwork-lightbox'
					role='dialog'
					aria-modal='true'
					aria-label={artwork.title}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.25 }}
					onClick={onClose}
					className='fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 p-4 sm:p-8 bg-black/85 backdrop-blur-md'>
					<button
						onClick={onClose}
						className='absolute top-4 right-4 sm:top-6 sm:right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer'
						aria-label={t("projects.artworkClose")}>
						<X className='w-5 h-5' />
					</button>

					<motion.div
						initial={{ opacity: 0, scale: 0.96, y: 12 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.96, y: 12 }}
						transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
						onClick={(e) => e.stopPropagation()}
						className='relative h-[min(80vh,calc((100vw-2rem)*1.25))] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl'>
						<Image
							src={artwork.image}
							alt={artwork.title}
							fill
							sizes='(min-width: 640px) 640px, 100vw'
							className='object-contain bg-black'
							priority
						/>
					</motion.div>

					<p
						onClick={(e) => e.stopPropagation()}
						className='text-center text-sm text-white/80'>
						<span className='font-semibold text-white'>{artwork.title}</span> ·{" "}
						{artwork.client}
					</p>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
