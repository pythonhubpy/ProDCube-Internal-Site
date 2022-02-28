/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	styledComponents: true,
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	images: {
		domains: ["images.unsplash.com"],
	},
};

module.exports = nextConfig;
