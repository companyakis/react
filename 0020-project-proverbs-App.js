import { useState } from "react";
import Proverbs from "./Proverbs";

let allProverbs = [
  "Kurt kışı geçirir, ama yediği ayazı unutmaz",
  "Su uyur, düşman uyumaz",
  "A rolling stone gathers no moss",
  "Out of sight, out of mind",
  "A barking dog never bites",
  "Ayağını yorganına göre uzat"
]

function getRandomProverb() {
  return allProverbs[Math.floor(Math.random() * allProverbs.length)]
}



function App() {

  const [proverbs, setProverbs] = useState([])

  const handleClick = () => {
    setProverbs([...proverbs, getRandomProverb()])
  }

  const screenProverbs = proverbs.map((proverb, index) => {
    return <Proverbs key={index} aProverb={proverb} />
  })


  return (
    <div className="App">
      <button type="button" className="btn btn-success m-3" onClick={handleClick}>Add a Proverb</button>
      
      <div className="bg-success text-white text-center">{screenProverbs}</div>
      
    </div>
  );
}

export default App;
