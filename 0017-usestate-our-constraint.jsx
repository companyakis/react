import { useState } from "react";
import "./App.css";

function App() {
  const [year, setYear] = useState(2000);

  const yearDown = () => {
    if (year > 1990) {
      setYear(year - 1);
    }
  };

  const yearUp = () => {
    if (year < 2050) {
      setYear(year + 1);
    }
  };

  return (
    <>
      <div>
        <button
          onClick={yearDown}
          style={{ marginBottom: "30px", backgroundColor: "fuchsia" }}
        >
          Year -
        </button>
      </div>

      <div>Budget Year: {year}</div>

      <div>
        <button
          onClick={yearUp}
          style={{ marginTop: "30px", backgroundColor: "lightsteelblue" }}
        >
          Year +
        </button>
      </div>
    </>
  );
}

export default App;
