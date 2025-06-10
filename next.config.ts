import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			new URL("https://placehold.co/*"),
			new URL("https://static.tvmaze.com/**"),
		],
		dangerouslyAllowSVG: true,
		formats: ["image/webp", "image/avif"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
		optimizeCss: true,
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
	headers: async () => [
		{
			source: "/:path*",
			headers: [
				{
					key: "Cache-Control",
					value: "public, max-age=3600, immutable",
				},
			],
		},
		{
			source: "/api/:path*",
			headers: [
				{
					key: "Cache-Control",
					value: "no-store, must-revalidate",
				},
			],
		},
	],
};

export default withBundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
	openAnalyzer: true,
	analyzerMode: "static",
})(nextConfig);
