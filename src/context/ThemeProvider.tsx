import React from "react";
import { COLOR_PALETTE } from "styles";
import styled from "@emotion/react";
import Head from "next/head";
import { Global, css } from "@emotion/react";

interface ThemeProviderProps {
  children: React.ReactNode;
}
export type ColorMode = "light" | "dark";
const validColors = new Set<ColorMode>(["light", "dark"]);
interface ThemeContextValue {
  colorMode?: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
  toggleColorMode: () => void;
  isDarkMode: boolean;
}

export const ThemeContext = React.createContext<ThemeContextValue>({
  setColorMode: () => {
    return undefined;
  },
  toggleColorMode: () => {
    return undefined;
  },
  isDarkMode: false,
  colorMode: undefined,
});

function isValidColorType(colorType: string): colorType is ColorMode {
  return validColors.has(colorType as ColorMode);
}


export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [colorMode, setColorModeState] = React.useState<ColorMode>();

  React.useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    if (isValidColorType(initialColorValue)) {
      setColorModeState(initialColorValue);
    }
  }, []);
  const setColorMode = (newValue: ColorMode) => {
    const root = window.document.documentElement;
    // 1. Update React color-mode state
    setColorModeState(newValue);
    // 2. Update localStorage
    localStorage.setItem("color-mode", newValue);
    // 3. Update each color
    // TODO: This is done in two places.  Abstract implementation
    Object.values(COLOR_PALETTE).forEach((color) => {
      root.style.setProperty(
        color.cssVariable,
        newValue === "dark" ? color.dark : color.light
      );
    });
  };
  const toggleColorMode = () => {
    switch (colorMode) {
      case "dark":
        setColorMode("light");
        break;
      case "light":
        setColorMode("dark");
        break;
      default:
        break;
    }
  };
  return (
    <ThemeContext.Provider
      value={{
        colorMode,
        setColorMode,
        isDarkMode: colorMode === "dark",
        toggleColorMode,
      }}
    >
      <Global
        styles={{
          body: {
            fontSize: "100%",
            lineHeight: 1.75,
            fontFamily: `'Work Sans', serif`,
            color: COLOR_PALETTE.primary.color,
            fontWeight: 400,
            margin: 0,
            boxSizing: "border-box",
          },
          "*, *::before, *::after": {
            boxSizing: "border-box",
          },
          "h1, h2, h3, h4, h5, h6": {
            fontWeight: 300,
            fontFamily: `'Work Sans', serif`,
            marginTop: "3.5rem",
            lineHeight: "initial",
          },
          ul: {
            listStyle: "disc",
          },
          "ul,ol": {
            marginLeft: 0,
            listStylePosition: "inside",
          },
          h4: {
            letterSpacing: "0.140625em",
            textTransform: "uppercase",
          },
          h6: {
            fontStyle: "italic",
          },
          a: {
            color: COLOR_PALETTE.interactive.color,
            textDecoration: "none",
          },
          "a:hover,a:active": {
            boxShadow: "none",
            color: COLOR_PALETTE.interactiveActive.color,
          },
        }}
      />
      <Head>
        <link
          href={`https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap`}
          rel="stylesheet"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap`}
          rel="stylesheet"
        />
      </Head>
      {children}
    </ThemeContext.Provider>
  );
};
