// 

// 1xx = Database error
// 2xx = Index error
// 3xx = Object error
// 4xx = Property error
// 5xx = Content error
const messages = {
  '401': 'File not found',
}

class ApplicationError extends Error {
  status = null
  extras = {}

  constructor(status = 1, extras = {}) {
    super('Application Error')
    this.status = status
    this.extras = extras
  }

  getMessage() {
    return messages[this.status]
  }

  getStatus() {
    return this.status
  }

  getExtras() {
    return this.extras
  }
}

class FileNotExistsError extends ApplicationError {
  constructor(extras = {}) {
    super('401', extras)
  }
}

module.exports = {
  messages,
  ApplicationError,
  FileNotExistsError,
}
