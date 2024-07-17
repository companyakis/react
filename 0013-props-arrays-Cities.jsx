import React from "react";

function Cities({ userArray }) {
  return (
    <div>
      <h2>Cities</h2>
      {
        userArray.map((arrayElement, i) => {
            return <h3 key={i}>City: {arrayElement}</h3>
        })
      }
    </div>
  );
}

export default Cities;
