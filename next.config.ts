import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.deductmyride.com" }],
        destination: "https://deductmyride.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
