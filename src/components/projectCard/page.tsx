/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const projects = [
	{
		title: "Production",
		name: "Exstad",
		description:
			"exSTAD is an experimental technology learning space for Cambodian students, especially those who want to explore ISTAD's scholarship program, products, and achievements in a unified digital platform.",
		imageUrl: "/images/projectCover/EXSTAD.svg",
		projectUrl: "https://www.exstad.tech/",
	},
	{
		title: "Local Project",
		name: "Taskify",
		description:
			"Taskify is a productivity platform that allows users to organize tasks, collaborate with teams, track progress, set deadlines, and streamline workflow efficiently, enhancing project management and overall productivity",
		imageUrl: "/images/projectCover/TASKIFY.svg",
		projectUrl: "https://taskifyistad.vercel.app/",
	},
	{
		title: "Local Project",
		name: "TechDeal",
		description:
			"Istad TechDeals | Platform for Cambodian Deals, find the best deals, coupons, and promotions from shops in Cambodia. Save big on your shopping with exclusive offers and discounts at TechDeals",
		imageUrl: "/images/projectCover/TechDeal.svg",
		projectUrl: "https://techdeal-pearl.vercel.app/",
	},
	{
		title: "Console",
		name: "Mobile APIs | Spring Boot",
		description:
			"This project involves developing RESTful APIs using Spring Boot to support mobile applications. It includes user authentication, data management, and integration with third-party services to enhance app functionality.",
		imageUrl: "/images/projectCover/SPRING.svg",
		projectUrl: "https://github.com/Narak-168/spring-mobile-baking-apis",
	},
	{
		title: "Console",
		name: "Product Inventory Management System | Java",
		description:
			"A Java-based console application that manages product inventory for small businesses. It allows users to add, update, delete, and view products, as well as track stock levels and generate simple reports.",
		imageUrl: "/images/projectCover/JAVA.svg",
		projectUrl: "https://github.com/Narak-168/Java-Product-Stock-Management-",
	},
];

export default function ProjectCardPage() {
	return (
		<div className='overflow-x-auto py-12 md:py-16 px-4 md:px-8 lg:px-16  -mx-5 [&::-webkit-scrollbar]:hidden'>
			<div className='flex gap-4 sm:gap-6 md:gap-8 min-w-max pl-5'>
				{projects.map((project, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className='group shrink-0'>
						<Link
							href={project.projectUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='border border-white/30 dark:border-white/20 relative rounded-3xl overflow-hidden w-80 sm:w-96 md:w-[480px] lg:w-[480px] aspect-square flex flex-col'
							style={{
								backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' /%3E%3C/filter%3E%3Crect width='400' height='400' fill='white' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
								backgroundRepeat: "repeat",
							}}>
							{/* Top: Title and Name */}
							<div className='p-4 sm:p-5 md:p-6 bg-gray-100 dark:bg-gray-950'>
								<span className='inline-block rounded-3xl px-2 py-1 text-xs font-medium tracking-widest text-gray-700 dark:text-gray-300 uppercase mb-2 bg-gray-200 dark:bg-gray-800 group-hover:bg-[#ff1349] group-hover:text-white dark:group-hover:bg-[#ff1349] transition-all duration-300'>
									{project.title}
								</span>
								<p className='text-xl font-extrabold sm:text-xl md:text-2xl  text-gray-900 dark:text-gray-100 line-clamp-1 group-hover:text-[#ff1349] dark:group-hover:text-[#ff1349] transition-colors duration-300'>
									{project.name}
								</p>
							</div>

							{/* Middle: Image */}
							<div className='relative flex-1 flex items-center justify-center overflow-hidden'>
								<Image
									unoptimized
									width={480}
									height={500}
									alt={project.name}
									src={project.imageUrl}
									className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110'
								/>
							</div>

							{/* Bottom: Description */}
							<div className='p-4 sm:p-5 md:p-6 bg-gray-100 dark:bg-gray-950 text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300'>
								<p className='line-clamp-2'>{project.description}</p>
							</div>
						</Link>
					</motion.div>
				))}
			</div>
		</div>
	);
}
