import { MimeType } from '.'

describe('MimeType', () => {
  describe('constructor', () => {
    test('should initialize the properties correctly when a valid type is provided', () => {
      const mime = new MimeType('application/json')

      expect(mime.type).toBe('application/json')
      expect(mime.charset).toBe('UTF-8')
      expect(mime.source).toBe('iana')
      expect(mime.compressible).toBe(true)
      expect(mime.extension).toBe('json')
      expect(mime.extensions).toEqual(['json', 'map'])
    })

    test('should initialize the properties correctly when an invalid type is provided', () => {
      const mime = new MimeType('invalid/type')

      expect(mime.type).toBeUndefined()
      expect(mime.charset).toBeUndefined()
      expect(mime.source).toBeUndefined()
      expect(mime.compressible).toBeUndefined()
      expect(mime.extension).toBeUndefined()
      expect(mime.extensions).toBeUndefined()
    })
  })

  describe('extension', () => {
    test('should return the extension when a valid type is provided', () => {
      const extension = MimeType.extension('application/json')

      expect(extension).toBe('json')
    })

    test('should return undefined when an invalid type is provided', () => {
      const extension = MimeType.extension('invalid/type')

      expect(extension).toBeUndefined()
    })
  })

  describe('extensions', () => {
    test('should return the extensions when a valid type is provided', () => {
      const extensions = MimeType.extensions('application/json')

      expect(extensions).toEqual(['json', 'map'])
    })

    test('should return undefined when an invalid type is provided', () => {
      const extensions = MimeType.extensions('invalid/type')

      expect(extensions).toBeUndefined()
    })
  })

  describe('find', () => {
    test('should return the first MimeTypeEntry that matches the predicate', () => {
      const result = MimeType.find(
        (mimetype) => mimetype.type === 'application/json'
      )

      expect(result).toEqual({
        type: 'application/json',
        charset: 'UTF-8',
        source: 'iana',
        compressible: true,
        extension: 'json',
        extensions: ['json', 'map'],
      })
    })

    test('should return undefined when no matching MimeTypeEntry is found', () => {
      const result = MimeType.find(
        (mimetype) => mimetype.type === 'invalid/type'
      )

      expect(result).toBeUndefined()
    })
  })

  describe('filter', () => {
    test('should return an array of MimeTypeEntry objects that match the predicate', () => {
      const results = MimeType.filter((mimetype) => mimetype.extension === 'js')

      expect(results).toEqual([
        {
          type: 'application/javascript',
          charset: 'UTF-8',
          source: 'iana',
          compressible: true,
          extension: 'js',
          extensions: ['js', 'mjs'],
        },
      ])
    })
  })
})
