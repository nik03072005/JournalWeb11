/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'libkart.s3.ap-south-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'chaiduarcollege.s3.ap-south-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
