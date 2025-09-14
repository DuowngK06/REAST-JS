import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
          <Link to='/'>Home </Link>/
          <Link to='/Detail'> Detail</Link>/
          <Link to='/Product'>Product </Link>/


    </div>
  )
}

export default Header
