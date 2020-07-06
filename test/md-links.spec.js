const mdLinks = require('../index.js');
const checkLinks = require('../src/checkhttp');
const mock = require('./mock.js');

describe('mdLinks', () => {
  test('mdLinks should be a function', (done) => {
    expect(typeof mdLinks).toBe('function');
    done();
  });

  test('should return an array with the objects well defined', (done) => {
    mdLinks('./test/text.md')
      .then((result) => {
        expect(result).toEqual(mock.arrOfObj);
        done();
      });
  });
  test('should return the objects with their validation', (done) => {
    mdLinks('./test/text.md', '--validate')
      .then((result) => {
        expect(result).toEqual(mock.arrOfObjValidated);
        done();
      });
  });
  test('should return the objects of all the files in the directory with their validation', (done) => {
    mdLinks('test/', '--validate')
      .then((result) => {
        expect(result).toEqual(mock.arrOfObjValidated);
        done();
      });
  });

  test('should return the object with all the files in the directory e2', (done) => {
    mdLinks('test/')
      .then((result) => {
        expect(result).toEqual([mock.arrOfObj, mock.arrOfObj]);
        done();
      });
  });

  test('erro', (done) => {
    mdLinks('./tests/text.md')
      .catch((err) => {
        expect(err).toBe('Sorry, but there is no archive with that name in this directory');
        done();
      });
  });
});

describe('checkLinks', () => {
  test('Http link incorrect', (done) => {
    checkLinks(mock.checkLinksObj, '../test/text.md')
      .then((result) => {
        expect(result).toEqual({
          file: 'C:\\Users\\ceopi\\Documents\\Laboratoria\\test\\text.md',
          href: 'http://noddddejs.org/pt-br/',
          message: 'getaddrinfo ENOTFOUND noddddejs.org',
          statusCode: 404,
          text: 'Node js',
        });
        done();
      });
  });
  test('Https link incorrect', (done) => {
    checkLinks(mock.checkLinksObjHttps, '../test/text.md')
      .then((result) => {
        expect(result).toEqual({
          file: 'C:\\Users\\ceopi\\Documents\\Laboratoria\\test\\text.md',
          href: 'https://noddddejs.org/pt-br/',
          message: 'getaddrinfo ENOTFOUND noddddejs.org',
          statusCode: 404,
          text: 'Node js',
        });
        done();
      });
  });
  test('Return an Error when the link is bad formatted', (done) => {
    checkLinks(['', '', 'www.google.com'], '../test/text.md')
      .catch((err) => {
        expect(err).toBe('The link is bad formatted');
        done();
      });
  });
});
