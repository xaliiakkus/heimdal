/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.haberkurt.com", pathname: "/**" },
      { protocol: "https", hostname: "rofi.io", pathname: "/**" },
    ],
  },
  // Cloudflare Worker 3 MiB limiti: @vercel/og (resvg.wasm vb.) kullanılmıyor, stub ile değiştir
  webpack: (config, { isServer }) => {
    if (isServer) {
      const stub = path.join(__dirname, "lib/vercel-og-stub.js");
      config.resolve.alias = config.resolve.alias || {};
      config.resolve.alias["@vercel/og"] = stub;
      config.resolve.alias["next/dist/compiled/@vercel/og"] = stub;
      config.resolve.alias["next/dist/compiled/@vercel/og/index.edge.js"] = stub;
    }
    return config;
  },
};

module.exports = nextConfig;
