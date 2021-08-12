/* eslint-disable */
const fs = require('fs')
const packageJson = require('./package.json')

const appVersion = packageJson.version

const jsonData = {
  version: appVersion,
}

var jsonContent = JSON.stringify(jsonData)

fs.writeFile('./public/meta.json', jsonContent, 'utf8', function(err) {
  if (err) {
    return console.log(err)
  }
})

/* eslint-enable */
