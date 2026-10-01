/** @format */

export interface Project {
	id: string;
	title: string;
	category: string;
	projectType: "coding" | "uxui";
	statusTag?: "Production" | "Local" | "Console" | "UI/UX Design" | "Prototype";
	shortDescription: string;
	longDescription: string;
	technologies: string[];
	githubUrl: string;
	liveUrl: string;
	previewImage: string;
	features: string[];
	architecture?: string;
	stats?: { label: string; value: string }[];
}

export interface SkillItem {
	name: string;
	iconName: string;
	iconFamily: "si" | "fa" | "lu";
	category: "Front-end" | "Backend" | "Tools" | "UI/UX";
	description: string;
	badge?: string;
}

export interface ExperienceItem {
	role: string;
	company: string;
	companyDetail?: string;
	period: string;
	isCurrent?: boolean;
	location: string;
	responsibilities: string[];
	keySkills: string[];
}

export interface JourneyMilestone {
	period: string;
	title: string;
	institution: string;
	type: "education" | "career" | "course";
	description: string;
	highlights: string[];
	badge?: string;
	logo?: string;
}

export const personalInfo = {
	name: "Narak Leng",
	role: "Front-end Developer",
	location: "Phnom Penh, Cambodia",
	portfolio: "narak.dev",
	portfolioUrl: "https://narak.dev",
	github: "Narak-168",
	githubUrl: "https://github.com/Narak-168",
	email: "narakleng168@gmail.com",
	telegramUrl: "https://t.me/Narak_Leng",
	linkedinUrl: "https://www.linkedin.com/in/narak-leng-890582219/",
	heroHeadline: {
		greeting: "Hello!!",
		lines: ["I'm Narak,", "I'm a Front-end", "Developer."],
	},
	heroIntroduction:
		"IT graduate and Front-end Developer passionate about building responsive, user-friendly, and visually clean web experiences.",
	aboutBio:
		"Motivated IT graduate and Front-end Developer with hands-on experience in web development, UI/UX design, graphic design, and technical support. Experienced in building responsive and user-friendly web interfaces using modern front-end technologies. Currently working in HR while actively pursuing a career in Front-end Development.",
	status: "Open to new opportunities",
};

export const aboutHighlights = [
	{
		title: "Front-end Development",
		description:
			"Building reactive, accessible, high-performance web applications with React, Next.js, and TypeScript.",
		icon: "Code2",
	},
	{
		title: "UI/UX Design",
		description:
			"Transforming complex workflows into clean, intuitive, and delightful digital user interfaces.",
		icon: "Palette",
	},
	{
		title: "Responsive Web Design",
		description:
			"Crafting seamless cross-platform experiences optimized for mobile, tablet, and high-DPI desktop screens.",
		icon: "Smartphone",
	},
	{
		title: "Problem Solving",
		description:
			"Analyzing complex data structures, debugging edge cases, and engineering clean, maintainable logic.",
		icon: "Cpu",
	},
	{
		title: "User-focused Design",
		description:
			"Prioritizing usability, accessibility standards, ergonomic interactions, and micro-animations.",
		icon: "Users",
	},
];

export const quickStats = [
	{ value: "IT Eng.", label: "Degree from RUPP" },
	{ value: "12+", label: "Featured Projects" },
	{ value: "100%", label: "Responsive & Modern" },
	{ value: "HR & Tech", label: "Multi-domain Experience" },
];

