import type { NextConfig } from "next";

const nextConfig= {
  async redirects() {
    return [
      {
        source: '/about',
        destination: 'https://api.farcaster.xyz/miniapps/hosted-manifest/01998edd-1e2c-20b2-4cfc-f55969d4903a',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
