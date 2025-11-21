/** @format */

import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Narak Leng - Full Stack Developer Portfolio",
		short_name: "Narak Leng",
		description:
			"Full Stack Developer specializing in modern web development with React, Next.js, TypeScript, and Node.js",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#000000",
		icons: [
			{
				src: "/favicon.svg",
				sizes: "any",
				type: "image/svg+xml",
			},
		],
	};
}
