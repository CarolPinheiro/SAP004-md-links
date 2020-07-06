const path = require('path');

const arrOfObj = [
  {
    href: 'http://nodejs.org/pt-br/',
    text: 'Node js',
    file: path.resolve('test', 'text.md'),
  },
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 do Chrome',
    file: path.resolve('test', 'text.md'),
  },
];

const arrOfObjValidated = [
  {
    href: 'http://nodejs.org/pt-br/',
    text: 'Node js',
    file: path.resolve('test', 'text.md'),
    message: 'Moved Permanently',
    statusCode: 301,
  },
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 do Chrome',
    file: path.resolve('test', 'text.md'),
    message: 'Moved Permanently',
    statusCode: 301,
  },
];

const checkLinksObj = ['[Node js](http://noddddejs.org/pt-br/)', 'Node js', 'http://noddddejs.org/pt-br/'];
const checkLinksObjHttps = ['[Node js](https://noddddejs.org/pt-br/)', 'Node js', 'https://noddddejs.org/pt-br/'];

module.exports = {
  arrOfObj, arrOfObjValidated, checkLinksObj, checkLinksObjHttps,
};
