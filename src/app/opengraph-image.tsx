/** @format */

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_ROLE, SITE_URL } from "@/lib/site";

export const alt = `${SITE_NAME} – ${SITE_ROLE}`;
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

// Share card shown on Facebook, LinkedIn, Telegram, X: matches the site's dark hero
export default async function Image() {
	const photo = await readFile(
		join(process.cwd(), "public/images/Narak-NoBG.PNG"),
	);
	const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				background: "#000000",
				color: "#f5f5f7",
				fontFamily: "system-ui, sans-serif",
				position: "relative",
			}}>
			{/* Soft blue/purple glow behind the portrait, like the hero */}
			<div
				style={{
					position: "absolute",
					right: -60,
					bottom: -120,
					width: 620,
					height: 620,
					borderRadius: 9999,
					background:
						"radial-gradient(circle, rgba(0,113,227,0.45), rgba(191,90,242,0.25) 45%, rgba(0,0,0,0) 70%)",
				}}
			/>

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					padding: "0 0 0 80px",
					width: 720,
				}}>
				<div style={{ fontSize: 34, fontWeight: 600, color: "#86868b" }}>
					Hello, I&apos;m
				</div>
				<div
					style={{
						fontSize: 92,
						fontWeight: 700,
						letterSpacing: -3,
						lineHeight: 1.05,
						marginTop: 6,
					}}>
					{SITE_NAME}
				</div>
				<div
					style={{
						fontSize: 46,
						fontWeight: 700,
						letterSpacing: -1,
						lineHeight: 1.15,
						marginTop: 18,
						backgroundImage:
							"linear-gradient(90deg, #2997ff, #bf5af2, #ff9f0a)",
						backgroundClip: "text",
						color: "transparent",
						display: "flex",
						flexDirection: "column",
					}}>
					{/* Break after "Developer" like the hero, instead of orphaning "Designer" */}
					<span>{SITE_ROLE.split(" & ")[0]}</span>
					<span>& {SITE_ROLE.split(" & ")[1]}</span>
				</div>
				<div
					style={{
						fontSize: 26,
						color: "#a1a1a6",
						marginTop: 28,
					}}>
					React · Next.js · TypeScript · Tailwind CSS · Figma
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						marginTop: 44,
						fontSize: 26,
						color: "#2997ff",
					}}>
					{SITE_URL.replace("https://", "")} · Phnom Penh, Cambodia
				</div>
			</div>

			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src={photoSrc}
				alt=''
				width={500}
				height={500}
				style={{
					position: "absolute",
					right: 10,
					bottom: 0,
					objectFit: "contain",
				}}
			/>
		</div>,
		{
			...size,
		},
	);
}
