/** @type {import('next').NextConfig} */
// below is the original code for this file
// const nextConfig = {
//   reactStrictMode: true,
// }

const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

module.exports = nextConfig