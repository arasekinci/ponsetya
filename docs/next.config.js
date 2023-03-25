const withNextra = require('nextra')({
  reactStrictMode: true,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra()
