import React, { FC } from "react";
import { Button, Box, CircularProgress } from "@material-ui/core";
import { useAuth } from "hooks/useAuth";
import Home from "components/Home";
import Typewriter from "components/Typewriter";

const HomePage: FC = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <CircularProgress size="5rem" />;
  if (isAuthenticated) return <Home />;

  return (
    <>
      <Typewriter text="The last resume you'll ever need" />
      <Box mt={3} />
      <Button variant="contained" color="primary" onClick={loginWithRedirect}>
        Get Started
      </Button>
    </>
  );
};

export default HomePage;
