import React from "react";
import SaveIcon from "@mui/icons-material/Save";
import CheckIcon from "@mui/icons-material/Check";
import { Fab, Box, CircularProgress, Tooltip } from "@mui/material";

export const SaveFab: React.FC<{ requestState?: "loading" | "success" }> = ({
  requestState,
}) => {
  const [showSuccess, setShowSuccess] = React.useState(false);
  React.useEffect(() => {
    if (requestState === "success") {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 1000);
    }
  }, [requestState]);
  return (
    <Tooltip title="Save">
      <Box position="relative">
        <Fab
          aria-label="save"
          color="primary"
          type="submit"
          disabled={requestState === "loading"}
          sx={{
            backgroundColor: showSuccess ? "green" : undefined,
            ":hover": {
              backgroundColor: showSuccess ? "green" : undefined,
            },
          }}
        >
          {showSuccess ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {requestState === "loading" && (
          <CircularProgress
            size={68}
            sx={{
              position: "absolute",
              top: -6,
              left: -6,
              zIndex: 11,
            }}
          />
        )}
      </Box>
    </Tooltip>
  );
};
