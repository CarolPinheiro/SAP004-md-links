#!/usr/bin/env node

const checkLinks = require('./checkhttp.js')

const mdLinks = require('./index.js');
const readPath = require('./readdirectories.js');

const path = require('path');

function checkFilesUser(file, validation, stats) {
    console.log()
    if (/\.md/.test(file)) {
        mdLinks(file)
            .then((result) => {
                const filteredResult = result.filter( item =>/(http[s]?|www)/.test(item.href) )
                    checkLinks(filteredResult, validation, stats);
            })
            .catch((error) => console.log(error));
    } else {
        readPath(file, validation, stats)
    }
}

const file = process.argv[2]
const filePath = path.resolve(file)
const validation = process.argv[3]
const stats = process.argv[4]
checkFilesUser(filePath, validation, stats)