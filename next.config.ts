import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  generateEtags: false,
  reactStrictMode: true,
  images: { unoptimized: true },
  output: 'export',
};

export default nextConfig;
