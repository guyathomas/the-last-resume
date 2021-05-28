import { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  AppBar,
  Button,
  Typography,
  Toolbar,
} from "@material-ui/core";

export const Header: FC = () => {
  const { isAuthenticated, loginWithPopup, logout } = useAuth0()
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>The Last Resume</Typography>
        {
          isAuthenticated ?
            <Button onClick={() => logout({ returnTo: window.location.origin })} sx={{ marginLeft: 'auto' }} color="inherit">Logout</Button> :
            <Button onClick={loginWithPopup} sx={{ marginLeft: 'auto' }} color="inherit">Login</Button>
        }
      </Toolbar>
    </AppBar>
  );
};
