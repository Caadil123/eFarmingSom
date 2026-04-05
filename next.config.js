/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true, // required for static export
  },

  reactStrictMode: true,

  // optional but helps avoid some stale issues
  generateBuildId: async () => {
    return Date.now().toString();
  },
};

module.exports = nextConfig;