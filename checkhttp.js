const chalk = require('chalk');
const https = require('https');

function checkLinks(obj) {
  https.get(obj.href, (res) => {
    console.log(`Link: ${chalk.blueBright.bold(obj.href)} Domínio: ${chalk.cyanBright.bold(obj.text)}, httpStatus:${chalk.green.bold(res.statusCode)}, Message:${chalk.yellow.bold(res.statusMessage)}`);
  })
    .on('error', (e) => console.error(e.code));
}

module.exports = checkLinks;