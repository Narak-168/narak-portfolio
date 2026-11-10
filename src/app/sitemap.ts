/** @format */

import { MetadataRoute } from "next";
import { LOCALE_PATHS, SITE_URL } from "@/lib/site";

// One page per language; section anchors (#about, #projects…) are not separate
// pages and search engines ignore them in sitemaps, so they are not listed
export default function sitemap(): MetadataRoute.Sitemap {
	const languages = {
		en: SITE_URL,
		km: `${SITE_URL}${LOCALE_PATHS.km}`,
	};

	return [
		{
			url: languages.en,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
			alternates: { languages },
		},
		{
			url: languages.km,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
			alternates: { languages },
		},
	];
}
