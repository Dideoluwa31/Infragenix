/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ Enables static export mode
  images: {
    unoptimized: true, // ✅ Fixes Next/Image issues for static hosting
  },
  trailingSlash: true, // ✅ Ensures correct routing for static hosting
};

export default nextConfig;
