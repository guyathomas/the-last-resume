import { Typography, Box } from "@material-ui/core";
import React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const blinking = keyframes`
from, to { background-color: transparent }
50% { background-color: orange; }
`;
const Cursor = styled(Box)`
  background-color: orange;
  width: 0.05em;
  margin-left: 0.1em;
  height: 1em;
  animation: ${blinking} 0.75s step-end infinite;
  display: inline-block;
  margin-bottom: -0.2em;
`;

const useTypewriterEffect = (text: string, duration: number) => {
  const parts = React.useRef(text.split("").reverse());
  const [visibleText, setVisibleText] = React.useState("");
  const characterDelay = React.useRef(duration / parts.current.length);
  const addCharacter = () => {
    if (parts.current.length) {
      setVisibleText((currentText) => currentText + parts.current.pop());
      setTimeout(() => {
        addCharacter();
      }, characterDelay.current);
    }
  };

  React.useEffect(() => {
    addCharacter();
  }, []);

  return [visibleText];
};
interface TypewriterProps {
  text: string;
}
export const Typewriter: React.FC<TypewriterProps> = ({ text }) => {
  const [currentText] = useTypewriterEffect(text, 1500);
  return (
    <Typography
      color="textPrimary"
      variant="h3"
      textAlign="center"
      display="inline-block"
    >
      <span>
        {currentText}
        <Cursor />
      </span>
    </Typography>
  );
};
