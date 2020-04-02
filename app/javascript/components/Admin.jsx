import React from 'react';
import Base from './admin/Base';
import Exercises from '../components/admin/exercises/Index';


class Admin extends Base {
  render() {
    return (
      <div className="primary-color align-items-center justify-content-center">
        <div className='row'>
          <div className="col-12"><Exercises /></div>
        </div>
      </div>
    )
  }
}

export default Admin
