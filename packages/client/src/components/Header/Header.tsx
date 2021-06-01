import { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Button, Typography, Toolbar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { ButtonLink } from "components/ButtonLink";

export const HEADER_MAX_HEIGHT = 64;

export const Header: FC = () => {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();
  return (
    <AppBar
      position="static"
      sx={{ maxHeight: HEADER_MAX_HEIGHT, backgroundColor: "background.paper" }}
    >
      <Toolbar>
        <Button component={ButtonLink} href="/" color="inherit" >
          <HomeIcon />
        </Button>
        {isAuthenticated ? (
          <Button
            onClick={() => logout({ returnTo: window.location.origin })}
            sx={{ marginLeft: "auto" }}
            color="inherit"
          >
            Logout
          </Button>
        ) : (
          <Button
            onClick={loginWithRedirect}
            sx={{ marginLeft: "auto" }}
            color="inherit"
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
