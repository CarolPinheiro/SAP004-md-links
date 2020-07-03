const mdLinks = require('../index.js');

describe('mdLinks', () => {
    test('mdLinks should be a function', (done) => {
        expect(typeof mdLinks).toBe('function');
        done()
    })
    
    test('should return an array with the objects well defined', (done) => {
        mdLinks('./test/text.md')
        .then( result => {
            expect(result).toEqual([
                {href:'https://nodejs.org/pt-br/', text:'Node js', file:'./test/text.md'},
                {href:'https://developers.google.com/v8/', text:'motor de JavaScript V8 do Chrome', file: './test/text.md'}
            ])
            done();
        })
    })

    test('erro', (done) => {
        mdLinks('./tests/text.md')
        .catch( err => {
            expect(err).toEqual("ENOENT: no such file or directory, open 'C:\\Users\\ceopi\\Documents\\Laboratoria\\SAP004-md-links\\tests\\text.md'");
            done()
        })
    })
})