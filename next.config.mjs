/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: '/subnetting-game/',
  basePath: '/subnetting-game',
  output: 'export'
};

export default nextConfig;