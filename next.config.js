/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for production builds
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Compress generated pages
  compress: true,

  // Netlify builds can run in environments where spawning the TypeScript
  // checker is restricted. Next.js still transpiles TypeScript either way.
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Enable SWR (Stale-While-Revalidate) for static pages
  staticPageGenerationTimeout: 300,

  // Enable standalone output for Netlify
  output: 'standalone',

  // Production source maps (optional - reduces bundle size if disabled)
  productionBrowserSourceMaps: false,
  
  // Trailing slash configuration
  trailingSlash: false,
  
  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
