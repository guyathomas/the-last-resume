import { createDb } from "postgres-migrations"
import { createClient } from '../createClient'
import { connectionConfig } from '../connectionConfig'

async function main() {
    const client = await createClient({ init: true })
    try {
        console.log('Creating DB', connectionConfig.database)
        await createDb(connectionConfig.database!, { client })
    } finally {
        await client.end()
    }
}

main()