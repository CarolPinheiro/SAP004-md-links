const fs = require('fs');
const readPath = require('./src/readdirectories');
const readFile = require('./src/readFileAndExtractData');

function mdLinks(file, options = []) {
  return new Promise((resolved, rejected) => {
    fs.stat(file, (err, stats) => {
      if (err) rejected('Sorry, but there is no archive with that name in this directory');
      else if (stats.isDirectory()) {
        resolved(readPath(file, options));
      } else if (stats.isFile()) {
        resolved(readFile(file, options));
      }
    });
  });
}
module.exports = mdLinks;
