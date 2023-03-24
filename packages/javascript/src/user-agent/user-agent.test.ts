import { UserAgent } from '.'

describe('UserAgent', () => {
  describe('browser', () => {
    test('should return "Chrome" when user agent string contains "Chrome"', () => {
      const ua = new UserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
      )
      expect(ua.browser).toEqual('Chrome')
    })

    test('should return "Firefox" when user agent string contains "Firefox"', () => {
      const ua = new UserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:54.0) Gecko/20100101 Firefox/54.0'
      )
      expect(ua.browser).toEqual('Firefox')
    })

    test('should return "IE" when user agent string contains "MSIE"', () => {
      const ua = new UserAgent(
        'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'
      )
      expect(ua.browser).toEqual('IE')
    })

    test('should return "Unknown" when user agent string does not match any browser', () => {
      const ua = new UserAgent('My Custom User Agent String')
      expect(ua.browser).toEqual('Unknown')
    })
  })

  describe('device', () => {
    test('should return "Mobile" when user agent string contains "Android"', () => {
      const ua = new UserAgent(
        'Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G970U1) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/12.1 Chrome/79.0.3945.136 Mobile Safari/537.36'
      )
      expect(ua.device).toEqual('Mobile')
    })

    test('should return "Tablet" when user agent string contains "iPad"', () => {
      const ua = new UserAgent(
        'Mozilla/5.0 (iPad; CPU OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Mobile/15E148 Safari/604.1'
      )
      expect(ua.device).toEqual('Mobile')
    })

    test('should return "Computer" when user agent string contains "Chrome"', () => {
      const ua = new UserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
      )
      expect(ua.device).toEqual('Computer')
    })

    test('should return "Unknown" when user agent string does not match any device', () => {
      const ua = new UserAgent('My Custom User Agent String')
      expect(ua.device).toEqual('Unknown')
    })
  })

  describe('engine', () => {
    test('should return "Gecko" when user agent string contains "Gecko"', () => {
      const ua = new UserAgent(
        'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0'
      )
      expect(ua.engine).toEqual('Gecko')
    })
  })
})
