import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className='navbar-parent'>
        <div className='navbar'>
          <div>
            <h3>Register Page</h3>
          </div>
          <div className='links'>
            <Link to={'/signup'} className='button'>
              Register
            </Link>
            <Link to={'/signin'} className='button'>
              Login
            </Link>
            <Link className='button'>Logout</Link>
          </div>
          <a onClick={() => setToggle(!toggle)}>
            <i className="fa-solid fa-bars fa-2x"></i>
          </a>
          {toggle && (
            <div className='ham-burger'>
              <Link to={'/signup'} className='button'>
                Register
              </Link>
              <Link to={'/signin'} className='button'>
                Login
              </Link>
              <Link className='button'>Logout</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
