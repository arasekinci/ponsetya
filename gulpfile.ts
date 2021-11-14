import { execSync } from 'child_process'
import fs from 'fs-extra'
import gulp from 'gulp'

import { compilerOptions } from './tsconfig.json'
import pkg from './package.json'

export async function test(): Promise<void> {
  execSync('jest', {
    stdio: 'inherit',
  })
}

export async function lint(): Promise<void> {
  execSync('eslint .', {
    stdio: 'inherit',
  })
}

export async function build(): Promise<void> {
  test()

  execSync(`rm -rf ${compilerOptions.outDir}`)
  execSync('tsc --build')

  gulp
    .src(['README.md', 'CHANGELOG.md', 'LICENSE'])
    .pipe(gulp.dest(compilerOptions.outDir))

  fs.writeFileSync(
    `${compilerOptions.outDir}/package.json`,
    JSON.stringify({ ...pkg, private: false }, null, 2)
  )
}
