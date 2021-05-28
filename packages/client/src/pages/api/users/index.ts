import type { NextApiRequest, NextApiResponse } from 'next'
import postgres from 'postgres';

import { connectionConfig } from '@the-last-resume/db'

const sql = postgres(connectionConfig)

function protectAuth0Handler(request: NextApiRequest, response: NextApiResponse){
    if (!process.env.AUTH0_SECRET) console.warn('AUTH0_SECRET is not configured. Requests will fail')
    
    const isAuthorizedRequest = request.body.event.secrets.AUTH0_SECRET !== process.env.AUTH0_SECRET
    
    if (isAuthorizedRequest) response.status(401).end()
}

async function createUser(request: NextApiRequest, response: NextApiResponse) {
    const { user_id, email, id } = request.body?.event?.user || {}
    const auth_id = user_id || id // auth0 is sending these values inconsistently
    if (!auth_id) response.status(422).end()
    const result = await sql`
        insert into app_public.users ( auth_id, email ) VALUES (${auth_id}, ${email});
    `
    response.send(result)
}

export default function (request: NextApiRequest, response: NextApiResponse) {
    return new Promise(resolve => {
        switch (request.method) {
          case "POST": {
            protectAuth0Handler(request, response)
            createUser(request, response)
            break;
          }
          default: {
            response.status(405).end()
          }
        }
        return resolve(true)
      })
}