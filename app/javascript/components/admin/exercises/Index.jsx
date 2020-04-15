import React from 'react';
import { Link } from "react-router-dom";
import ConfirmationModal from "../../modals/ConfirmationModal";
import { defaultHeaders } from "../../../utils/request";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Alert from 'react-bootstrap/Alert'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      exercises: [],
      success: false
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
      .then(response => this.setState({ exercises: response }))
      .catch(error => console.log(error.message))
  }

  deleteExercise(id) {
    let url = "/api/v1/exercises";
    fetch(url + '/' + id, {
      method: 'delete',
      headers: defaultHeaders()
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then(response => this.setState({ exercises: response.data, success: true }));
  }

  render() {
    const alert = <Alert variant={'success'} dismissible onClose={() => this.setState({success: false})}>
                    Exercise deleted
                  </Alert>
    const { exercises } = this.state;
    const allExercises = exercises.map((exercise, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4 exercise">
          <div className="card-body">
            <h5 className="card-title">{exercise.name}</h5>
            <Link to={`/admin/exercises/${exercise.id}`} className="btn btn-primary view-exercise">
              View Exercise
            </Link>
            <div className="delete-exercise ml-2 float-right">
              <ConfirmationModal
                buttonText={<DeleteIcon/>}
                variant={'danger'}
                modalHeader={'Delete Confirmation'}
                modalBody={`Are you sure you would like to delete ${exercise.name}?`}
                cancelText={'Cancel'}
                confirmText={'Delete Exercise'}
                handleConfirm={this.deleteExercise.bind(this, exercise.id)}
              />
            </div>
            <Link to={`/admin/exercises/${exercise.id}/edit`} className="btn btn-info float-right edit-exercise">
              <EditIcon/>
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
            { this.state.success ? alert : '' }
            <div className="text-right mb-3">
              <Link to="/admin/exercises/new" className="btn custom-button add-exercise">
                Create New Exercise
              </Link>
            </div>
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