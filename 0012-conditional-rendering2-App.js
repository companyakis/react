import SimpleSigninPage from "./components/SimpleSigninPage";

let signeddIn = false

let greeting = "Welcome to Our System!"

function App() {
  

  return (
    <div>
      {
        signeddIn ? <h1>{greeting}</h1> : <SimpleSigninPage />
      }
    </div>
  );
}

export default App;
