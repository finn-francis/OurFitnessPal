import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
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
);
