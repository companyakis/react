let signeddIn = false

let greeting = "Welcome to Our System!"

function App() {
  
  return (
    <div>
      {
        signeddIn ? <h1>{greeting}</h1> : <h4>Please, sign in the system!</h4>
      }
    </div>
  );
}

export default App;
