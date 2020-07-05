const mdLinks = require('../index.js');

describe('mdLinks', () => {
  test('mdLinks should be a function', (done) => {
    expect(typeof mdLinks).toBe('function');
    done()
  })

  test('should return an array with the objects well defined', (done) => {
    mdLinks('./test/text.md')
      .then(result => {
        expect(result).toEqual([
          { href: 'https://nodejs.org/pt-br/', text: 'Node js', file: './test/text.md' },
          { href: 'https://developers.google.com/v8/', text: 'motor de JavaScript V8 do Chrome', file: './test/text.md' }
        ])
        done();
      })
  })
  test('should return the objects with their validation', (done) => {
    mdLinks('./test/text.md', '--validate')
      .then(result => {
        expect(result).toEqual([
          { href: 'https://nodejs.org/pt-br/', text: 'Node js', file: './test/text.md', message: "OK", statusCode: 200, },
          { href: 'https://developers.google.com/v8/', text: 'motor de JavaScript V8 do Chrome', file: './test/text.md', message: "Moved Permanently", statusCode: 301 }
        ])
        done();
      })
  })
  test('should return the objects of all the files in the directory with their validation', (done) => {
    mdLinks('test/', '--validate')
      .then(result => {
        expect(result).toEqual([
          { href: 'https://nodejs.org/pt-br/', text: 'Node js', file: 'test\\text.md', message: "OK", statusCode: 200, },
          { href: 'https://developers.google.com/v8/', text: 'motor de JavaScript V8 do Chrome', file: 'test\\text.md', message: "Moved Permanently", statusCode: 301 }
        ])
        done();
      })
  })

  test('should return the object with all the files in the directory', (done) => {
    mdLinks('test/')
      .then(result => {
        expect(result).toEqual([[{
          "file": "test\\text.md",
          "href": "https://nodejs.org/pt-br/",
          "text": "Node js"
        },
        {
          "file": "test\\text.md",
          "href": "https://developers.google.com/v8/",
          "text": "motor de JavaScript V8 do Chrome"
        }],
        [{
          "file": "test\\text.md",
          "href": "https://nodejs.org/pt-br/",
          "text": "Node js"
        }, {
          "file": "test\\text.md",
          "href": "https://developers.google.com/v8/",
          "text": "motor de JavaScript V8 do Chrome"
        }]]
        )
        done();
      })
  })



  test('erro', (done) => {
    mdLinks('./tests/text.md')
      .catch(err => {
        expect(err).toBe("Sorry, but there's no archive with that name in this directory");
        done()
      })
  })
})
