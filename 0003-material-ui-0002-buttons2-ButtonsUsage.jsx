import { Stack, Button } from "@mui/material";
import React from "react";

function ButtonsUsage() {
  return (
    <Stack direction="row" spacing={3} >
      <Button variant="contained" color="primary">Color 1</Button>
      <Button variant="contained" color="secondary">Color 2</Button>
      <Button variant="contained" color="success">Color 3</Button>
      <Button variant="contained" color="error">Color 4</Button>
      <Button variant="contained" color="warning">Color 5</Button>
      <Button variant="contained" color="info">Color 6</Button>
    </Stack>
  );
}

export default ButtonsUsage;
