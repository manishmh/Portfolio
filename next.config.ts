/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Add any experimental features here if needed
  },
  // Optimize for Vercel deployment
  images: {
    domains: [],
  },
};

export default nextConfig;
