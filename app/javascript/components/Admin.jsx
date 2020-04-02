import React from 'react';
import { BrowserRouter as Route, Switch, Link } from "react-router-dom";
import Exercises from '../components/admin/exercises/Index'


class Admin extends React.Component {
  componentDidMount() {
    this.props.setAreaTitle('Admin Area')
  }

  render() {
    return (
      <div className="primary-color align-items-center justify-content-center">
        <div className="row">
          <div className="col-12">
            <nav className="nav nav-tabs">
              <Link to='admin/exercises' className='nav-item nav-link active'>Exercises</Link>
              <a href="#" className="nav-item nav-link">Equipment</a>
            </nav>
          </div>
        </div>
        <div className='row'>
          <div className="col-12"><Exercises /></div>
        </div>
      </div>
    )
  }
}

export default Admin
