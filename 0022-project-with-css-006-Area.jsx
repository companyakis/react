import React from 'react'

function Area({area}) {

  const {id, title, desc, pic} = area
    
  return (
    <div>
      <img src={pic} alt="lorem ipsum" />
      <h3>{title}</h3>
      <h4>{desc}</h4>
    </div>
  )
}

export default Area
