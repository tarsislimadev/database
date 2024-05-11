const { Database } = require('./database')
const { v4: uuid } = require('@brtmvdl/uuid')
const fs = require('./libs/fs/index.js')
const path = require('path')

class DatabaseObject {
  db = null
  id = null

  constructor(database = new Database(), id = uuid()) {
    this.db = database
    this.id = id
  }

  setId(id = uuid()) {
    this.id = id
    return this
  }

  getId() {
    return this.id
  }

  getID() {
    return this.id
  }

  getPath() {
    return path.resolve(this.db.config, this.id)
  }

  getProps() {
    return fs.readdirSync(this.getPath())
  }

  write(key, value = '') {
    const filename = path.resolve(this.getPath(), key)
    fs.writeFileSync(filename, value)
    return this
  }

  writeMany(obj = {}) {
    return Object.keys(obj)
      .map((key) => this.write(key, obj[key]))
  }

  read(prop) {
    const filepath = this.getPath()
    const filename = path.resolve(filepath, prop)
    return fs.readFileSync(filename, {})
  }

  readMany(props = []) {
    return props.map((key) => this.read(key))
  }

  readString(prop) {
    const blob = this.read(prop)
    if (blob == undefined) return ''
    return blob.toString()
  }

  readManyString(props = []) {
    return props.map((key) => this.readString(key))
  }

  toJSON() {
    return this.getProps()
      .reduce((json = {}, prop) => ({ ...json, [prop]: this.readString(prop) }), {})
  }
}

module.exports = {
  DatabaseObject,
}
