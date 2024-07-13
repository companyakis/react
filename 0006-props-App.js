import "./App.css";
import Areas from "./components/Areas";

function App() {
  return (
    <div className="App">
      <Areas areaName="AI" areaDesciption="AI is here" />

      <Areas areaName="Web3" areaDesciption="Web3 is here" />

      <Areas
        areaName="AR and MetaVerse"
        areaDesciption="AR and MetaVerse are here"
      />

      <Areas areaName="Algo Trade" areaDesciption="Algo Trade is here" />
    </div>
  );
}

export default App;
