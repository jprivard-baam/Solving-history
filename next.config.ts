import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    imageSizes: [32, 48, 64, 96, 128, 256, 384, 416, 832],
  },
};

export default nextConfig;
