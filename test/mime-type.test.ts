import MimeType from '../src/mime-type'

describe('Mime Type', () => {
  test('should return the equivalent of the mime type', () => {
    const mimetype = new MimeType('application/pdf')

    expect(mimetype.description).toBe('Adobe Portable Document Format')
  })

  test('should return the equivalent of the file extension', () => {
    const mimetype = new MimeType('.pdf')

    expect(mimetype.type).toBe('application/pdf')
  })
})
