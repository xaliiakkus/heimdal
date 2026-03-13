/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.haberkurt.com", pathname: "/**" },
      { protocol: "https", hostname: "rofi.io", pathname: "/**" },
    ],
  },
};

module.exports = nextConfig;
