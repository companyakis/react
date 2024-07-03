import { Stack, Button } from "@mui/material";
import React from "react";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

function ButtonsUsage() {
  return (
    <Stack direction="row" spacing={5}>
      <CurrencyExchangeIcon color="warning" />
      <Button variant="contained" startIcon={<CurrencyExchangeIcon />}>
        Gain 1
      </Button>
      <Button
        variant="contained"
        endIcon={<CurrencyExchangeIcon color="error" />}
        onClick={() => alert("Clicked!")}
      >
        Gain 2
      </Button>
    </Stack>
  );
}

export default ButtonsUsage;
