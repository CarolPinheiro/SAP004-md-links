const readdir = require('readdir-recursive');
const readFile = require('./readFileAndExtractData');


function readPath(path, options) {
  return new Promise((resolved) => {
    readdir.file(path, (file) => {
      if (/\.md/g.test(file) && !/node_modules/g.test(file)) {
        resolved(readFile(file, options))
      }
    })
  })
}
module.exports = readPath;