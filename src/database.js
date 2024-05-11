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

  getType() {
    return this.type
  }

  setConfig(config = null) {
    this.config = config
    return this
  }

  getConfig() {
    return this.config
  }

  in(dir = '') {
    const { config, type } = this
    return new Database({ config: path.resolve(config, dir), type, })
  }

  new(id = uuid()) {
    return new DatabaseObject(this, id)
  }

  list() {
    return fs
      .readdirSync(this.config)
      .map((path) => new DatabaseObject(this, path))
  }

  find(search = {}) {
    return this.list().find((data) =>
      Object.keys(search).every((key) =>
        data.readString(key).toString() == search[key].toString()
      )
    )
  }

  findById(id) {
    return this.list().find((data) => data.id == id)
  }

}

module.exports = {
  Database,
}
