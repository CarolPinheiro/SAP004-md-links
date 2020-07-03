
const chalk = require('chalk');
const https = require('https');

function checkLinks(filteredResult, validation, stats) {
  const arrError = []
  if (validation === "--stats" && stats === "--validate") {
    const arrWithLinks = filteredResult.map((item) => item.href)
    const setArr = new Set(arrWithLinks)
    filteredResult.map(obj => {
      if (/https/.test(obj.href)) {
        https.get(obj.href, (res) => {
          if (res.statusCode >= 400 && res.statusCode < 500) {
            arrError.push(res.statusCode)
            console.log(`All:${filteredResult.length} \n Unique: ${setArr.size} \n Broken: ${arrError.length} `)
          }
        })
          .on('error', (e) => console.log(e))
      }
    })
  }
  else if (validation === '--stats') {
    const arrWithLinks = filteredResult.map((item) => item.href)
    const setArr = new Set(arrWithLinks)
    console.log(`\n Unique: ${arrWithLinks.length} \n All:${setArr.size} `)
  } else if (validation === '--validate') {
    filteredResult.map(obj => {
      if (/https/.test(obj.href)) {
        https.get(obj.href, (res) => {
          console.log(`\n Link: ${chalk.blueBright.bold(obj.href)} \n Domínio: ${chalk.cyanBright.bold(obj.text)} \n httpStatus:${chalk.green.bold(res.statusCode)} \n Message:${chalk.yellow.bold(res.statusMessage)}`);
        })
          .on('error', (e) => {
            console.log(`\n Link: ${chalk.blueBright.bold(obj.href)} \n Domínio: ${chalk.cyanBright.bold(obj.text)} \n httpStatus:${chalk.green.bold(404)} \n Message:${chalk.yellow.bold(e)}`);

          });
      }
    })

  }
  else {
    filteredResult.map(obj => {
      console.log(`\n Link: ${chalk.blueBright.bold(obj.href)} \n Domínio: ${chalk.cyanBright.bold(obj.text)} \n Path:${obj.file}`);
    })
  }
}

module.exports = checkLinks;