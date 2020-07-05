#!/usr/bin/env node
const mdLinks = require('./src/index.js');
const chalk = require('chalk');
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
            console.log(`\n 
            Text:${chalk.cyan.bold(e.text)} 
            Href:${chalk.magenta.bold(e.href)} 
            Relative path to current location:${chalk.blue.bold(e.file)}
            StatusCode:${e.statusCode > 400 && e.statusCode < 500 ? chalk.red.bold(e.statusCode) : chalk.green.bold(e.statusCode)}
            Status Message:${chalk.white.bold(e.message)} \n`)
          }
          else {
            console.log(`\n Text:${chalk.cyan.bold(e.text)} \n Href:${chalk.magenta.bold(e.href)} \n Relative path to current location:${chalk.blue.bold(e.file)}`)

          }
        })
      }
    })
}
const file = process.argv[2];
const validadeOrStats = process.argv

checkUsersNeed(file, validadeOrStats)


