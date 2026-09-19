import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Export statique : pas de serveur d'images. Sans ceci, la photo de l'auteur pointait
  // vers /_next/image/ (404 sur 488 pages).
  images: { unoptimized: true },
};

export default nextConfig;
