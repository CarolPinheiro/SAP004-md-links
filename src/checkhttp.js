const https = require('https');
const http = require('http');
const path = require('path');

function rejectedReturn(results, e, file) {
  return {
    text: results[1],
    href: results[2],
    file: path.resolve(file),
    statusCode: 404,
    message: e.message,
  };
}

function resolvedReturn(results, res, file) {
  return {
    text: results[1],
    href: results[2],
    file: path.resolve(file),
    statusCode: res.statusCode,
    message: res.statusMessage,
  };
}

function checkIfALinkExist(results, file) {
  return new Promise((resolved, rejected) => {
    if (/https/.test(results[2])) {
      https.get(results[2], (res) => {
        resolved(resolvedReturn(results, res, file));
      })
        .on('error', (e) => {
          resolved(rejectedReturn(results, e, file));
        });
    } else if (/http/.test(results[2])) {
      http.get(results[2], (res) => {
        resolved(resolvedReturn(results, res, file));
      })
        .on('error', (e) => {
          resolved(rejectedReturn(results, e, file));
        });
    } else {
      rejected('The link is bad formatted');
    }
  });
}

module.exports = checkIfALinkExist;
