/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ["luxlimoservice.ca", "placehold.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "luxlimoservice.ca",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },

  // Add redirects/rewrites for the G7 page to handle different URL patterns
  async rewrites() {
    return [
      // Handle multiple possible URL patterns
      {
        source: "/g7-summit-transfers",
        destination: "/g7-transfers",
      },
      {
        source: "/g7",
        destination: "/g7-transfers",
      },
    ];
  },
};

export default nextConfig;
