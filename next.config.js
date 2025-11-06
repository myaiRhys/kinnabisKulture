/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/kinnabisKulture' : '',
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
