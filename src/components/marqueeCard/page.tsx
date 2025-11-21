/** @format */

import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import Image from "next/image";

const artworks = [
	{
		id: 1,
		img: "/images/artWork/Bun Om Tuk-1.svg",
	},
	{
		id: 2,
		img: "/images/artWork/FCA-Childcare.svg",
	},
	{
		id: 3,
		img: "/images/artWork/Khmer New Year-FCA.svg",
	},
	{
		id: 4,
		img: "/images/artWork/FCA Poster.svg",
	},
	{
		id: 5,
		img: "/images/artWork/Khmer New Year-1.svg",
	},
	{
		id: 6,
		img: "/images/artWork/Khmer New Year-2.svg",
	},
	{
		id: 7,
		img: "/images/artWork/Bun Om Tuk-3.svg",
	},
	{
		id: 8,
		img: "/images/artWork/Labor Day Poster - FCA.svg",
	},
	{
		id: 9,
		img: "/images/artWork/Open House Poster-FCA.svg",
	},
];

const doubledArtworks = [...artworks, ...artworks];

const ArtworkCard = ({ img }: { img: string }) => {
	return (
		<figure
			className={cn(
				"relative h-74 w-74 shrink-0 cursor-pointer overflow-hidden border border-white/30 dark:border-white/20"
			)}>
			<Image
				unoptimized
				src={img}
				alt='Artwork'
				width={256}
				height={256}
				className='w-full h-full object-cover'
			/>
		</figure>
	);
};

export function MarqueeDemo() {
	return (
		<div className='relative w-full overflow-hidden py-8'>
			<Marquee pauseOnHover className='[--duration:50s] gap-4'>
				{doubledArtworks.map((artwork, index) => (
					<ArtworkCard key={`${artwork.id}-${index}`} {...artwork} />
				))}
			</Marquee>
		</div>
	);
}
