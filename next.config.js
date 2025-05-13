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
};

export default nextConfig;
