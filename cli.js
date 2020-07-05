#!/usr/bin/env node
const mdLinks = require('./index.js');
const chalk = require('chalk');
const path = require('path');
const statsReturn = require('./src/stats')


function checkUsersNeed(file, validadeOrStats) {

  mdLinks(file, validadeOrStats)
    .then(res => {
      const flatResult = res.flat()
      const statsReturned =  statsReturn(flatResult)
      if (validadeOrStats.includes('--stats') && validadeOrStats.includes('--validate')) {
        console.log(`All:${chalk.yellow.bold(statsReturned.allLinks)} \nUnique:${chalk.green.bold(statsReturned.notRepeatedLinks)}\nBroken:${chalk.red.bold(statsReturned.brokenLinks)}`)

      } else if (validadeOrStats.includes('--stats')) {
        console.log(`All:${chalk.yellow.bold(statsReturned.allLinks)} \nUnique:${chalk.green.bold(statsReturned.notRepeatedLinks)}`)

      } else {
        flatResult.map(e => {
          if (e.statusCode) {
            console.log(`\nText:${chalk.cyan.bold(e.text)}\nHref:${chalk.magenta.bold(e.href)}\nPath:${chalk.blue.bold(e.file)}\nStatusCode:${e.statusCode > 400 && e.statusCode < 500 ? chalk.red.bold(e.statusCode) : chalk.green.bold(e.statusCode)}\nStatus Message:${chalk.white.bold(e.message)} \n`)
          }
          else {
            console.log(`\n Text:${chalk.cyan.bold(e.text)} \n Href:${chalk.magenta.bold(e.href)} \n Path:${chalk.blue.bold(e.file)}`)

          }
        })
      }
    })
}
const file = process.argv[2];
const filePath = path.resolve(file)
const validadeOrStats = process.argv

checkUsersNeed(filePath, validadeOrStats)


