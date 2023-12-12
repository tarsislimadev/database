const { v4: uuid } = require('@brtmvdl/uuid')

const fs = require('./libs/fs/index.js')
const path = require('path')

const { DatabaseObject } = require('./object.js')

class Database {
  type = 'fs'
  config = process.env.DATA_PATH

  constructor({
    type = this.type,
    config = this.config,
  } = {}) {
    this.type = type
    this.config = config
  }

  setType() {
    this.type = type
    return this
  }

  setConfig(config = null) {
    this.config = config
    return this
  }

  in(dir = '') {
    return new Database({
      type: this.type,
      config: path.resolve(this.config, dir)
    })
  }

  new(id = uuid()) {
    return new DatabaseObject(this, id)
  }

  list() {
    return fs.readdirSync(this.config).map((path) => new DatabaseObject(this, path))
  }

  find(search = {}) {
    return this.list().find((_, ix) => ix === 0)
  }

  findById(id) {
    return this.list().find((data) => data.id == id)
  }

}

module.exports = {
  Database,
}
