import { FC } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "context/ThemeProvider";
import { StyledEngineProvider, Theme } from "@mui/material/styles";
import { AuthProvider } from "context/AuthProvider";
import { AppLayout } from "context/AppLayout";
import { AuthorizedApolloProvider } from "utils/apollo";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const NextApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <AuthorizedApolloProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </ThemeProvider>
        </StyledEngineProvider>
      </AuthorizedApolloProvider>
    </AuthProvider>
  );
};

export default NextApp;
