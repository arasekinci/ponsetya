import type {
  UserAgentBrowser,
  UserAgentDevice,
  UserAgentEngine,
  UserAgentOperatingSystem,
} from './user-agent.type'

/**
 * Represents a user agent string and provides methods
 * for parsing it to determine the browser,
 * device, engine, and operating system.
 *
 * @see {@link https://arasekinci.github.io/ponsetya/core/references/user-agent | UserAgent} for more information.
 */

export class UserAgent {
  private readonly ua: string

  /**
   * Creates a new instance of the UserAgent class.
   *
   * @param userAgent - An optional user agent string. If not specified, the constructor will attempt to use the user agent string from the window.navigator object.
   * @throws An error if the UserAgent class is instantiated on the server without a user agent string.
   */
  constructor(userAgent?: string) {
    this.ua = userAgent || this.getUserAgent()
  }

  private getNavigatorInstance(): Navigator | false {
    if (typeof window !== 'undefined' && window.navigator) {
      return window.navigator
    }

    return false
  }

  private getUserAgent(): string {
    const navigator = this.getNavigatorInstance()

    if (navigator) {
      return navigator.userAgent
    }

    throw new Error(
      'UserAgent must be given while detecting device on the server.',
    )
  }

  /**
   * Gets the browser name based on the user agent string.
   */
  get browser(): UserAgentBrowser {
    if (/Chrome/i.test(this.ua)) {
      return 'Chrome'
    } else if (/Dolphin/i.test(this.ua)) {
      return 'Dolphin'
    } else if (/Edge/i.test(this.ua)) {
      return 'Edge'
    } else if (/Firefox|FxiOS/i.test(this.ua)) {
      return 'Firefox'
    } else if (/IEMobile|MSIE|Trident/i.test(this.ua)) {
      return 'IE'
    } else if (/MIUI Browser/i.test(this.ua)) {
      return 'MI'
    } else if (/OPR|Opera/i.test(this.ua)) {
      return 'Opera'
    } else if (/Opera Mini/i.test(this.ua)) {
      return 'OperaMini'
    } else if (/^((?!chrome|android).)*safari/i.test(this.ua)) {
      return 'Safari'
    } else if (/Yandex/i.test(this.ua)) {
      return 'Yandex'
    } else {
      return 'Unknown'
    }
  }

  /**
   * Gets the device type based on the user agent string.
   */
  get device(): UserAgentDevice {
    const mobile = ['Android', 'iOS', 'OperaMini', 'WindowsPhone']
    const desktop = [
      'Chrome',
      'Dolphin',
      'Edge',
      'Firefox',
      'IE',
      'MI',
      'Opera',
      'Safari',
      'Yandex',
    ]

    if (mobile.includes(this.os)) {
      return 'Mobile'
    } else if (
      this.ua.match(
        /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i,
      )
    ) {
      return 'Tablet'
    } else if (desktop.includes(this.browser)) {
      return 'Computer'
    } else {
      return 'Unknown'
    }
  }

  /**
   * Gets the rendering engine name based on the user agent string.
   */
  get engine(): UserAgentEngine {
    if (/Gecko/.test(this.ua)) {
      return 'Gecko'
    } else if (/AppleWebKit/.test(this.ua)) {
      return 'WebKit'
    } else if (/Presto/.test(this.ua)) {
      return 'Presto'
    } else if (/Trident/.test(this.ua)) {
      return 'Trident'
    } else if (/Blink/.test(this.ua)) {
      return 'Blink'
    } else {
      return 'Unknown'
    }
  }

  /**
   * Gets the operating system name based on the user agent string.
   */
  get os(): UserAgentOperatingSystem {
    if (/Android/i.test(this.ua)) {
      return 'Android'
    } else if (/iPhone|iPad|iPod/i.test(this.ua)) {
      return 'iOS'
    } else if (/Macintosh/i.test(this.ua)) {
      return 'MacOS'
    } else {
      return 'Unknown'
    }
  }

  /**
   * Returns the user agent string.
   */
  toString() {
    return this.ua
  }
}
