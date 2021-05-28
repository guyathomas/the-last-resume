import { createDb } from "postgres-migrations"
import { createClient, connectionConfig } from './connection'

async function main() {
    const client = await createClient()
    try {
        await createDb(connectionConfig.database!, { client })
    } finally {
        await client.end()
    }
}

main()