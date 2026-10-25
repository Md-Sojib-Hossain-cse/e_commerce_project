import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    images: {
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "localhost", port: "3000" },
      { protocol: "http", hostname: "127.0.0.1" },
    ],
  },
}

export default nextConfig
