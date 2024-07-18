import { useState } from "react";

function AddCity() {

    const [cities, setCities] = useState(["Ankara", "İzmir", "İstanbul"])
  
    const addBursa = () => setCities([...cities, "Bursa"])
  
    const addAdana = () => setCities([...cities, "Adana"])
  
    return (
      <div>
  
        <h1>Cities</h1>
  
        <button onClick={addAdana}>Add Adana</button>
        <br />
        <button onClick={addBursa}>Add Bursa</button>
  
        {
          cities.map((c,i) => 
            <p key={i}>City: {c}</p>
          )
        }
  
      </div>
    )
  
  }

  export default AddCity
