import type { DocsThemeConfig } from 'nextra-theme-docs'
import type { FC } from 'react'

import { Code } from '@/components/mdx'

const config: DocsThemeConfig = {
  logo: <strong>PONSETYA</strong>,
  project: {
    link: 'https://github.com/arasekinci/ponsetya',
  },
  docsRepositoryBase: 'https://github.com/arasekinci/ponsetya/tree/main/docs',
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  components: {
    // Nextra types MDX components as prop-less; Code receives the code props at runtime
    code: Code as FC,
  },
  footer: {
    text: 'Copyright 2023',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Popnsetya',
    }
  },
}

export default config