export const projectsData: Project[] = [
	// Coding Projects
	{
		id: "exstad",
		title: "exSTAD",
		projectType: "coding",
		statusTag: "Production",
		category: "Education & Scholarship Platform",
		shortDescription:
			"A scholarship and education platform designed to provide information about programs, enrollment, scholars, and learning roadmaps.",
		longDescription:
			"exSTAD is a production-grade education platform built for the ISTAD ecosystem. It centralizes educational program offerings, online application workflows, scholar directories, and interactive skill learning roadmaps. Backed by Keycloak enterprise single-sign-on (SSO), it delivers secure authentication for students, teachers, and administrators.",
		technologies: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Spring Boot",
			"PostgreSQL",
			"Keycloak",
		],
		githubUrl: "https://github.com/Narak-168/exSTAD",
		liveUrl: "https://exstad.narak.dev",
		previewImage: "/images/projectCover/EXSTAD.svg",
		features: [
			"Enterprise Single Sign-On (SSO) integration using Keycloak",
			"Interactive step-by-step curriculum and scholarship learning roadmaps",
			"Comprehensive administrative dashboard for scholar enrollment approvals",
			"Searchable scholar directory with profile showcase",
		],
		architecture:
			"Enterprise microservice-ready architecture with Keycloak IAM & Spring Boot",
		stats: [
			{ label: "Status", value: "Production" },
			{ label: "Security", value: "Keycloak SSO" },
			{ label: "Frontend", value: "React + TS" },
			{ label: "Backend", value: "Spring Boot" },
		],
	},
	{
		id: "taskify",
		title: "Taskify",
		projectType: "coding",
		statusTag: "Local",
		category: "Productivity & Kanban Board App",
		shortDescription:
			"A task management web application designed to help users create, organize, assign, and track tasks efficiently.",
		longDescription:
			"Taskify empowers agile teams and individual professionals to manage their projects effortlessly. Featuring visual Kanban drag-and-drop boards, customizable workflow stages, task priority flags, deadline reminders, and real-time team collaboration, it bridges the gap between clean UX and robust backend persistence.",
		technologies: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Spring Boot",
			"PostgreSQL",
		],
		githubUrl: "https://github.com/Narak-168/Taskify",
		liveUrl: "https://taskify.narak.dev",
		previewImage: "/images/projectCover/TASKIFY.svg",
		features: [
			"Interactive Kanban boards with smooth drag-and-drop mechanics",
			"Real-time task filtering by tag, priority, and assigned team members",
			"RESTful Spring Boot API backend backed by PostgreSQL persistence",
			"Responsive interface built with Tailwind CSS and TypeScript safety",
		],
		architecture:
			"Client-Server architecture with Spring Boot REST API & PostgreSQL DB",
		stats: [
			{ label: "Status", value: "Local" },
			{ label: "Architecture", value: "REST API + SPA" },
			{ label: "Frontend", value: "React + TS" },
			{ label: "Backend", value: "Spring Boot" },
		],
	},
	{
		id: "techdeal",
		title: "TechDeal",
		projectType: "coding",
		statusTag: "Local",
		category: "Tech E-Commerce & Marketplace",
		shortDescription:
			"A modern e-commerce web platform for browsing, comparing, and purchasing tech electronics and accessories with intuitive shopping cart flow.",
		longDescription:
			"TechDeal is an end-to-end tech gadgets marketplace developed with React and Spring Boot. It provides seamless catalog browsing, dynamic faceted filtering (brand, price, ratings), detailed product specs comparisons, real-time cart state management, and order checkout flows.",
		technologies: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Spring Boot",
			"PostgreSQL",
		],
		githubUrl: "https://github.com/Narak-168/TechDeal",
		liveUrl: "https://techdeal.narak.dev",
		previewImage: "/images/projectCover/TechDeal.svg",
		features: [
			"Interactive catalog with multi-facet filters (category, brand, price)",
			"Dynamic shopping cart with persistent storage and instant subtotal calculation",
			"Detailed product pages with specification comparison matrices",
			"RESTful Spring Boot API endpoints for catalog and order management",
		],
		architecture:
			"Full Stack E-Commerce with Spring Boot REST API & PostgreSQL",
		stats: [
			{ label: "Status", value: "Local" },
			{ label: "Domain", value: "E-Commerce" },
			{ label: "Frontend", value: "React + Tailwind" },
			{ label: "Backend", value: "Spring Boot" },
		],
	},
	{
		id: "mobile-apis",
		title: "Mobile APIs | Spring Boot",
		projectType: "coding",
		statusTag: "Console",
		category: "Backend RESTful APIs & Security",
		shortDescription:
			"High-performance backend RESTful APIs engineered with Spring Boot for mobile banking transactions and client account operations.",
		longDescription:
			"Engineered specifically for mobile banking client integration, Mobile APIs delivers a secure, production-tested stateless REST architecture. Features include role-based access control (RBAC), JWT authentication, transaction tracking, fund transfers, error handling middlewares, and interactive OpenAPI (Swagger) documentation.",
		technologies: [
			"Java",
			"Spring Boot",
			"Spring Security",
			"JWT",
			"PostgreSQL",
			"REST API",
			"Swagger / OpenAPI",
		],
		githubUrl: "https://github.com/Narak-168",
		liveUrl: "https://github.com/Narak-168",
		previewImage: "/images/projectCover/SPRING.svg",
		features: [
			"JWT token-based authentication and secure role-based endpoint authorization",
			"Transactional banking endpoints for balance inquiry, deposits, and transfers",
			"PostgreSQL relational schema with Hibernate/JPA repository layers",
			"Interactive Swagger/OpenAPI documentation for smooth mobile client integration",
		],
		architecture:
			"Modular Spring Boot REST Architecture with Spring Security & PostgreSQL",
		stats: [
			{ label: "Status", value: "Console" },
			{ label: "Security", value: "Spring Security + JWT" },
			{ label: "API Docs", value: "OpenAPI / Swagger" },
			{ label: "Database", value: "PostgreSQL" },
		],
	},
	{
		id: "product-inventory",
		title: "Product Inventory Management | Java",
		projectType: "coding",
		statusTag: "Console",
		category: "Core Java CLI & Stock System",
		shortDescription:
			"A console-based inventory management system developed in Core Java featuring CRUD operations, table formatting, pagination, and stock tracking.",
		longDescription:
			"Engineered to master object-oriented programming principles and system design in Java, this console application provides a complete terminal-based solution for warehouse management. It features custom ASCII tabular rendering, pagination for large datasets, search by barcode/name, and persistent data storage.",
		technologies: [
			"Java",
			"OOP",
			"CLI Tables",
			"File I/O",
			"JDBC",
			"Data Structures",
		],
		githubUrl: "https://github.com/Narak-168",
		liveUrl: "https://github.com/Narak-168",
		previewImage: "/images/projectCover/JAVA.svg",
		features: [
			"Interactive console-based menu with formatted ASCII table output",
			"Full CRUD capabilities: create, read, update, delete, and restore products",
			"In-memory pagination and fast search by ID, name, or product category",
			"Robust input validation, exception handling, and persistent data storage",
		],
		architecture:
			"Core Java CLI Application with Modular OOP Design",
		stats: [
			{ label: "Status", value: "Console" },
			{ label: "Language", value: "Core Java" },
			{ label: "Interface", value: "CLI / Terminal" },
			{ label: "Design", value: "OOP Principles" },
		],
	},
	{
		id: "personal-portfolio",
		title: "Personal Portfolio",
		projectType: "coding",
		statusTag: "Production",
		category: "Portfolio & Interactive Showcase",
		shortDescription:
			"A responsive personal portfolio showcasing my development, UI/UX, and design work.",
		longDescription:
			"A developer portfolio crafted with an emphasis on minimalist aesthetics, subtle animations, typography hierarchy, and top-tier Lighthouse performance. Built with Next.js App Router, TypeScript, Tailwind CSS, and Motion, it features dynamic theme switching, bilingual Khmer/English support, interactive modal drawers, and responsive layouts across all viewports.",
		technologies: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Motion",
			"i18n",
		],
		githubUrl: "https://github.com/Narak-168/narak-portfolio",
		liveUrl: "https://narak.dev",
		previewImage: "/images/projectCover/narak img.svg",
		features: [
			"Lightning-fast Next.js App Router with server-side metadata optimization",
			"Bilingual Khmer (Krasar font) and English localization engine",
			"Custom micro-interactions, scroll reveals, and smooth page transitions",
			"Minimalist dark & light aesthetic with theme persistence",
		],
		architecture:
			"Next.js App Router + TypeScript + Tailwind CSS v4 + Motion",
		stats: [
			{ label: "Status", value: "Production" },
			{ label: "Framework", value: "Next.js 16" },
			{ label: "Styling", value: "Tailwind CSS v4" },
			{ label: "Localization", value: "EN / KM" },
		],
	},

	// UX/UI Projects
	{
		id: "exstad-uxui",
		title: "exSTAD",
		projectType: "uxui",
		statusTag: "UI/UX Design",
		category: "Education & Scholarship UI/UX",
		shortDescription:
			"Complete user interface and experience design for the exSTAD scholarship platform, featuring responsive dashboards and learning roadmaps.",
		longDescription:
			"The exSTAD UI/UX project was researched and crafted in Figma to solve real usability challenges faced by students applying for scholarships. The design delivers a modular design system, accessible color contrast ratios, clear stepper forms for application submissions, and interactive scholar roadmaps.",
		technologies: [
			"Figma",
			"UI/UX Design",
			"Design Systems",
			"Prototyping",
			"User Research",
		],
		githubUrl: "https://github.com/Narak-168/exSTAD",
		liveUrl: "https://www.figma.com",
		previewImage: "/images/ux-uiCover/exSTAD-ux_ui.svg",
		features: [
			"Comprehensive Figma design system with tokens for typography, spacing, and colors",
			"Multi-step scholarship application flow tested for minimal user drop-off",
			"Interactive scholar roadmap interface with visual progress milestones",
			"High-fidelity interactive prototypes for both desktop and mobile viewports",
		],
		architecture:
			"Figma Design System with Modular Auto-Layout Tokens",
		stats: [
			{ label: "Tool", value: "Figma" },
			{ label: "Domain", value: "Scholarship / EdTech" },
			{ label: "Type", value: "Design System" },
			{ label: "Prototype", value: "Interactive" },
		],
	},
	{
		id: "taskify-uxui",
		title: "Taskify",
		projectType: "uxui",
		statusTag: "UI/UX Design",
		category: "Productivity & Kanban Board UI/UX",
		shortDescription:
			"Ergonomic and minimalist UI/UX design for Taskify, emphasizing Kanban board visual clarity, dark mode aesthetics, and micro-interactions.",
		longDescription:
			"Designed in Figma with a focus on developer productivity and mental clarity. The interface reduces visual fatigue through clean neutral palettes with intentional accent states, smooth card grab-and-drag states, and quick-filter interaction drawers.",
		technologies: [
			"Figma",
			"UI/UX Design",
			"Kanban Ergonomics",
			"Micro-Interactions",
			"Wireframing",
		],
		githubUrl: "https://github.com/Narak-168/Taskify",
		liveUrl: "https://www.figma.com",
		previewImage: "/images/ux-uiCover/TASKIFY-ux_ui.svg",
		features: [
			"Ergonomic Kanban board layout tailored for agile sprint planning",
			"Complete light and dark mode variants crafted with WCAG accessibility standards",
			"Micro-interaction specs for drag handles, modal overlays, and quick task cards",
			"Component variant library in Figma with auto-layout and interactive states",
		],
		architecture:
			"Figma Component System with Interactive Variants",
		stats: [
			{ label: "Tool", value: "Figma" },
			{ label: "Focus", value: "Agile Ergonomics" },
			{ label: "Modes", value: "Light & Dark UI" },
			{ label: "Prototype", value: "Interactive" },
		],
	},
	{
		id: "techdeal-uxui",
		title: "TechDeal",
		projectType: "uxui",
		statusTag: "UI/UX Design",
		category: "Tech E-Commerce & Marketplace UI/UX",
		shortDescription:
			"Modern e-commerce UI/UX design engineered for high conversion rates, streamlined product discovery, and friction-free mobile checkout.",
		longDescription:
			"TechDeal's UI/UX architecture focuses on user engagement, effortless product comparison, and trustworthy checkout patterns. Crafted with extensive competitive benchmarking, the design features sticky action bars for mobile shoppers, clear technical spec breakdown tabs, and a 2-step checkout flow.",
		technologies: [
			"Figma",
			"E-Commerce UX",
			"Design Systems",
			"Information Architecture",
			"Mobile First",
		],
		githubUrl: "https://github.com/Narak-168/TechDeal",
		liveUrl: "https://www.figma.com",
		previewImage: "/images/ux-uiCover/TechDeal-ux_ui.svg",
		features: [
			"Intuitive product discovery with multi-facet filters and comparative matrices",
			"Frictionless 2-step checkout flow designed to minimize cart abandonment",
			"Mobile-first responsive wireframes and high-fidelity interactive screens",
			"Design system components with responsive grids and e-commerce UI tokens",
		],
		architecture:
			"E-Commerce Design System with Conversion-Optimized Flows",
		stats: [
			{ label: "Tool", value: "Figma" },
			{ label: "Domain", value: "Tech Retail" },
			{ label: "Approach", value: "Mobile-First" },
			{ label: "Prototype", value: "Clickable Flows" },
		],
	},
	{
		id: "dambaul-uxui",
		title: "Dambaul - Mini Project",
		projectType: "uxui",
		statusTag: "UI/UX Design",
		category: "Rental & Accommodation App UI/UX",
		shortDescription:
			"A mobile application UI/UX mini project ('Dambaul') helping students and young workers easily find safe and budget-friendly rental rooms in Cambodia.",
		longDescription:
			"Dambaul (ដំបូល) was created as a focused UI/UX mini project addressing the lack of centralized housing information for university students relocating to Phnom Penh. The app design features localized map browsing, filter by price and university proximity, owner verification badges, and direct messaging.",
		technologies: [
			"Figma",
			"UI/UX Research",
			"Mobile App Design",
			"User Journey",
			"Wireframing",
		],
		githubUrl: "https://github.com/Narak-168",
		liveUrl: "https://www.figma.com",
		previewImage: "/images/ux-uiCover/Dambul-ux_ui.svg",
		features: [
			"Map-centric room discovery with radius filtering around major universities",
			"Transparent price breakdown including estimated utilities (water & electricity)",
			"Trust badges and verified room photos to prevent rental scams",
			"Bilingual Khmer-English interface with friendly typography and visual hierarchy",
		],
		architecture:
			"Mobile App UI/UX Architecture with Localized Map Flows",
		stats: [
			{ label: "Tool", value: "Figma" },
			{ label: "Type", value: "Mini Project" },
			{ label: "Target", value: "University Students" },
			{ label: "Language", value: "Khmer / English" },
		],
	},
	{
		id: "acleda-uxui",
		title: "ACLEDA UX/UI Clone",
		projectType: "uxui",
		statusTag: "UI/UX Design",
		category: "FinTech & Mobile Banking Redesign",
		shortDescription:
			"A modern UX/UI redesign and clone of ACLEDA Mobile Banking app, enhancing navigation speed, QR scanning ergonomics, and bilingual readability.",
		longDescription:
			"A UX study and interface overhaul of Cambodia's prominent mobile banking application. The project restructured complex menu hierarchies into an accessible 4-tab navigation, gave KHQR scanning prominent thumb-reach placement, modernized transaction histories with smart categories, and refined Khmer typography.",
		technologies: [
			"Figma",
			"FinTech UI/UX",
			"Mobile Banking",
			"Information Architecture",
			"Prototyping",
		],
		githubUrl: "https://github.com/Narak-168",
		liveUrl: "https://www.figma.com",
		previewImage: "/images/ux-uiCover/Acleda-ux_ui.svg",
		features: [
			"Modernized mobile banking dashboard with quick-balance privacy toggle",
			"Ergonomic KHQR scan & pay workflow positioned for single-hand thumb reach",
			"Streamlined fund transfer sequence with recipient avatars and instant confirmation",
			"Refined Khmer font hierarchy and balanced contrast for both bright sunlight and dark environments",
		],
		architecture:
			"Mobile FinTech Architecture with Thumb-Zone Ergonomics",
		stats: [
			{ label: "Tool", value: "Figma" },
			{ label: "Category", value: "FinTech Clone / Redesign" },
			{ label: "Focus", value: "KHQR & Thumb Ergonomics" },
			{ label: "Prototype", value: "Interactive Flow" },
		],
	},
	{
		id: "public-school-mis",
		title: "Public School MIS — Mobile Screen",
		projectType: "uxui",
		statusTag: "UI/UX Design",
		category: "Mobile-First EdTech UI/UX",
		shortDescription:
			"A mobile-first school management interface designed for Cambodian students and parents, focusing on attendance, homework, grades, schedules, and notifications.",
		longDescription:
			"Created to modernize public school communications and student tracking across Cambodia, Public School MIS offers a mobile-first interface optimized for everyday student and parent accessibility. Designed in Figma with native Khmer typography considerations, the system streamlines daily attendance tracking, homework distribution, real-time grading reports, timetable schedules, and school announcements.",
		technologies: [
			"Figma",
			"UI/UX Design",
			"Mobile-First",
			"Khmer Typography",
			"Design Systems",
			"Prototyping",
		],
		githubUrl: "https://github.com/Narak-168",
		liveUrl:
			"https://www.figma.com/design/Xu2dwFCb2NOvuV7pzybwA3/Public-School-MIS---Mobile-Screen?node-id=0-1&t=Cygll9Tuxt5DfX6w-1",
		previewImage: "/images/ux-uiCover/PublicSchoolMIS-ux_ui.svg",
		features: [
			"Mobile-first responsive design engineered for smartphone access and thumb ergonomics",
			"Optimized Khmer typography (Krasar font) and bilingual layout structure",
			"Visual student grade report cards, schedule timetables, and real-time attendance tracking",
			"Complete Figma component design system with reusable UI tokens and interactive mobile screens",
		],
		architecture:
			"Figma Mobile Design System with Responsive Mobile Screen Flows",
		stats: [
			{ label: "Tool", value: "Figma" },
			{ label: "Focus", value: "Mobile Screen UI/UX" },
			{ label: "Audience", value: "Cambodian Schools" },
			{ label: "Typography", value: "Khmer / Krasar" },
		],
	},
];

