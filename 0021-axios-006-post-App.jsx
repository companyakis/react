import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3000"

function App() {

  // post!

  const addManager = async (newMana) => {
    const response = await axios.post(`${BASE_URL}/managers`, newMana)
    //console.log(response.data)
  }


  useEffect(() => {

    const newManager = {"id": 148, "username": "fin.kagan", "password": "Qwer4321"}

    addManager(newManager)

  }, [])
 

  return (
    <>

    </>
  )


}
export default App
