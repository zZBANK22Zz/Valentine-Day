/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media1.giphy.com"], // ✅ Allow Giphy images
  },
};

export default nextConfig;
