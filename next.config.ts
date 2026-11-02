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
  async headers() {
    // HSTS is already sent by Vercel (max-age=63072000), so it is not
    // duplicated here. CSP is intentionally not set: a strict CSP breaks
    // Next.js hydration and Vercel Analytics inline scripts, and CSP is
    // not a ranking factor.
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
