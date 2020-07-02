const fs = require('fs');

let arr = [];

function mdLinks(file) {
  //console.log(file)
  return new Promise((resolved, rejected) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        rejected(err.message);
      } else {
        const regex = data.match(/\[([^\]]*)\]\(([^)]*)/gm);
        const textResult = regex.map((i) => {
          const result = i.match(/\[([^\]]*)\]\(([^)]*)/);
          return { text: result[1], href: result[2], file }
        });
        resolved(textResult);
        arr = []
      }
    });
  });
}

module.exports = mdLinks;