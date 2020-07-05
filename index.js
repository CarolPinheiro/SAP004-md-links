const fs = require('fs');
const readPath = require('./readdirectories');
const readFile = require('./readFileAndExtractData');

function mdLinks(file, options=[]) {
  return new Promise((resolved, rejected) => {
    fs.stat(file, (err, stats)=> {
      if(err)  rejected(err)
      else if(stats.isDirectory()) {
        resolved(readPath(file, options))
      }
      else if(stats.isFile()) {
        resolved(readFile(file, options))
      }
    });
  })
}
module.exports = mdLinks;