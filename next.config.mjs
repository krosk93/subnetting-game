/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: '/subnetting-game/',
  basePath: '/subnetting-game'
};

export default nextConfig;