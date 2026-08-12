/** @type {import('next').NextConfig} */
const nextConfig = {
  // Assets are already compressed WebP — skip runtime sharp work on the VPS
  images: {
    unoptimized: true,
    qualities: [75, 80, 100],
  },
  reactCompiler: true,
  // Faster production responses behind Docker / reverse proxy
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
