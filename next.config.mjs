/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cmahanali.navaxcollege.com',
        },
      ],
    },
};

export default nextConfig;
