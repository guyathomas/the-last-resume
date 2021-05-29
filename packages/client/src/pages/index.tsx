import { FC } from "react";
import { Button, Container, Typography, Box } from "@material-ui/core";
import { HEADER_MAX_HEIGHT } from "components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import { ButtonLink } from "components/ButtonLink";

const HomePage: FC = () => {
  const { loginWithPopup, isAuthenticated } = useAuth0();
  return (
    <Container
      sx={{
        height: `calc(100vh - ${HEADER_MAX_HEIGHT}px)`,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "background.paper",
      }}
    >
      <Typography color="textPrimary" variant="h3">
        The last resume you'll ever need
      </Typography>
      <Box mt={3} />
      {isAuthenticated ? (
        <Button LinkComponent={ButtonLink} href="/my-resume">
          Edit My Resume
        </Button>
      ) : (
        <Button variant="outlined" color="primary" onClick={loginWithPopup}>
          Get Started
        </Button>
      )}
    </Container>
  );
};

export default HomePage;
