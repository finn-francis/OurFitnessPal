import React from 'react';
import { Link } from "react-router-dom";
import LogoutButton from './devise/sessions/Destroy';

const Navbar = (_props) => {
  return (
    <nav>
      <Link to="/" className="btn btn-lg custom-button" role="button"><h1>Our Fitness Pal</h1></Link>
      <Link to="login" className='btn btn-info' role='button'>Sign in</Link>
      <Link to="signup" className='btn btn-info' role='button'>Sign up</Link>
      <LogoutButton />
    </nav>
  )
}

export default Navbar
