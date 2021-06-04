import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import React from "react";
import { setContext } from "@apollo/link-context";
import { ApolloProvider } from "@apollo/client";
import { useAuth } from "hooks/useAuth";

export const AuthorizedApolloProvider: React.FC = ({ children }) => {
  const { getIdTokenClaims } = useAuth();

  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  });

  const authLink = setContext(async () => {
    const { __raw: jwt } = await getIdTokenClaims();
    return {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    };
  });

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
