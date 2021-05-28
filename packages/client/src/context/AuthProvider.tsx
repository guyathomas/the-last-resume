import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react'

export const AuthProvider: React.FC = ({ children }) => {
    if (!process.env.REACT_APP_AUTH0_DOMAIN || !process.env.REACT_APP_AUTH0_CLIENT_ID) {
        console.error('No auth config found, not returning context')
        return <>{children}</>
    }
    return (
        <Auth0Provider
            domain={process.env.REACT_APP_AUTH0_DOMAIN}
            clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
            redirectUri={window.location.origin}
        >
            {children}
        </Auth0Provider>
    )
}