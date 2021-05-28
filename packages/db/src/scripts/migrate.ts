import path from 'path';
import { migrate } from "postgres-migrations"
import { createClient } from '../createClient'

async function main() {
    const client = await createClient()
    try {
      await migrate({client}, path.resolve("src/migrations"))
    } finally {
      await client.end()
    }
}

main()