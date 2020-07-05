const https = require('https')
function checkIfALinkExist(results, file) {
  return new Promise((resolved) => {
      https.get(results[2], (res) => {
        resolved({ text: results[1], href: results[2], file, statusCode: res.statusCode, message: res.statusMessage })
      })
        .on('error', (e) => {
          resolved({ text: results[1], href: results[2], file, statusCode: 404, message: e.message })
        })

  })
}

module.exports = checkIfALinkExist;

