import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			new URL("https://placehold.co/*"),
			new URL("https://static.tvmaze.com/**"),
		],
		dangerouslyAllowSVG: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
