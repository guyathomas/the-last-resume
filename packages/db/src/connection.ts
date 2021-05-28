import dotenv from 'dotenv'
import pg, { ClientConfig } from 'pg'

dotenv.config()

export const connectionConfig: ClientConfig = {
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT ? parseInt(process.env.PGPORT, 10) : 5432,
}

interface CreateClientOptions {
    init?: boolean;
}
export async function createClient({ init }: CreateClientOptions = {}) {
    const config: ClientConfig = { ...connectionConfig }

    const client = new pg.Client({
        ...connectionConfig,
        database: init ? 'postgres' : config.database
    })
    await client.connect()

    return client
}