# @brtmvdl/database

Easy Database Node.js library

[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/brtmvdl/database/npm-publish.yml?label=NPM%20package&link=https%3A%2F%2Fgithub.com%2Fbrtmvdl%2Fdatabase%2Factions%2Fworkflows%2Fnpm-publish.yml)](https://github.com/brtmvdl/database/actions/workflows/npm-publish.yml) [![github/license](https://img.shields.io/github/license/brtmvdl/database)](https://img.shields.io/github/license/brtmvdl/database) [![github/stars](https://img.shields.io/github/stars/brtmvdl/database?style=social)](https://img.shields.io/github/stars/brtmvdl/database?style=social)

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
