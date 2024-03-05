/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",

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
