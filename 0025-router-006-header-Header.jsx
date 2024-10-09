import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className='header'>
        <Link>Main Page</Link>
        <Link>Products</Link>
        <Link>About</Link>
      </div>
    </div>
  )
}

export default Header

// src\components\Header.jsx
