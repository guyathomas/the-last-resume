import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import ButtonLink from "components/ButtonLink";
import Typewriter from "components/Typewriter";

interface ExistingResumeProps {
  slug: string;
}
export const ExistingResume: React.FC<ExistingResumeProps> = ({
  slug,
}) => {
  const resumeLink = `/resume/${slug}`;
  return (
    <>
      <Typewriter text="Welcome back" />
      <Box marginTop={2} />
      <Typography>{`${process.env.NEXT_PUBLIC_CLIENT_URL}${resumeLink}`}</Typography>
      <Box marginTop={2} />
      <Button component={ButtonLink} href={resumeLink} variant="outlined">
        Edit Resume
      </Button>
    </>
  );
};
