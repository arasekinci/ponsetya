/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, test, expect } from 'bun:test'
import { env } from '.'

describe('Environment', () => {
  test('should detect browser environment', () => {
    expect(env.browser).toBe(true)
  })

  test('should detect JSDOM environment', () => {
    const ctx = global as any

    // Mock the window object with a name property set to 'nodejs'
    ctx.window = { name: 'nodejs' }
    expect(env.jsdom).toBe(true)

    // Mock the navigator object with a userAgent containing 'Node.js'
    ctx.window = undefined
    const original = Object.getOwnPropertyDescriptor(ctx, 'navigator')
    const setNavigator = (value: unknown) =>
      Object.defineProperty(ctx, 'navigator', { value, configurable: true })
    setNavigator({ userAgent: 'Node.js' })
    expect(env.jsdom).toBe(true)

    // Mock the navigator object with a userAgent containing 'jsdom'
    setNavigator({ userAgent: 'jsdom' })
    expect(env.jsdom).toBe(true)

    // Clean up global variables
    ctx.window = ctx
    if (original) Object.defineProperty(ctx, 'navigator', original)
  })

  test('should detect Node.js environment', () => {
    expect(env.node).toBe(true)
  })

  test('should detect worker environment', () => {
    const ctx = global as any

    expect(env.worker).toBe(false)

    // Mock the self object with a constructor property with a name property set to 'DedicatedWorkerGlobalScope'
    ctx.self = {
      constructor: { name: 'DedicatedWorkerGlobalScope' },
    }

    expect(env.worker).toBe(true)

    // Clean up global variables
    ctx.self = ctx
  })
})
