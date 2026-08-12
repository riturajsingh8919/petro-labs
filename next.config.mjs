/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern formats via next/image optimizer
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  reactCompiler: true,
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
