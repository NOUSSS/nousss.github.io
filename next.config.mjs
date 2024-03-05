/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/",
  output: "export",
  reactStrictMode: true,

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
