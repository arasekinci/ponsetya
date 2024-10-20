import type { FC } from 'react'
import type { DocsThemeConfig } from 'nextra-theme-docs'

import { Code } from '@/components/mdx'

interface ThemeConfig extends DocsThemeConfig {
  components?: Record<string, FC<any>>
}

const config: ThemeConfig = {
  logo: <strong>PONSETYA</strong>,
  project: {
    link: 'https://github.com/arasekinci/ponsetya',
  },
  docsRepositoryBase: 'https://github.com/arasekinci/ponsetya/tree/main/docs',
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  components: {
    code: Code,
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
