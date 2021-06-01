import React, { FC } from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  CircularProgress,
} from "@material-ui/core";
import { HEADER_MAX_HEIGHT } from "components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import { CreateResume } from "components/CreateResume";
import { Typewriter } from "components/Typewriter";

const HomePage: FC = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  
  let inner: JSX.Element;
  if (isLoading) {
    inner = <CircularProgress size="5rem" />;
  } else if (isAuthenticated) {
    inner = <CreateResume  />;
  } else {
    inner = (
      <>
        <Typewriter text="The last resume you'll ever need" />
        <Box mt={3} />
        <Button variant="outlined" color="primary" onClick={loginWithRedirect}>
          Create Account
        </Button>
      </>
    );
  }
  return (
    <Container
      sx={{
        minHeight: `calc(100vh - ${HEADER_MAX_HEIGHT}px)`,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "background.paper",
      }}
    >
      {inner}
    </Container>
  );
};

export default HomePage;
