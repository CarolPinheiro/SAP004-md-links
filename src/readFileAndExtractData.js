const fs = require('fs');
const path = require('path');
const checkIfALinkExist = require('./checkhttp');

function readFile(file, options) {
  return new Promise((resolved, rejected) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        rejected(err.message);
      }
      const regex = data.match(/\[([^\]]*)\]\((http[s]?[^)]*)/gm);
      const validate = regex.map((i) => {
        const result = i.match(/\[([^\]]*)\]\(([^)]*)/);
        return checkIfALinkExist(result, path.resolve(file));
      });
      const textResult = regex.map((i) => {
        const result = i.match(/\[([^\]]*)\]\(([^)]*)/);
        return { text: result[1], href: result[2], file: path.resolve(file) };
      });
      if (options.includes('--validate')) {
        resolved(Promise.all(validate));
      } else {
        resolved(Promise.resolve(textResult));
      }
    });
  });
}

module.exports = readFile;
