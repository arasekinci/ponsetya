/**
 * Utility class for detecting the current environment where the code is running.
 * Can detect if the code is running in a browser, node.js, JSDOM or a web worker.
 */

export class Environment {
  /**
   * Indicates whether the code is running in a browser environment.
   *
   * @returns `true` if running in a browser environment, `false` otherwise.
   */
  get browser(): boolean {
    return (
      typeof window !== 'undefined' && typeof window.document !== 'undefined'
    )
  }

  /**
   * Indicates whether the code is running in a JSDOM environment.
   *
   * @returns `true` if running in a JSDOM environment, `false` otherwise.
   */
  get jsdom(): boolean {
    return (
      (typeof window !== 'undefined' && window.name === 'nodejs') ||
      (typeof navigator !== 'undefined' &&
        (navigator.userAgent.includes('Node.js') ||
          navigator.userAgent.includes('jsdom')))
    )
  }

  /**
   * Indicates whether the code is running in a Node.js environment.
   *
   * @returns `true` if running in a Node.js environment, `false` otherwise.
   */
  get node(): boolean {
    return (
      typeof process !== 'undefined' &&
      process.versions != null &&
      process.versions.node != null
    )
  }

  /**
   * Indicates whether the code is running in a worker environment.
   *
   * @returns `true` if running in a worker environment, `false` otherwise.
   */
  get worker(): boolean {
    return (
      typeof self === 'object' &&
      self.constructor &&
      self.constructor.name === 'DedicatedWorkerGlobalScope'
    )
  }
}
