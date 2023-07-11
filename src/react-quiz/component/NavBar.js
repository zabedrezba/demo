import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <NavLink to="/" className='nav-link'>Home</NavLink>
        <NavLink to="/about" className='nav-link'>About</NavLink>
        <NavLink to="/contact" className='nav-link'>Contact us</NavLink>
        <NavLink to="/quizes" className='nav-link'>Quizes</NavLink>
    </nav>
  )
}

export default NavBar