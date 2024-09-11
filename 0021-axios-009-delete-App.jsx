import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3000"

function App() {

  // delete

  const deleteManager = async (idx) => {
    await axios.delete(`${BASE_URL}/managers/${idx}`)
  }


  useEffect(() => {

    deleteManager("148")

  }, [])
 

  return (
    <>

    </>
  )


}
export default App
