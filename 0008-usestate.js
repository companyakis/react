import React, { useState } from "react";

function HooksExample() {
  
  const [year, setYear] = useState(2024);

  const handleYear = () => setYear(year + 1);

  return (
    <div>
      <p>Year info: {year}</p>

      <button onClick={handleYear}>Year ++</button>
    </div>
  );
}

export default HooksExample;
