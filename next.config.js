/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🔹 Image configuration
  images: {
    remotePatterns: [
      // Unsplash images
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },

      // Images uploaded & served by the dashboard
      {
        protocol: "https",
        hostname: "dashboard.efarmingsom.com",
        pathname: "/uploads/**",
      },
    ],
  },

  // 🔹 Proxy dashboard API to avoid CORS
  async rewrites() {
    return [
      {
        source: "/admin-api/:path*",
        destination: "https://dashboard.efarmingsom.com/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
