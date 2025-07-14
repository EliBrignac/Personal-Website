/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: Add basePath if you're deploying to a subdirectory
  // basePath: '/your-repo-name',
  // Optional: Enable React Strict Mode
  reactStrictMode: true,
}

module.exports = nextConfig
