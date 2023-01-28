import { execSync } from 'child_process'

import typedoc from './typedoc.json'
import jest from './jest.config'

async function cmd(command: string): Promise<void> {
  execSync(command, {
    stdio: 'inherit',
  })
}

export async function lint(): Promise<void> {
  cmd('yarn eslint .')
}

export async function test(): Promise<void> {
  cmd('yarn jest test --watch')
}

export async function start(): Promise<void> {
  await build()

  const path = process.cwd()
  const open =
    process.platform === 'darwin'
      ? 'open'
      : process.platform === 'win32'
      ? 'start'
      : 'xdg-open'

  cmd(`${open} ${path}/${typedoc.out}/index.html`)
  cmd(`${open} ${path}/${jest.coverageDirectory}/lcov-report/index.html`)
}

export async function build(): Promise<void> {
  cmd('yarn tsc')
  cmd('yarn tsc --module commonjs --outDir dist/cjs')
  cmd('yarn tsc --module es6 --outDir dist/esm')
  cmd('yarn typedoc')
}
