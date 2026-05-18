import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/ai_interview_generator.github.io" : "",
  assetPrefix: isProd ? "/ai_interview_generator.github.io/" : "",
};

export default nextConfig;
