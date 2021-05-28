import { FC } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "context/ThemeProvider";
import { AppLayout } from "context/AppLayout";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
};

export default MyApp;
