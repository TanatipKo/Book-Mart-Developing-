import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className='header'>
        <Link to="/" className='logo'>
        <img src="/src/assets/Pic/Logo-Pic.svg" alt="logo" className='logo-img' />
        </Link>

        <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/category">Category</Link>
            <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/signin" className='login'>Login</Link>
    </header>
  )
}

export default Navbar