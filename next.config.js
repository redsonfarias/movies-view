/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname:
          '/wikipedia/pt/thumb/5/53/The_Amazing_Spider-Man_Poster.jpg/233px-The_Amazing_Spider-Man_Poster.jpg',
      },
    ],
  },
}

module.exports = nextConfig
