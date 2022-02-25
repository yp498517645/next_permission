/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    };
    return config;
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
