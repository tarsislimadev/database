const { v4: uuid } = require('@brtmvdl/uuid')

const fs = require('./libs/fs/index.js')
const path = require('path')

const { DatabaseObject } = require('./object.js')

class Database {
  type = 'fs'
  config = process.env.DATA_PATH
  timestamp = null

  constructor({
    type = this.type,
    config = this.config,
    timestamp = this.timestamp,
  } = {}) {
    this.type = type
    this.config = config
    this.timestamp = timestamp
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

  setTimestamp(timestamp = null) {
    this.timestamp = timestamp
    return this
  }

  getTimestamp() {
    if (this.timestamp != null) {
      return this.timestamp
    }

    return Date.now()
  }

  in(dir = '') {
    const { config, type } = this
    return new Database({
      config: path.resolve(config, dir),
      timestamp: this.getTimestamp(),
      type,
    })
  }

  new(id = uuid()) {
    return new DatabaseObject(this, id, this.getTimestamp())
  }

  list() {
    return fs
      .readdirSync(this.config)
      .map((path) => new DatabaseObject(this, path, this.getTimestamp()))
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