export const journeyData: JourneyMilestone[] = [
	{
		period: "2026",
		title: "UX/UI Short Course",
		institution: "DICHI Academy",
		type: "course",
		badge: "Design Specialization",
		description:
			"Specialized intensive training in modern user interface design, user journey mapping, design systems, wireframing, and interactive prototyping with Figma.",
		highlights: [
			"User research and usability testing methodologies",
			"Design system creation and component tokens",
			"High-fidelity interactive prototyping",
		],
	},
	{
		period: "2024 – 2025",
		title: "Full Stack Web Development",
		institution:
			"Institute of Science and Technology Advanced Development (ISTAD)",
		type: "education",
		badge: "Technical Training",
		description:
			"Comprehensive web development program specializing in modern front-end engineering with React and TypeScript, coupled with Spring Boot REST microservices and enterprise database management.",
		highlights: [
			"React, TypeScript, Next.js, and Tailwind CSS development",
			"Spring Boot, REST API, Keycloak IAM, and PostgreSQL",
			"Agile teamwork, Git collaboration, and CI/CD basics",
		],
	},
	{
		period: "2019 – 2023",
		title: "Bachelor's Degree in Information Technology Engineering",
		institution: "Royal University of Phnom Penh (RUPP)",
		type: "education",
		badge: "Bachelor of Engineering",
		description:
			"Comprehensive four-year engineering curriculum covering computer science fundamentals, software engineering principles, algorithms, data structures, and database systems.",
		highlights: [
			"Core computer science and software development foundations",
			"Network systems, relational databases, and system analysis",
			"Graduated with practical capstone development projects",
		],
	},
];

