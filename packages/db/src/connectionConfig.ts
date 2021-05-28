import dotenv from 'dotenv'
import path from 'path'

const dotenvPath = path.resolve('../db/.env');
dotenv.config({
    path: dotenvPath,
    debug: true
})

export const connectionConfig = {
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT ? parseInt(process.env.PGPORT, 10) : 5432,
}