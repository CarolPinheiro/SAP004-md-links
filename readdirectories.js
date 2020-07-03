const readdir = require('readdir-recursive');
const checkLinks = require('./checkhttp.js')
const mdLinks = require('./index.js')

function readPath(readPath, validation, stats) {
    readdir.file(readPath, (file) => {
        if (/\.md/g.test(file) && !/node_modules/g.test(file)) {
            
            mdLinks(file)
                .then((result) => {
                    const filteredResult = result.filter( item =>/(http[s]?|www)/.test(item.href) )
                    filteredResult.forEach((obj) => {

                        checkLinks(obj, validation, stats)
                    })
                })

        }
    }
    )

}

module.exports = readPath;