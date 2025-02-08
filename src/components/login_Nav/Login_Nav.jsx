import React from 'react'
import { Link } from 'react-router-dom'
import './Login_Nav.css'
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaBasketShopping } from "react-icons/fa6";


function Login_Nav({ onLogout, user }) {
  return (
    <header className='header'>
        <Link to="/" className='logo'>
        <img src="/src/assets/Pic/Logo-Pic.svg" alt="logo" className='logo-img' />
        </Link>

        <nav className='navbar'>
          <Link to="/">Home</Link>
          <Link to="/category">category</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="logout-container">
          <Link to="/signin" className='login' onClick={onLogout}>Logout</Link>
          <HiOutlineUserCircle className='icon1'/>
          <FaBasketShopping className='icon2'/>
          {user && <span className="username">{user.username}</span>}
        </div>

    </header>
  )
}

export default Login_Nav