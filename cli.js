#!/usr/bin/env node
const mdLinks = require('./index.js');
const chalk = require('chalk');

const path = require('path');

const file = process.argv[2];
const validadeOrStats = process.argv[3]
mdLinks(file, validadeOrStats)
.then(res => {
    res.map(e=> {
        if(e.statusCode) {
            console.log(`\n Text:${chalk.cyan.bold(e.text)} 
            \n Href:${chalk.magenta.bold(e.href)} 
            \n Path:${chalk.blue.bold(e.file)}
            \n StatusCode:${e.statusCode>400&&e.statusCode<500?chalk.red.bold(e.statusCode): chalk.green.bold(e.statusCode)}
            \n Status Message:${chalk.white.bold(e.message)} \n`)
        }
        else{
            console.log(`\n Text:${chalk.cyan.bold(e.text)} \n Href:${chalk.magenta.bold(e.href)} \n Path:${chalk.blue.bold(e.file)}`)

        }
    })
})
