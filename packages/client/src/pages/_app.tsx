import { FC } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "context/ThemeProvider";
import { AuthProvider } from "context/AuthProvider";
import { AppLayout } from "context/AppLayout";
import { AuthorizedApolloProvider } from "utils/apollo";

const NextApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <AuthorizedApolloProvider>
        <ThemeProvider>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ThemeProvider>
      </AuthorizedApolloProvider>
    </AuthProvider>
  );
};

export default NextApp;
