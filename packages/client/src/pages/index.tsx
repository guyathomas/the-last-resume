import { FC } from "react";
import { Button, Container, Typography, Box } from "@material-ui/core";
import { HEADER_MAX_HEIGHT } from "components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import { CreateResume } from "components/CreateResume";

const newSlug = async (slug: string, resume: any) =>
  fetch(`/api/resume/${slug}`, {
    method: "POST",
    body: JSON.stringify(resume),
  });

const HomePage: FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
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
      <Typography color="textPrimary" variant="h3" textAlign="center">
        The last resume you'll ever need
      </Typography>
      <Box mt={3} />
      {isAuthenticated ? (
        <CreateResume onSave={newSlug} />
      ) : (
        <Button variant="outlined" color="primary" onClick={loginWithRedirect}>
          Create Account
        </Button>
      )}
    </Container>
  );
};

export default HomePage;
