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

  getID() {
    return this.id
  }

  getPath() {
    return path.resolve(this.db.path, this.id)
  }

  write(key, value = '') {
    fs.writeFileSync(path.resolve(this.getPath(), key), value)
    return this
  }

  writeMany(obj = {}) {
    return Object.keys(obj)
      .map((key) => this.write(key, obj[key]))
  }
}

module.exports = {
  DatabaseObject,
}
