import Areas from "./components/Areas";
import AI from "./pictures/ai.png";
import AR from "./pictures/ar.png";
import BC from "./pictures/bc.png";
import AlgoTrade from "./pictures/algotrade.png";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: 25 }}>Important Areas</Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 8 }}>
          <Grid item lg={3} md={6} xs={12}>
            <Areas areaPicture={AI} areaName="AI" areaDesciption="AI is here" />
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Areas
              areaPicture={BC}
              areaName="Web3"
              areaDesciption="Web3 is here"
            />
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Areas
              areaPicture={AR}
              areaName="AR and MetaVerse"
              areaDesciption="AR and MetaVerse are here"
            />
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Areas
              areaPicture={AlgoTrade}
              areaName="Algo Trade"
              areaDesciption="Algo Trade is here"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
