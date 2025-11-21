/** @format */

"use client";

import Link from "next/link";

export default function ArrowButton() {
	return (
		<Link
			href='https://github.com/Narak-168'
			target='_blank'
			rel='noopener noreferrer'
			className='group relative px-3 sm:px-4 md:px-6 py-2 sm:py-2 md:py-3 rounded-full border-2 border-purple-400 hover:border-purple-300 transition-colors duration-200 inline-block'>
			{/* Arrow SVG */}
			<svg
				width='20'
				height='14'
				viewBox='0 0 32 20'
				fill='none'
				className='text-purple-400 group-hover:text-purple-300 transition-colors duration-200'>
				{/* Horizontal line */}
				<line
					x1='2'
					y1='10'
					x2='26'
					y2='10'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
				/>
				{/* Arrow head - right side */}
				<polyline
					points='22,5 27,10 22,15'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					fill='none'
				/>
			</svg>
		</Link>
	);
}
