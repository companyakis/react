import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3000"

function App() {

  // get!

  const getManagers = async () => {
    const response = await axios.get(BASE_URL + "/managers")
    console.log(response.data)
  }

  const getManagerById = async (id) => {
    const response = await axios.get(`${BASE_URL}/managers/${id}`)
    console.log(response.data)
  }

  useEffect(() => {
    getManagers()
  }, [])
 

  return (
    <>

    </>
  )
}

export default App
