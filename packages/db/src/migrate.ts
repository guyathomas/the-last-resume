import { migrate } from "postgres-migrations"
import { createClient } from './connection'

async function main() {
    const client = await createClient()
    try {
      await migrate({client}, "migrations")
    } finally {
      await client.end()
    }
}

main()