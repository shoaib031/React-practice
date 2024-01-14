import React, { useState } from 'react';

const Another = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleRegister = () => {
    if (userName === '' || userEmail === '' || userPassword === '') {
      alert('Please fill all the fields');
    } else if (!isValidEmail(userEmail)) {
      alert('Please enter a valid email address.');
    } else {
      setShowWelcome(true);
    }
  };

  const isValidEmail = (email) => {
    return email.includes('@');
  };

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    const input = event.target.value;
    setUserPassword(input);
  };

  return (
    <div className='signup-parent'>
      {showWelcome ? (
        <div className='file'>
          <div className='center'>
            <h1>WELCOME</h1>
            <p>{userName}</p>
          </div>
        </div>
      ) : (
        <div className='signup-form'>
          <div className='form-text'>
            <h2>Register</h2>
            <span>Enter your details below & register</span>
          </div>
          <div className='main'>
            <div className='form'>
              <label className='flex'>
                Your Name
                <input type='text' className='input' value={userName} onChange={handleNameChange} />
              </label>
            </div>
            <div className='form'>
              <label className='flex'>
                Your Email
                <input type='email' className='input' value={userEmail} onChange={handleEmailChange} />
              </label>
            </div>
            <div className='form'>
              <label className='flex'>
                Your Password
                <input type='text' className='input' value={userPassword} onChange={handlePasswordChange} />
              </label>
            </div>

            <div className='butter'>
              <button className='but' onClick={handleRegister}>
                Register
              </button>
            </div>
            <div className='account'>
              <span>Already have an account?</span>
              <div className='accounts'>
                <p>Login</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Another;
