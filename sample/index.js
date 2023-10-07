const { Database } = require('@brtmvdl/database')

const db = new Database(process.env.DATA_PATH)

const users = db.in('users')

const user = users.new()

user.writeMany({ email: 'mail@mail.com', password: 'password' })
