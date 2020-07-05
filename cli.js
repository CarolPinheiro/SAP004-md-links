#!/usr/bin/env node
const mdLinks = require('./index.js');
const chalk = require('chalk');

const path = require('path');


function checkUsersNeed(file, validadeOrStats) {

  mdLinks(file, validadeOrStats)
    .then(res => {
      const flatResult = res.flat()
      if (validadeOrStats.includes('--stats') && validadeOrStats.includes('--validate')) {
        const allLinks = flatResult.map(i => i.href)
        const brokenLinks = flatResult.filter(i => i.statusCode > 400 && i.statusCode < 500)
        const notRepeatedLinks = new Set(allLinks)
        console.log(`All:${chalk.yellow.bold(allLinks.length)} \nUnique:${chalk.green.bold(notRepeatedLinks.size)}\nBroken:${chalk.red.bold(brokenLinks.length)}`)

      } else if (validadeOrStats.includes('--stats')) {
        const allLinks = flatResult.map(i => i.href)
        const notRepeatedLinks = new Set(allLinks)
        console.log(`All:${chalk.yellow.bold(allLinks.length)} \nUnique:${chalk.green.bold(notRepeatedLinks.size)}`)

      } else {
        flatResult.map(e => {
          if (e.statusCode) {
            console.log(`\n 
                Text:${chalk.cyan.bold(e.text)} 
                Href:${chalk.magenta.bold(e.href)} 
                Path:${chalk.blue.bold(e.file)}
                StatusCode:${e.statusCode > 400 && e.statusCode < 500 ? chalk.red.bold(e.statusCode) : chalk.green.bold(e.statusCode)}
                Status Message:${chalk.white.bold(e.message)} \n`)
          }
          else {
            console.log(`\n Text:${chalk.cyan.bold(e.text)} \n Href:${chalk.magenta.bold(e.href)} \n Path:${chalk.blue.bold(e.file)}`)

          }
        })
      }
    })
}
const file = process.argv[2];
const validadeOrStats = process.argv

checkUsersNeed(file, validadeOrStats)
