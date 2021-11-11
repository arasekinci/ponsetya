import { execSync } from 'child_process'

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
  execSync('rm -rf ./dist && tsc --build', {
    stdio: 'inherit',
  })

  test()
}
