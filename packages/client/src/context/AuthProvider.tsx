import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react'

export const AuthProvider: React.FC = ({ children }) => {
    if (!process.env.NEXT_PUBLIC_AUTH0_DOMAIN || !process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID) {
        console.error('No auth config found, not returning context')
        return <>{children}</>
    }
    const redirectUri = typeof window === 'undefined' ?
        process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URL :
        window.location.origin;
    
        return (
        <Auth0Provider
            domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
            clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
            redirectUri={redirectUri}
            audience="hasura"
        >
            {children}
        </Auth0Provider>
    )
}