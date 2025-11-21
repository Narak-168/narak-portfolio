/** @format */

import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Narak Leng - Full Stack Developer Portfolio";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 60,
					background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					color: "white",
					fontFamily: "system-ui, sans-serif",
					padding: "40px",
				}}>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						textAlign: "center",
					}}>
					<h1
						style={{
							fontSize: 80,
							fontWeight: 900,
							margin: 0,
							marginBottom: 20,
							textShadow: "0 4px 8px rgba(0,0,0,0.3)",
						}}>
						Narak Leng
					</h1>
					<p
						style={{
							fontSize: 40,
							fontWeight: 600,
							margin: 0,
							opacity: 0.95,
						}}>
						Full Stack Developer
					</p>
					<p
						style={{
							fontSize: 32,
							fontWeight: 400,
							margin: 0,
							marginTop: 20,
							opacity: 0.9,
						}}>
						React • Next.js • TypeScript • Node.js
					</p>
				</div>
			</div>
		),
		{
			...size,
		}
	);
}
