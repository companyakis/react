import React from 'react'

function Area({area}) {

  const {id, title, desc, pic} = area
    
  return (
    <div>
      <img src={pic} width={200} height={100} alt="lorem ipsum" />
      <h3 className='area-title'>{title}</h3>
      <p className='area-desc'>{desc}</p>
    </div>
  )
}

export default Area
