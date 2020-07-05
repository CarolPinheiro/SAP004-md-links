const readdir = require('readdir-recursive');

const readFile = require('./readFileAndExtractData');

const arr = [];

function readPath(path, options = []) {
  return new Promise((resolved) => {
    readdir.file(path, (file) => {
      if (/\.md/g.test(file) && !/node_modules/g.test(file)) {
        arr.push(file);
        setTimeout(() => {
          if (arr.length > 1) {
            resolved(Promise.all(arr.map((i) => readFile(i, options))));
          } else {
            resolved(readFile(arr[0], options));
          }
        }, 3000);
      }
    });
  });
}

module.exports = readPath;
