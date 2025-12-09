import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "upload.wikimedia.org",
      "seeklogo.com",
    ], // ✅ allow Unsplash images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
      },
       { protocol: "https", 
        hostname: "images.unsplash.com" 
      }
    ],
  },
};

export default nextConfig;
