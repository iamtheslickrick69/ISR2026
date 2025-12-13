/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-7824dae2ffd24193b52760c54972be1d.r2.dev',
      },
    ],
  },
}

export default nextConfig
