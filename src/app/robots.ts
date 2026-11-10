/** @format */

import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Served at /robots.txt (a robots.txt anywhere else, e.g. /images/, is ignored by crawlers)
export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: `${SITE_URL}/sitemap.xml`,
		host: SITE_URL,
	};
}
