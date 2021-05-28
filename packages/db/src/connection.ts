import dotenv from 'dotenv'
import pg, { ClientConfig } from 'pg'

dotenv.config()

const DATABASE_NAME = 'the-last-resume'

export const connectionConfig: ClientConfig = {
    database: DATABASE_NAME,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT ? parseInt(process.env.PGPORT, 10) : 5432,
}

export async function createClient(){
    const client = new pg.Client(connectionConfig)
    await client.connect()
    return client
}