import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className='header'>
        <Link className='header-link'>Main Page</Link>
        <Link className='header-link'>Products</Link>
        <Link className='header-link'>About</Link>
      </div>
    </div>
  )
}

export default Header

// src\components\Header.jsx
