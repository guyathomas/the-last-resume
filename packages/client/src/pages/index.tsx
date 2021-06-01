import React, { FC } from "react";
import { Button, Container, Typography, Box } from "@material-ui/core";
import { HEADER_MAX_HEIGHT } from "components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import { CreateResume } from "components/CreateResume";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;
const blinking = keyframes`
from, to { background-color: transparent }
50% { background-color: orange; }
`;

const Cursor = styled(Box)`
  background-color: orange;
  width: 0.05em;
  margin-left: 0.1em;
  height: 1em;
  animation: ${blinking} 0.75s step-end infinite;
  display: inline-block;
  margin-bottom: -0.2em;
`;

const useTypewriterEffect = (text: string, duration: number) => {
  const parts = React.useRef(text.split("").reverse());
  const [visibleText, setVisibleText] = React.useState("");
  const characterDelay = React.useRef(duration / parts.current.length);
  const addCharacter = () => {
    if (parts.current.length) {
      setVisibleText((currentText) => currentText + parts.current.pop());
      setTimeout(() => {
        addCharacter();
      }, characterDelay.current);
    }
  };

  React.useEffect(() => {
    addCharacter();
  }, []);

  return [visibleText];
};

const newSlug = async (slug: string, resume: any) =>
  fetch(`/api/resume/${slug}`, {
    method: "POST",
    body: JSON.stringify(resume),
  });

const HomePage: FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [titleText] = useTypewriterEffect(
    "The last resume you'll ever need",
    1000
  );
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
      
      {isAuthenticated ? (
        <CreateResume onSave={newSlug} />
      ) : (
        <>
          <Typography
            color="textPrimary"
            variant="h3"
            textAlign="center"
            display="inline-block"
          >
            <span>
              {titleText}
              <Cursor />
            </span>
          </Typography>
          <Box mt={3} />
          <Button
            variant="outlined"
            color="primary"
            onClick={loginWithRedirect}
          >
            Create Account
          </Button>
        </>
      )}
    </Container>
  );
};

export default HomePage;
