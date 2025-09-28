import type { NextConfig } from "next";

const nextConfig= {
  async redirects() {
    return [
      {
        source: '/about',
        destination: 'https://api.farcaster.xyz/miniapps/hosted-manifest/01998ea0-ea9f-0354-adb2-3f8e2371e2bc',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
