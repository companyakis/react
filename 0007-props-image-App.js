import "./App.css";
import Areas from "./components/Areas";
import AI from "./pictures/ai.png";
import AR from "./pictures/ar.png";
import BC from "./pictures/bc.png";
import AlgoTrade from "./pictures/algotrade.png";

function App() {
  return (
    <div className="App">
      <Areas areaPicture={AI} areaName="AI" areaDesciption="AI is here" />

      <Areas areaPicture={BC} areaName="Web3" areaDesciption="Web3 is here" />

      <Areas
        areaPicture={AR}
        areaName="AR and MetaVerse"
        areaDesciption="AR and MetaVerse are here"
      />

      <Areas
        areaPicture={AlgoTrade}
        areaName="Algo Trade"
        areaDesciption="Algo Trade is here"
      />
    </div>
  );
}

export default App;
