import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <div style={{ marginBottom: "70px" }}>
        <Button variant="text">Button 1</Button>
        <Button variant="outlined">Button 2</Button>
        <Button variant="contained">Button 3</Button>

        <Button variant="contained" color="success">
          Button 4
        </Button>
      </div>
      <div>
        <Button variant="contained" color="primary" size="medium">
          Button 5
        </Button>
        <Button variant="outlined" color="info" size="large">
          Button 6
        </Button>
        <Button variant="contained" color="inherit" size="small">
          Button 7
        </Button>
      </div>
    </div>
  );
}

export default App;
