/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s22.anime-sama.fr",
      },
    ],
  },
};

export default nextConfig;
