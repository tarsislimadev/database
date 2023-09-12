# @brtmvdl/database

Easy database Node.js library

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
