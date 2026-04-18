/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  turbopack: {
    root: import.meta.dirname,
  },
}

export default nextConfig
