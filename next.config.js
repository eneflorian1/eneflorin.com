/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Removed for VPS SSR support
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
