/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    webpack: (config) => {
      config.cache = false; // Disable Webpack caching
      return config;
    },
  };
