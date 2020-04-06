import React from 'react';
import { defaultHeaders } from '../../../utils/request';

const Destroy = (_props) => {
  function handleClick(_event) {
    fetch('api/v1/logout', {
      method: 'DELETE',
      headers: defaultHeaders()
    })
      .then(response => {
        if (response.ok)
          return response.json
        throw new Error("Network response was not ok.")
      })
      .then(() => window.location.href = '/login')
      .catch(error => console.log(error.message))
  }

  return (
    <div>
      <button className='btn btn-danger' onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Destroy;