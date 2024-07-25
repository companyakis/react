import React, { useState, useEffect } from 'react'

function MultipleAmounts() {

    const [counter, setCounter] = useState(0)

    const [plus, setPlus] = useState(1)

    useEffect(() => {
      console.log("counter or plus state changed!")
    }, [counter, plus])

  return (
    <div>
        <h1>Counter value: {counter}</h1>

        <br/>

        <button onClick={() => setCounter(counter + plus)}>Counter Up</button>

        <br />

        <h2>Plus?</h2>

        <button onClick={() => setPlus(1)}>Plus 1</button>

        <button onClick={() => setPlus(5)}>Plus 5</button>

        <button onClick={() => setPlus(10)}>Plus 10</button> 
      
    </div>
  )
}

export default MultipleAmounts
