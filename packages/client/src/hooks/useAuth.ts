import { useAuth0 } from "@auth0/auth0-react";

const hasuraSecretPath = "https://hasura.io/jwt/claims";

type HasuraRoles = "user";

interface HasuraSecrets {
  "x-hasura-user-id": string;
  "x-hasura-default-role": HasuraRoles;
  "x-hasura-allowed-roles": HasuraRoles[];
}

export const useAuth = () => {
  const auth0Values = useAuth0();
  const hasuraSecrets: Partial<HasuraSecrets> =
    auth0Values.user?.[hasuraSecretPath] || {};
  return {
    ...auth0Values,
    hasuraSecrets,
  };
};
