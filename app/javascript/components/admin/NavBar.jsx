import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const NavBar = (props) => {
  if (props.area === 'admin') {
    return (
      <div className="row">
        <div className="col-12">
          <nav className="nav nav-tabs">
            <Link to='admin/exercises' className='nav-item nav-link active'>Exercises</Link>
            <a href="#" className="nav-item nav-link">Equipment</a>
          </nav>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default NavBar
