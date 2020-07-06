const arrOfObj = [
  {
    href: 'http://nodejs.org/pt-br/',
    text: 'Node js',
    file: 'C:\\Users\\ceopi\\Documents\\Laboratoria\\SAP004-md-links\\test\\text.md',
  },
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 do Chrome',
    file: 'C:\\Users\\ceopi\\Documents\\Laboratoria\\SAP004-md-links\\test\\text.md',
  },
];

const arrOfObjValidated = [
  {
    href: 'http://nodejs.org/pt-br/',
    text: 'Node js',
    file: 'C:\\Users\\ceopi\\Documents\\Laboratoria\\SAP004-md-links\\test\\text.md',
    message: 'Moved Permanently',
    statusCode: 301,
  },
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 do Chrome',
    file: 'C:\\Users\\ceopi\\Documents\\Laboratoria\\SAP004-md-links\\test\\text.md',
    message: 'Moved Permanently',
    statusCode: 301,
  },
];

module.exports = { arrOfObj, arrOfObjValidated };
