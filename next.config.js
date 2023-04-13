/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const nextConfig = {
    reactStrictMode: false,
    images: {
        disableStaticImages: true,
    },
};

module.exports = withPlugins([withImages], nextConfig);
