import "./App.css";
import useCounter from "./hooks/useCounter";

function App() {
  const {
    counter,
    increaseByOne,
    decreaseByOne,
    increaseRandom,
    decreaseRandom,
  } = useCounter();
  
  return (
    <>
      <div>{counter}</div>
      <div style={{marginTop:'10px'}}>
        <button onClick={increaseByOne}>Increase by One</button>
        <button onClick={decreaseByOne}>Decrease by One</button>
        <button onClick={increaseRandom}>Random Increase</button>
        <button onClick={decreaseRandom}>Random Decrease</button>
      </div>
    </>
  );
}

export default App;
