const path = require('path')
const fs = require('fs')

const writeFileSync = (key, value = '') => {
  fs.mkdirSync(path.dirname(key), { recursive: true })
  return fs.writeFileSync(key, value.toString())
}

module.exports = {
  writeFileSync,
}
