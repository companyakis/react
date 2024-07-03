import { Stack, Button } from "@mui/material";
import React from "react";

function ButtonsUsage() {
  return (
    <Stack direction="row" display="block" spacing={3}>
      <Button variant="contained" size="small">
        Small Button
      </Button>
      <Button variant="contained" size="medium">
        Medium Button
      </Button>
      <Button variant="contained" size="large">
        Large Button
      </Button>
    </Stack>
  );
}

export default ButtonsUsage;
