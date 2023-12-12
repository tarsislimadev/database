const path = require('path')

const fs = require('fs')

const writeFileSync = (key, value = '') => {
  fs.mkdirSync(path.dirname(key), { recursive: true })
  return fs.writeFileSync(key, value.toString())
}

const mkdir = (path) =>
  fs.mkdirSync(path, { recursive: true })

const readdirSync = (path) => {
  mkdir(path, { recursive: true })
  return fs.readdirSync(path)
}

const readFileSync = (filename, config) =>
  fs.readFileSync(filename, config)

module.exports = {
  writeFileSync,
  readdirSync,
  readFileSync,
}
