import "./App.css";
import Area from "./Area";
import Header from "./Header";
import {areas} from "./data"


function App() {
  return (
    <>
      <Header />
      
      {
        areas?.map((area) => (
          <Area key={area.id} area={area} />
        ))
      }

    </>
  );
}

export default App;
