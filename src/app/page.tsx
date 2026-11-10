/** @format */

import type { Metadata } from "next";
import { PortfolioPage } from "@/components/portfolio-page";
import { LANGUAGE_ALTERNATES } from "@/lib/site";

// English version; the Khmer one lives at /km
export const metadata: Metadata = {
	alternates: {
		canonical: "/",
		languages: LANGUAGE_ALTERNATES,
	},
};

export default function Home() {
	return <PortfolioPage />;
}
