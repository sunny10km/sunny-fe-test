/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ["cat-10k1m.s3.ap-northeast-2.amazonaws.com"],
  },
  experimental: {
      missingSuspenseWithCSRBailout: false,
  },
};
export default nextConfig;
