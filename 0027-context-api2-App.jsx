import "./App.css";

import AppContext from "./context/app-context";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";

function App() {
  
  let year = 2024;

  let month = "October";

  let name = "Mustafa Büyükdereli";

  return (
    <AppContext.Provider value={{ year, month, name }}>
      <ComponentOne />
      <ComponentTwo />
    </AppContext.Provider>
  );
}

export default App;
