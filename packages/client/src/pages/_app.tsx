import { FC } from "react";
import { ThemeProvider } from "context/ThemeProvider";
import { AppProps } from "next/app";
const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
