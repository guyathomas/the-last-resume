import React from "react";
import { Box, Button, Typography, Chip } from "@material-ui/core";
import ButtonLink from "components/ButtonLink";
import Typewriter from "components/Typewriter";
import { FileCopyOutlined } from "@material-ui/icons";

interface ExistingResumeProps {
  slug: string;
}
const useDelayToggleBack = (delay: number) => {
  const [toggledOn, setToggledOn] = React.useState(false);
  React.useEffect(() => {
    if (toggledOn)
      setTimeout(() => {
        setToggledOn(false);
      }, delay);
  });
  const setToggleOn = () => {
    setToggledOn(true);
  };
  return [toggledOn, setToggleOn] as [boolean, () => void];
};

export const ExistingResume: React.FC<ExistingResumeProps> = ({ slug }) => {
  const [showCopied, toggleShowCopied] = useDelayToggleBack(1500);
  const resumeLink = `/resume/${slug}`;
  const fullLink = `${process.env.NEXT_PUBLIC_CLIENT_URL}${resumeLink}`;
  return (
    <>
      <Typewriter text="Welcome back" />
      <Box marginTop={2} />
      <Box
        role="button"
        sx={{
          maxWidth: "100vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            opacity: showCopied ? 0 : 1,
          }}
        >
          {fullLink}
        </Typography>

        <Chip
          size="small"
          label="Copied!"
          variant="outlined"
          sx={{
            opacity: showCopied ? 1 : 0,
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <FileCopyOutlined
          sx={{ marginLeft: 1, cursor: "pointer" }}
          onClick={() => {
            navigator.clipboard.writeText(fullLink);
            toggleShowCopied();
          }}
        />
      </Box>
      <Box marginTop={2} />
      <Button component={ButtonLink} href={resumeLink} variant="contained">
        Edit Resume
      </Button>
    </>
  );
};
