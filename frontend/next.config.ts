import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone', // Added for the Docker build I prepared earlier
};

export default nextConfig;
