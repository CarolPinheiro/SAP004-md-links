const fs = require('fs');

let arr = [];

function mdLinks(file) {
  //console.log(file)
  return new Promise((resolved, rejected) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        rejected(err.message);
      } else {

        const regex = data.match(/\[(.*?)\][\s]?\(((http[s]?:\/\/|www\.)\w.*)\)/gm);
        //console.log(regex)
        regex.forEach((i) => {
          arr.push({
            text: i.match(/\[(.*?)\][\s]?/)[1],
            href: i.match(/[\s]?\(((http[s]?:\/\/|www\.)\w.*)\)/)[1],
            fileName: file
          });
        });
        resolved(arr);
        arr = []
      }
    });
  });
}

module.exports = mdLinks;