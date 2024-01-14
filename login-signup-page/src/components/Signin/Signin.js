import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (userEmail === '' || userPassword === '') {
      alert('Please fill in all fields before logging in.');
    } else if (!isValidEmail(userEmail)) {
      alert('Please enter a valid email address.');
    } else {
      setLoggedIn(true);
    }
  };

  const isValidEmail = (email) => {
    return email.includes('@');
  };

  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setUserPassword(event.target.value);
  };

  return (
    <div className='signup-parent'>
      {loggedIn ? (
        <div className='file'>
          <div className='center'>
            <h1>WELCOME</h1>
          </div>
        </div>
      ) : (
        <div className='signup-form'>
          <div className='form-text'>
            <h2>Login</h2>
          </div>
          <div className='main'>
            <div className='form'>
              <label className='flex'>
                Your Email
                <input type='email' className='input' value={userEmail} onChange={handleEmailChange} />
              </label>
            </div>
            <div className='form'>
              <label className='flex'>
                Your Password
                <input type='password' className='input' value={userPassword} onChange={handlePasswordChange} />
              </label>
            </div>
            <div className='butter'>
              <button className='but' onClick={handleLogin}>
                Login
              </button>
            </div>
            <div className='account'>
              <span>Don't have an account?</span>
              <div className='accounts'>
                <Link to={'/Signup'} className='aaoo'>Register</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signin;
