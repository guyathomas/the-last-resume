import { FC } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "context/ThemeProvider";
import { AuthProvider } from "context/AuthProvider";
import { AppLayout } from "context/AppLayout";

const NextApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default NextApp;
