# [@brtmvdl/database](https://www.npmjs.com/package/@brtmvdl/database)

Easy Database Node.js library

[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/brtmvdl/database/npm-publish.yml?label=GitHub%20Actions&link=https%3A%2F%2Fgithub.com%2Fbrtmvdl%2Fdatabase%2Factions%2Fworkflows%2Fnpm-publish.yml)](https://github.com/brtmvdl/database/actions/workflows/npm-publish.yml) [![npm](https://img.shields.io/npm/dw/%40brtmvdl/database?label=NPM%20Weekly%20Downloads)](https://www.npmjs.com/package/@brtmvdl/database) [![github/stars](https://img.shields.io/github/stars/brtmvdl/database?style=social)](https://img.shields.io/github/stars/brtmvdl/database?style=social) 

## social & donate

[Donate](https://link.mercadopago.com.br/brtmvdl) - [Telegram](https://t.me/+KRmg5MlqgMk0MTg5) - [Discord](https://discord.gg/2zWpWBgmPj)

## how to install

```bash
# bash

npm i @brtmvdl/database
```

## how to use

```js
// index.mjs

import { Database } from '@brtmvdl/database'

const db = new Database({ type: 'fs', config: '/data' })

const users = db.in('users')

const user = users.new()

user.writeMany({ email: 'mail@mail.com', password: 'password' })

console.log('user', user.readManyString(['email', 'password']))
```

```sh
# bash

node index.mjs
```

## author

[Tarsis Lima](https://www.linkedin.com/in/brtmvdl/)

## license

[MIT](./LICENSE)
