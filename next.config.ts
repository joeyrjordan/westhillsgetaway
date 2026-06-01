import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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