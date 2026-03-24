/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Explicitly use Pages Router only — src/app/ must not exist
  // If src/app/ reappears it causes "Cannot find module './404.js'" on every hot reload
  images: {
    domains: ["cdn.sanity.io"],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable filesystem cache in dev to prevent stale chunk 404s
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;
