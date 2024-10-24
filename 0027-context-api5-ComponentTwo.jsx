import { useContext } from "react";
import AppContext from "./context/app-context";

function ComponentTwo() {
  
  const {name} = useContext(AppContext);

  return (
    <div>
      <h2>My Name</h2>
      <h3>
       {name} 
      </h3>
    </div>
  );
}

export default ComponentTwo;
