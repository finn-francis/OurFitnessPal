import React from 'react';
import { Link } from "react-router-dom";

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      exercises: []
    };
  }

  componentDidMount() {
    const url = "/api/v1/exercises";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ exercises: response }));
  }

  render() {
    const { exercises } = this.state;
    const allExercises = exercises.map((exercise, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">{exercise.name}</h5>
            <Link to={`/admin/exercises/${exercise.id}`} className="btn custom-button">
              View Exercise
            </Link>
          </div>
        </div>
      </div>
    ));
    const noExercises = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4 className='no-exercises'>
          No exercises
        </h4>
      </div>
    );

    return (
      <>
        <div className="py-5">
          <main className="container">
            <div className="row">
              {exercises.length > 0 ? allExercises : noExercises}
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default Index;