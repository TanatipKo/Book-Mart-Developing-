import React, { useState } from 'react'
import './Signin.css'
import { FaUser,FaLock } from "react-icons/fa";


function Signin({ onLogin }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onLogin(username, password);
    if (!success) {
      setError('Invalid username or password');
    } else {
      setError(''); // Clear any previous errors
      // No need to redirect here, App.jsx handles it
    }
  };

  return (
      <div className='wrapper'>
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>

            {error && <p className="error-message">{error}</p>}

            <div className="input-box">
                <input type="text" placeholder='Username'required onChange={(e) => setUsername(e.target.value)}/>
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password'required onChange={(e) => setPassword(e.target.value)}/>
                <FaLock className='icon'/>
            </div>

            <div className='remeber-forgot'>
              <label><input type="checkbox" />Remember me</label>
              <a href="#">Forgot password?</a>
            </div>

            <button type='submit'>Login</button>
            {error && <p className="error">{error}</p>} {/* Display error message */}

            <div className="register-link">
              <p>Don't have an account? <a href="#">Register</a></p>
            </div>

          </form>
      </div>
  )
}

export default Signin