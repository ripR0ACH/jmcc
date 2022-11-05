/** @type {import('next').NextConfig} */
// below is the original code for this file
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

export default nextConfig;