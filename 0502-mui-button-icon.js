import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";

function App() {
  return (
    <div className="App">
      <div>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<AddShoppingCartIcon />}
        >
          Add Item
        </Button>

        <Button
          variant="outlined"
          color="primary"
          size="large"
          endIcon={<AlarmOnIcon />}
        >
          Hurry
        </Button>
      </div>
    </div>
  );
}

export default App;
