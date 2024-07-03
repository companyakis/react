import { Stack, Button } from "@mui/material";
import React from "react";

function ButtonsUsage() {
  return (
    <Stack direction="row" spacing={3}>
      <Button variant="text">Text Button</Button>
      <Button variant="outlined">Outlined Button</Button>
      <Button variant="contained">Contained Button</Button>
    </Stack>
  );
}

export default ButtonsUsage;
