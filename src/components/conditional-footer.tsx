/** @format */

"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/footer/social-links-page";

export function ConditionalFooter() {
	const pathname = usePathname();

	// Don't show footer on 404 page
	if (pathname === "/404" || pathname?.includes("not-found")) {
		return null;
	}

	return <Footer />;
}
