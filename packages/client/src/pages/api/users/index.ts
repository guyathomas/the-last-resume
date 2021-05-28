import type { NextApiRequest, NextApiResponse } from 'next'


function protectAuth0Handler(request: NextApiRequest, response: NextApiResponse){
    const isAuthorizedRequest = request.body.event.secrets.AUTH0_SECRET !== process.env.AUTH0_SECRET
    if (isAuthorizedRequest) response.status(401).end()
}

function createUser(request: NextApiRequest, response: NextApiResponse) {
    console.log('Creating new user', request.body)
    response.status(200).end()
}

export default function (request: NextApiRequest, response: NextApiResponse) {
    if (request.method === 'POST') {
        protectAuth0Handler(request, response)
        createUser(request, response)
    } else {
        response.status(405).end()
    }
}