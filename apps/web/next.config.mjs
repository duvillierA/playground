import createNextIntlPlugin from 'next-intl/plugin'
import createNextBundleAnalyzer from '@next/bundle-analyzer'

const withNextIntl = createNextIntlPlugin('./src/lib/i18n.ts')
const withBundleAnalyzer = createNextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/en'
      }
    ]
  },
  experimental: {
    optimizePackageImports: ['@repo/ui']
  },
  transpilePackages: ['@repo/ui', '@repo/lib']
}

export default withBundleAnalyzer(withNextIntl(nextConfig))
