import { useContext } from "react";
import AppContext from "./context/app-context";

function ComponentOne() {
  const { month, year} = useContext(AppContext);
  
  return (
    <div >
      <h2>Month and Year Info</h2>
      <p>Month: {month}</p>
      <p>Year: {year}</p>
    </div>
  );
}

export default ComponentOne;
