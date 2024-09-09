import "./App.css";
import Area from "./Area";
import Header from "./Header";
import {areas} from "./data"


function App() {
  return (
    <>
      <Header />

      <div className="area-main">
      {
        areas?.map((area) => (
          <Area key={area.id} area={area} />
        ))
      }
      </div>
      


    </>
  );
}

export default App;