export const skillsData = {
	frontend: [
		{
			name: "HTML5",
			level: "Advanced",
			desc: "Semantic markup, modern web APIs, accessibility",
		},
		{
			name: "CSS3",
			level: "Advanced",
			desc: "Flexbox, Grid, CSS animations, variables",
		},
		{
			name: "JavaScript",
			level: "Advanced",
			desc: "ES6+, async/await, DOM APIs, event loop",
		},
		{
			name: "TypeScript",
			level: "Proficient",
			desc: "Static typing, generics, interfaces, strict mode",
		},
		{
			name: "React",
			level: "Advanced",
			desc: "Hooks, component lifecycle, state management, context",
		},
		{
			name: "Next.js",
			level: "Proficient",
			desc: "App Router, SSR, SSG, API routes, SEO",
		},
		{
			name: "Tailwind CSS",
			level: "Advanced",
			desc: "Utility-first CSS, custom configurations, v4",
		},
		{
			name: "Bootstrap",
			level: "Proficient",
			desc: "Grid system, responsive layouts, utility classes",
		},
	],
	backend: [
		{
			name: "Java",
			level: "Proficient",
			desc: "OOP, concurrency, Java collections, syntax",
		},
		{
			name: "Spring Boot",
			level: "Proficient",
			desc: "REST controllers, JPA/Hibernate, Spring Security",
		},
		{
			name: "REST API",
			level: "Advanced",
			desc: "API design, status codes, JSON, CRUD endpoints",
		},
		{
			name: "PostgreSQL",
			level: "Proficient",
			desc: "Relational queries, migrations, indexes, joins",
		},
	],
	tools: [
		{
			name: "Git",
			level: "Advanced",
			desc: "Version control, branching, rebasing, merge workflows",
		},
		{
			name: "GitHub",
			level: "Advanced",
			desc: "Open-source collaboration, Pull Requests, actions",
		},
		{
			name: "Docker",
			level: "Intermediate",
			desc: "Containerization, Dockerfile, docker-compose",
		},
		{
			name: "Figma",
			level: "Advanced",
			desc: "Component variants, auto-layout, wireframes, prototypes",
		},
		{
			name: "Adobe XD",
			level: "Proficient",
			desc: "Screen layouts, vectors, interactive mockups",
		},
		{
			name: "Sketch",
			level: "Intermediate",
			desc: "Vector UI design, symbols, artboards",
		},
	],
	uiux: [
		{
			name: "Wireframing",
			level: "Advanced",
			desc: "Low-fidelity page wireframes and conceptual structures",
		},
		{
			name: "Prototyping",
			level: "Advanced",
			desc: "Interactive mockups, micro-interactions, clickable flows",
		},
		{
			name: "User Flow",
			level: "Proficient",
			desc: "Mapping user journey steps, friction points, actions",
		},
		{
			name: "Sitemap",
			level: "Proficient",
			desc: "Information architecture and hierarchical navigation",
		},
		{
			name: "Responsive Design",
			level: "Expert",
			desc: "Mobile-first layouts across all device form factors",
		},
		{
			name: "Usability Testing",
			level: "Proficient",
			desc: "User feedback gathering, heuristic evaluations",
		},
		{
			name: "Design Systems",
			level: "Proficient",
			desc: "Typography scales, color tokens, reusable components",
		},
	],
};

