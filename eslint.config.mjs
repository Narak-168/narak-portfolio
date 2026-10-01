/** @format */

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	{
		rules: {
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
				},
			],
			"react-hooks/set-state-in-effect": "warn",
			"react-hooks/refs": "warn",
			"react-hooks/exhaustive-deps": "warn",
			"@next/next/no-img-element": "warn",
		},
	},
	// Override default ignores of eslint-config-next.
	globalIgnores([
		// Default ignores of eslint-config-next:
		".next/**",
		"out/**",
		"build/**",
		"next-env.d.ts",
		"src/components/ui/circular-gallery.tsx",
		"src/components/ui/color-bends.tsx",
		"src/components/ui/falling-text.tsx",
		"src/components/ui/logo-loop.tsx",
		"src/components/ui/card-swap.tsx",
		"src/components/ui/resizable-navbar.tsx",
		"src/components/ui/text-type.tsx",
		"src/components/ui/bounce-cards.tsx",
	]),
]);

export default eslintConfig;
