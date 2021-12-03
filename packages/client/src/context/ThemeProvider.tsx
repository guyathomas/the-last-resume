import React from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, adaptV4Theme } from "@mui/material/styles";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const ThemeProvider: React.FC = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme(
        adaptV4Theme({
          palette: {
            mode: prefersDarkMode ? "dark" : "light",
          },
        })
      ),
    [prefersDarkMode]
  );

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};