import { FC } from "react";
import { Global } from "@emotion/react";
import "@fontsource/work-sans";
import "@fontsource/open-sans";

import { COLOR_PALETTE } from "styles";

const GlobalStyles: FC = () => (
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
);

export default GlobalStyles;
