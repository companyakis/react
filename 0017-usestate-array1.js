import React, { useState } from 'react'

function RandomNumbers() {

    const [numbers, setNumbers] = useState([])

    const handleClick = () => {
        setNumbers([...numbers, Math.floor(Math.random() * 100)])
    }

  return (
    <div>
        <h3>Add a Random Number</h3>

        <button onClick={handleClick}>Random Number Generator</button>

        {
            numbers.map((n, i) => (
                <h5 key={i}>Random number: {n}</h5>
            ))
        }
      
    </div>
  )
}

export default RandomNumbers
