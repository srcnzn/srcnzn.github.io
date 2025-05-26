/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Tell Next.js where to find pages
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // No basePath needed for user.github.io sites
}

export default nextConfig
