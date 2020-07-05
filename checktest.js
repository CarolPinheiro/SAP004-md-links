const https = require('https')

function checkIfALinkExist(resultado, file) {
  return new Promise((resolved) => {

    https.get(resultado[2], (res) => {
      resolved({ text: resultado[1], href: resultado[2], path: file, validation: res.statusCode, message: res.statusMessage })
    })
      .on('error', (e) => {
        resolved({ text: resultado[1], href: resultado[2], path: file, validation: 404, message: e.message })
      })

  })
}


module.exports = checkIfALinkExist;

