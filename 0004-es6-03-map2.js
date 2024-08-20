import "./App.css";

function App() {
  let cities = [
    "İzmir",
    "Ankara",
    "Kahramanmaraş",
    "İstanbul",
    "Adana",
    "Mersin",
  ];

  return (
    <>
      <p>Some Cities:</p>

      {cities.map((city, id) => (
        <div style={{ marginBottom: "15px" }} key={id}>
          City: {city}
        </div>
      ))}
    </>
  );
}

export default App;
