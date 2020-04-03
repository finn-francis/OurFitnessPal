import React from 'react';
import { useHistory } from 'react-router-dom';

const Destroy = (props) => {
  function handleClick(_event) {
    let token = document.querySelector('meta[name="csrf-token"]').content
    fetch('api/v1/logout', {
      method: 'DELETE',
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
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