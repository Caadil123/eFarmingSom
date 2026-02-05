/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "dashboard.efarmingsom.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
