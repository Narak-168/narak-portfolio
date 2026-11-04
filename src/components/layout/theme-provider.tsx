/** @format */

"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
	children,
	...props
}: React.ComponentProps<typeof NextThemesProvider>) {
	// The theme script only needs to run from the server HTML; marking it inert on the
	// client silences React 19's "script tag while rendering" warning.
	const scriptProps = {
		type: typeof window === "undefined" ? "text/javascript" : "text/plain",
	};

	return (
		<NextThemesProvider scriptProps={scriptProps} {...props}>
			{children}
		</NextThemesProvider>
	);
}
