import { FC } from "react";
import { useAuth0 } from '@auth0/auth0-react'

export const AuthGuard: FC = ({ children }) => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) return <div>Error: Please Login</div>;
  
  return <>{children}</>;
};
