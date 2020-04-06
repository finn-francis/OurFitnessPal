import React from 'react';
import { Link } from "react-router-dom";
import LogoutButton from './devise/sessions/Destroy';

const Navbar = (props) => {
  const sessionAndRegestrationOptions = () => {
    if (props.currentUser) {
      return (
        <LogoutButton />
      )
    } else {
      return (
        <div>
          <Link to="login" className='btn btn-info' role='button'>Sign in</Link>
          <Link to="signup" className='btn btn-info' role='button'>Sign up</Link>
        </div>
      )
    }
  }

  return (
    <nav>
      <Link to="/" className="btn btn-lg custom-button" role="button"><h1>Our Fitness Pal</h1></Link>
      {sessionAndRegestrationOptions()}
    </nav>
  )
}

export default Navbar
