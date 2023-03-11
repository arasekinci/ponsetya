/* eslint-disable @typescript-eslint/no-explicit-any */
import { Environment } from '.'

describe('Environment', () => {
  let environment: Environment

  beforeEach(() => {
    environment = new Environment()
  })

  test('should detect browser environment', () => {
    expect(environment.browser).toBe(true)
  })

  test('should detect JSDOM environment', () => {
    const ctx = global as any

    // Mock the window object with a name property set to 'nodejs'
    ctx.window = { name: 'nodejs' }
    expect(environment.jsdom).toBe(true)

    // Mock the navigator object with a userAgent containing 'Node.js'
    ctx.window = undefined
    ctx.navigator = { userAgent: 'Node.js' }
    expect(environment.jsdom).toBe(true)

    // Mock the navigator object with a userAgent containing 'jsdom'
    ctx.navigator = { userAgent: 'jsdom' }
    expect(environment.jsdom).toBe(true)

    // Clean up global variables
    ctx.navigator = undefined
  })

  test('should detect Node.js environment', () => {
    expect(environment.node).toBe(true)
  })

  test('should detect worker environment', () => {
    const ctx = global as any

    expect(environment.worker).toBe(false)

    // Mock the self object with a constructor property with a name property set to 'DedicatedWorkerGlobalScope'
    ctx.self = {
      constructor: { name: 'DedicatedWorkerGlobalScope' },
    }

    expect(environment.worker).toBe(false)

    // Clean up global variables
    ctx.self = undefined
  })
})
