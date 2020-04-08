import React from "react";
import { Link } from "react-router-dom";
import Base from './main/Base';

class Home extends Base {
  componentDidMount() {
    const url = '/api/v1/homepage'
    fetch(url)
      .then(response => {
        if (response.ok)
          return response.json();
        throw new Error("Network response was not ok.")
      })
      .then(response => {
        this.props.setCurrentUser(response)
      })
      .catch(error => console.log(error.message))
  }

  render() {
    return (
      <div className="primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="secondary-color">
          <h1 className="display-4">My Workouts</h1>
          <p className="lead">
            An app to track all of your fitness goals
          </p>
          <hr className="my-4" />
          <Link to="/admin" className="btn btn-lg custom-button btn btn-info" role="button">
            Admin area
          </Link>
        </div>
      </div>
    </div>
    )
  }
}

export default Home
