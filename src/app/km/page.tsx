/** @format */

import type { Metadata } from "next";
import { PortfolioPage } from "@/components/portfolio-page";
import {
	LANGUAGE_ALTERNATES,
	SITE_DESCRIPTION_KM,
	SITE_TITLE_KM,
} from "@/lib/site";

// Khmer version: same page, server-rendered in Khmer so search engines can index it
export const metadata: Metadata = {
	title: { absolute: SITE_TITLE_KM },
	description: SITE_DESCRIPTION_KM,
	alternates: {
		canonical: "/km",
		languages: LANGUAGE_ALTERNATES,
	},
	openGraph: {
		title: SITE_TITLE_KM,
		description: SITE_DESCRIPTION_KM,
		url: "/km",
		locale: "km_KH",
		alternateLocale: ["en_US"],
		type: "profile",
	},
	twitter: {
		title: SITE_TITLE_KM,
		description: SITE_DESCRIPTION_KM,
	},
};

export default function KhmerHome() {
	return <PortfolioPage />;
}
