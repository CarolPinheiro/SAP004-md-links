#!/usr/bin/env node

const chalk = require('chalk');
const https = require('https');
//const checkLinks = require('./checkhttp.js')

const mdLinks = require('./index.js');

const file = process.argv[2];

function checkLinks(obj) {
  https.get(obj.href, (res) => {
    console.log(`Link: ${chalk.blueBright.bold(obj.href)} Domínio: ${chalk.cyanBright.bold(obj.text)}, httpStatus:${chalk.green.bold(res.statusCode)}, Message:${chalk.yellow.bold(res.statusMessage)}`);
  })
    .on('error', (e) => console.error(e.code));
}

mdLinks(file)
  .then((result) => {
    result.forEach((item) => {
      checkLinks(item)
    });
  })
  .catch((error) => console.log(error));