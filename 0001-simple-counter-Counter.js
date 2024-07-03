import React, {useState} from 'react'

const CounterApp = () => {

    const [counter, setCounter] = useState(0)

    const counterUp = () => setCounter(counter => counter + 1)

    const counterDown = () => setCounter(counter => counter - 1)

    const counterReset = () => setCounter(0)

    return (
        <div>

            <button onClick={counterUp}>Counter ++</button>
            <br/>
            <h3>Counter: {counter}</h3>
            <br/>
            <button onClick={counterDown}>Counter --</button>
            <br/>
            <br/>
            <button onClick={counterReset}>Counter Reset</button>

        </div>
    )

}

export default CounterApp
