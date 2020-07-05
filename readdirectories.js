const readdir = require('readdir-recursive');

function readPath(readPath, func) {
    readdir.file(readPath, (file) => {
        if (/\.md/g.test(file) && !/node_modules/g.test(file)) {
            func(file)
        }
    })
}
module.exports = readPath;