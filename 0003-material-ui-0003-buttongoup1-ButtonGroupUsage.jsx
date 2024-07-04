import React from "react";
import { Stack, Button, ButtonGroup } from "@mui/material";

function ButtonGroupUsage() {
  return (
    <Stack direction="row">
      <ButtonGroup variant="outlined" size="medium" color="warning">
        <Button>AI</Button>
        <Button>Web3</Button>
        <Button>Algo Trading</Button>
      </ButtonGroup>
    </Stack>
  );
}

export default ButtonGroupUsage;
