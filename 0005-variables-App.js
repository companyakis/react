import './App.css';

function App() {
  
  const myName = "Mustafa"

  let year = 2024

  let picture = "https://picsum.photos/420/500"

  let isCompleted = false

  return (
    
    <div className="App">

      <p>My Name is {myName}</p>

      <p>This year: {year}</p>

      <br/>

      <img src={picture} alt="ceteris paribus" />

      {isCompleted ? <p>I'm ready!</p> : <p>I need some time...</p>}

    </div>
  )
}

export default App
