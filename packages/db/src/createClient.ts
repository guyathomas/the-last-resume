import pg from 'pg'
import { connectionConfig } from './connectionConfig'

interface CreateClientOptions {
    init?: boolean;
}

export async function createClient({ init }: CreateClientOptions = {}) {
    const client = new pg.Client({
        ...connectionConfig,
        database: init ? 'postgres' : connectionConfig.database
    })
    await client.connect()

    return client
}