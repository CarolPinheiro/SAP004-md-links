 const mdLinks = require('../index.js');

const { TestScheduler } = require("jest")

const checkLinks = require('../checkhttp.js')
const chalk = require('chalk')

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

// const result = {href:'https://nodejs.org/pt-br/', text:'Node js', file:'./test/text.md'}
// const resultError = {href:'heelolink', text:'Node js', file:'./test/text.md'}

// it('it should return only the name of the link, the reference and the absolute Path', () => {
//     console.log = jest.fn();
//     checkLinks(result);
//     expect(console.log).toHaveBeenCalledWith(`\n Link: ${chalk.blueBright.bold('https://nodejs.org/pt-br/')} \n Domínio: ${chalk.cyanBright.bold('Node js')} \n Path:${'./test/text.md'}`);;
//   });
// it('console.log the text "hello"', () => {
//     console.log = jest.fn();
//     checkLinks(resultError, '--validate');
//     expect(console.log).toHaveBeenCalledWith(`\n Link: ${chalk.blueBright.bold('https://nodejs.org/pt-br/')} \n Domínio: ${chalk.cyanBright.bold('Node js')} \n httpStatus:${chalk.green.bold(200)} \n Message:${chalk.yellow.bold('OK')}`);
//   });