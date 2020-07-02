#!/usr/bin/env node

const checkLinks = require('./checkhttp.js')

const mdLinks = require('./index.js');

const file = process.argv[2];

mdLinks(file)
  .then((result) => {
    result.forEach((item) => {
      checkLinks(item);
    });
  })
  .catch((error) => console.log(error));