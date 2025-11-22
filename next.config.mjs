/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    // add 100 alongside 75
    qualities: [100, 75],
  },
  reactCompiler: true,
};

export default nextConfig;
