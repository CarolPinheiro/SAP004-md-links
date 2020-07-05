const fs = require('fs');

function mdLinks(file, options) {
  return new Promise((resolved, rejected) => {
    fs.stat(file, (err, stats) => {
      if (err) return err
      else if (stats.isDirectory()) {
        readPath(file, mdLinks)
      }
      else if (stats.isFile()) {
        fs.readFile(file, 'utf-8', (err, data) => {
          if (err) {
            rejected(err.message);
          } else {
            const regex = data.match(/\[([^\]]*)\]\(([^)]*)/gm);
            const validate = regex.map(i => {
              const result = i.match(/\[([^\]]*)\]\(([^)]*)/);
              return checkIfALinkExist(result, file)
            })
            const textResult = regex.map((i) => {
              const result = i.match(/\[([^\]]*)\]\(([^)]*)/);
              return { text: result[1], href: result[2], file, }
            });
            console.log(textResult)
            options === '--validate' ? resolved(Promise.all(validate)) : resolved(Promise.resolve(textResult))

          }
        })
      }
    });
  })
}
module.exports = mdLinks;