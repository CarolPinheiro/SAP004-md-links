const checkIfALinkExist = require('./checkhttp');
const fs = require('fs');

function readFile(file, options) {
    return new Promise((resolved) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {
                rejected(err.message);
            }
            const regex = data.match(/\[([^\]]*)\]\((https[^)]*)/gm);
            const validate = regex.map(i => {
                const result = i.match(/\[([^\]]*)\]\(([^)]*)/);
                return checkIfALinkExist(result, file)
            })
            const textResult = regex.map((i) => {
                const result = i.match(/\[([^\]]*)\]\(([^)]*)/);
                return { text: result[1], href: result[2], file }
            });
            options.includes('--validate') ? resolved(Promise.all(validate)) : resolved(Promise.resolve(textResult))
        })
    })
}

module.exports = readFile;