import React from "react";
import { Link } from "react-router-dom";

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exercise: { description: "" } };
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/api/v1/exercises/${id}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ exercise: response }));
  }

  render() {
    const { exercise } = this.state;

    return (
      <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <div className="overlay position-absolute" />
          <h1 className="display-4 position-relative exercise-name">
            {exercise.name}
          </h1>
        </div>
        <div className="container py-3">
          <div className="row">
            <div className="col-sm-12 col-lg-7">
              <h5 className="mb-2">Exercise Description</h5>
              <p className="exercise-description">{exercise.description}</p>
            </div>
          </div>
          <Link to="/admin/exercises" className="btn btn-link">
            Back to exercises
          </Link>
        </div>
      </div>
    );
  }
}

export default Show;