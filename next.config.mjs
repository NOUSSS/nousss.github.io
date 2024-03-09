/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "s22.anime-sama.fr",
      },
    ],
  },
};

export default nextConfig;
