import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3000"

function App() {

  // put (update)

  const updateManager = async (id, updatedInfo) => {

    //const response = await axios.put(`${BASE_URL}/managers/${id}`, updatedInfo)
    //console.log(response.data)
    await axios.put(`${BASE_URL}/managers/${id}`, updatedInfo)
  }
  
  useEffect(() => {

    const info = {"username" : "fin.kagan.bayram", "password": "Qwer.123456"}

    updateManager("148", info)

  }, [])
 

  return (
    <>

    </>
  )


}
export default App
