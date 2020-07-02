const readdir = require('readdir-recursive');
const checkLinks = require('./checkhttp.js')

function readPath(readPath, validation) {
    readdir.file(readPath, (file) => {
        if (/\.md/g.test(file) && !/node_modules/g.test(file)) {
            mdLinks(file)
                .then((result) => {
                    result.forEach((obj) => {
                        checkLinks(obj, validation)
                    })
                })

        }
    }
    )

}

module.exports = readPath;