export const experiencesData: ExperienceItem[] = [
	{
		role: "Young Retailer – HR",
		company: "Chip Mong Retail | Chip Mong Supermarket",
		companyDetail: "Leading retail conglomerate in Cambodia",
		period: "2026 – Present",
		isCurrent: true,
		location: "Phnom Penh, Cambodia",
		responsibilities: [
			"Managing and validating employee data across supermarket branches with high accuracy.",
			"Preparing performance and KPI information to support strategic management decisions.",
			"Working closely with HR documents, regulatory policies, and routine operational reports.",
			"Supporting performance dashboards with structured data pipelines and automated spreadsheets.",
			"Conducting systematic data cleaning and updating across enterprise human resource records.",
			"Solving operational and data-related issues swiftly to ensure seamless branch workflows.",
		],
		keySkills: [
			"Data Validation",
			"KPI Analytics",
			"Operational Problem Solving",
			"Process Optimization",
		],
	},
	{
		role: "Employee Services & Graphic Design",
		company: "Wing Bank",
		companyDetail: "Leading digital bank & financial institution in Cambodia",
		period: "Previous Experience",
		location: "Phnom Penh, Cambodia",
		responsibilities: [
			"Crafted engaging employee onboarding materials that streamlined new hire acclimation.",
			"Designed internal communication visual assets, newsletters, and informational announcements.",
			"Managed professional employee photo editing and standardized ID card production pipelines.",
			"Delivered administrative and technical documentation support across human resource services.",
			"Produced creative digital graphic design assets aligned with corporate brand guidelines.",
			"Provided attentive employee service support resolving staff queries promptly.",
		],
		keySkills: [
			"Graphic Design",
			"Internal Branding",
			"Employee Onboarding",
			"Visual Communications",
		],
	},
	{
		role: "ICT Instructor",
		company: "Private School",
		companyDetail: "Private K-12 educational academy",
		period: "Previous Experience",
		location: "Phnom Penh, Cambodia",
		responsibilities: [
			"Taught Information & Communication Technology (ICT) curriculum in English to students.",
			"Supported students with hands-on technology education, computer literacy, and basic programming concepts.",
			"Assisted school leadership with IT-related infrastructure activities, equipment setup, and software guidance.",
			"Supported school marketing and digital content creation including event media and online promotions.",
		],
		keySkills: [
			"Technical Instruction",
			"English Communication",
			"Digital Media Creation",
			"IT Support",
		],
	},
];
