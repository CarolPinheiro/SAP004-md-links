
const chalk = require('chalk');
const https = require('https');
const http = require('http');

function checkLinks(filteredResult, validation, stats) {
  const arrayla = []
   if ( validation === "--stats" && stats === "--validate"){
    const arrWithLinks = filteredResult.map((item) => item.href)
    const setArr = new Set(arrWithLinks) 
    filteredResult.map(obj => {
      if(/https/.test(obj.href)){
    https.get(obj.href, (res) => {
      let brokenLink = 0;
      if(res.statusCode>=400 && res.statusCode<500){
        arrayla.push(res.statusCode)
        console.log(`All:${setArr.size} \n Unique: ${arrWithLinks.length} \n Broken: ${arrayla.length} `)

      }
      // console.log(res.statusCode>400? brokenLink+=1: res.statusCode ==='ENOTFOUND'? brokenLink+=1: "foi")
    
    })
      .on('error', (e) => console.error(e.code))
  }
  })
  }
   else if(validation === '--stats') {
    const arrWithLinks = filteredResult.map((item) => item.href)
    const setArr = new Set(arrWithLinks)
    //console.log(arrWithLinks)
    console.log(`\n Unique: ${arrWithLinks.length} \n All:${setArr.size} `)
  } else if (validation === '--validate') {
    filteredResult.map(obj => {
      if(/https/.test(obj.href)){
    https.get(obj.href, (res) => {
      console.log(`\n Link: ${chalk.blueBright.bold(obj.href)} \n Domínio: ${chalk.cyanBright.bold(obj.text)} \n httpStatus:${chalk.green.bold(res.statusCode)} \n Message:${chalk.yellow.bold(res.statusMessage)}`);
    })
  .on('error', (e) => {
    console.log(`\n Link: ${chalk.blueBright.bold(obj.href)} \n Domínio: ${chalk.cyanBright.bold(obj.text)} \n httpStatus:${chalk.green.bold(404)} \n Message:${chalk.yellow.bold(e)}`);

  });
      }  })
  
  }
  else {
    console.log(`\n Link: ${chalk.blueBright.bold(obj.href)} \n Domínio: ${chalk.cyanBright.bold(obj.text)} \n Path:${obj.file}`);

}
}

module.exports = checkLinks;