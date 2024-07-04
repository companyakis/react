import React from "react";
import { Stack, Button, ButtonGroup } from "@mui/material";

function ButtonGroupUsage() {
  return (
    <Stack direction="row">
      <ButtonGroup
        variant="contained"
        size="large"
        orientation="vertical"
        color="success"
      >
        <Button>AI</Button>
        <Button>Web3</Button>
        <Button>Algo Trading</Button>
      </ButtonGroup>
    </Stack>
  );
}

export default ButtonGroupUsage;
