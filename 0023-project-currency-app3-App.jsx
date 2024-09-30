import { FaPersonWalkingArrowRight } from "react-icons/fa6";


import './App.css'

function App() {
  
  return (
    <div className="container">

      <div className="title">
        <h1>Currency App</h1>
      </div>

      <div className="calculate-area">
        <input type="number" className="from-cur"/>
        <select className="select-first">
          <option>USD $</option>
          <option>EURO €</option>
          <option>TL ₺</option>
        </select>

        <FaPersonWalkingArrowRight className="arrow"/>

        <select  className="select-second">
          <option>TL ₺</option>
          <option>EURO €</option>
          <option>USD $</option>
        </select>

        <input type="number" className="to-cur"/>

      </div>

      <div>
        <button className="calculator-button">Calculate</button>
      </div>
    </div>
  )
}

export default App
