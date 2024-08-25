import { useState } from "react";
import "./App.css";

function App() {

const [ready, setReady] = useState(false)

const aProverb = "A rolling stone gathers no moss..."

const handleClick = () => setReady(true)

const question = "Do you want to see a proverb?"
  

  return (
    <>
      {
        !ready ? <div>{question}</div> : <div>{""}</div>
      }

      <div>
      {
        ready ? <div>{aProverb}</div> : <div>{""}</div>
      }
      </div>

      <div><button onClick={handleClick} style={{marginTop:"20px", backgroundColor:"cyan"}}>Show</button></div>

    </>
  );
}

export default App;
