/** @format */

"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
	return (
		<div className='min-h-screen flex items-center justify-center px-4 bg-neutral-50 dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100'>
			<div className='text-center space-y-6 max-w-md'>
				<div className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'>
					<Sparkles className='w-3 h-3' />
					404 ERROR
				</div>

				<h1 className='text-6xl sm:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-mono'>
					404
				</h1>

				<h2 className='text-2xl font-bold tracking-tight text-zinc-900 dark:text-white'>
					Page Not Found
				</h2>

				<p className='text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed'>
					The page you are looking for doesn&apos;t exist or has been moved.
				</p>

				<div className='pt-2'>
					<Link
						href='/'
						className='inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400 transition-colors shadow-xs'>
						<ArrowLeft className='w-3.5 h-3.5' />
						<span>Return Home</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
