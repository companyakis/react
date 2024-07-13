import React from "react";

function Areas({ areaName, areaDesciption, areaPicture }) {
  return (
    <>
      <img src={areaPicture} alt="" />

      <div>{areaName}</div>

      <div>{areaDesciption}</div>
    </>
  );
}

export default Areas;
