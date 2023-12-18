/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "patudosvagos.pt", "static.patudosvagos.pt"],
  },
  experimental: { serverActions: true },
};

module.exports = nextConfig;
