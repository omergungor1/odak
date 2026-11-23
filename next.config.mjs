/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    // Vercel Hobby görsel optimizasyonunu 402 ile kesiyor; dosyalar public altında hazır.
    unoptimized: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
