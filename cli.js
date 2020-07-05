#!/usr/bin/env node
const mdLinks = require('./index.js');
const chalk = require('chalk');

const path = require('path');

const file = process.argv[2];
const validadeOrStats = process.argv[3]
mdLinks(file, validadeOrStats)
.then(res => {
    res.map(e=> {
        console.log(`\n Text:${chalk.cyan.bold(e.text)} \n Href:${chalk.magenta.bold(e.href)} \n Path:${chalk.blue.bold(e.file)}`)
    })
})
