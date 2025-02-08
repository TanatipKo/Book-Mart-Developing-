import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Login_Nav from './components/login_Nav/Login_Nav';


import Home from './components/homepage/Home';
import New from './components/categorypage/Category';
import Contact from './components/contactpage/Contact';
import Signin from './components/loginpage/Signin';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (username, password) => {
    const users = [
      { username: 'usertim1', password: 'password1' },
      { username: 'userpeem2', password: 'password2' },
      { username: 'userpat3', password: 'password3' },
    ];

    const foundUser = users.find(u => u.username === username && u.password === password);

    if (foundUser) {
      setIsLoggedIn(true);
      setUser(foundUser); 
      return true; 
    }
    return false; 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  useEffect(() => {  
    console.log("user:", user);
  }, [isLoggedIn, user]);


  useEffect(() => {
    console.log("isLoggedIn:", isLoggedIn);
    console.log("user:", user);
  }, [isLoggedIn, user]);

  return (
    <BrowserRouter>
      {isLoggedIn ? <Login_Nav onLogout={handleLogout} user={user} /> : <Navbar />}
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home user={user} /> : <Navigate to="/signin" />} />
        <Route path="/category" element={isLoggedIn ? <category user={user} /> : <Navigate to="/signin" />} />
        <Route path="/contact" element={isLoggedIn ? <Contact user={user} /> : <Navigate to="/signin" />} />
        <Route path="/signin" element={!isLoggedIn ? <Signin onLogin={handleLogin} /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
