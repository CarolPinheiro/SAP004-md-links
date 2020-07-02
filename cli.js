#!/usr/bin/env node

const checkLinks = require('./checkhttp.js')

const mdLinks = require('./index.js');

const path = require('path');

function checkFilesUser(file, validation) {
    if (/\.md/.test(file)) {
        mdLinks(file)
            .then((result) => {
                result.forEach((item) => {
                    checkLinks(item, validation);
                });
            })
            .catch((error) => console.log(error));
    } else {
        readPath(file, validation)
    }
}

const file = process.argv[2]
const filePath = path.resolve(file)
const validation = process.argv[3]
checkFilesUser(filePath, validation)