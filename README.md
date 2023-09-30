# [@brtmvdl/database](https://www.npmjs.com/package/@brtmvdl/database)

Easy Database Node.js library

[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/brtmvdl/backend/npm-publish.yml?label=GitHub%20Actions&link=https%3A%2F%2Fgithub.com%2Fbrtmvdl%2Fbackend%2Factions%2Fworkflows%2Fnpm-publish.yml)](https://github.com/brtmvdl/backend/actions/workflows/npm-publish.yml) [![npm](https://img.shields.io/npm/dw/%40brtmvdl/backend?label=NPM%20Weekly%20Downloads)](https://www.npmjs.com/package/@brtmvdl/backend) [![github/stars](https://img.shields.io/github/stars/brtmvdl/backend?style=social)](https://img.shields.io/github/stars/brtmvdl/backend?style=social) 

## install

```bash
npm i @brtmvdl/database
```

## how to use

```js
const { Database } = require('@brtmvdl/database')

const db = new Database(process.env.DATA_PATH)

const users = db.in('users')

const user = users.new()

user.writeMany({ email: 'mail@mail.com', password: 'password' })
```

## License

[MIT](./LICENSE)
