import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.ctfassets.net'], // Contentfulの画像ドメインを許可
  },
};

export default nextConfig;
