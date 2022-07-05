/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		images: {
			allowFutureImage: true,
		},
	},
	images: {
		domains: ["s3.us-west-2.amazonaws.com"],
	},
};

module.exports = nextConfig;
