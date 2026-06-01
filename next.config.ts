import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/guide",
        destination: "https://whg1.nicepage.io/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;