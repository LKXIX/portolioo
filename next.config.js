/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
