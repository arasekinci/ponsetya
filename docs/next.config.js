/** @type {import('next').NextConfig} */
const nextraConfig = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})()

const nextConfig = {
  ...nextraConfig,
  reactStrictMode: true,
  images: { unoptimized: true },
}

module.exports = nextConfig
