import { useState } from 'react'

function useCounter() {

    const [counter, setCounter] = useState(0)

    const increaseByOne = () => {
        setCounter(counter + 1)
    }

    const decreaseByOne = () => {
        setCounter(counter - 1)
    }

    const increaseRandom = () => {
        setCounter(counter + Math.floor(Math.random() * 100))
    }

    const decreaseRandom = () => {
        setCounter(counter - Math.floor(Math.random() * 100))
    }


  return {
    counter, increaseByOne, decreaseByOne, increaseRandom, decreaseRandom
  }

}

export default useCounter
