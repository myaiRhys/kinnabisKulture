/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/kinnabisKulture',
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
