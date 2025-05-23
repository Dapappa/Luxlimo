import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["luxlimoservice.ca"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "luxlimoservice.ca",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
