import React from "react";
import Alert from 'react-bootstrap/Alert'
import { Link } from "react-router-dom";
import { defaultHeaders } from "../../../utils/request";

class Edit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: "",
      errors: {
        name: [],
        description: []
      },
      success: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/api/v1/exercises/${id}/edit`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ name: response.name, description: response.description }));
  }

  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const url = `/api/v1/exercises/${id}`;
    const { name, description } = this.state;

    if (name.length == 0)
      return;

    const body = {
      name,
      description: description.replace(/\n/g, "<br> <br>")
    };

    fetch(url, {
      method: "PUT",
      headers: defaultHeaders(),
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .catch(error => console.log(error.message))
      .then(response => {
        if (response.error) {
          this.setState({
            errors: response.data
          })
        } else {
          this.setState({
            success: true
          });
        }
      })
  }

  render() {
    const alert = <Alert variant={'success'} dismissible onClose={() => this.setState({success: false})}>
                    Exercise updated
                  </Alert>

    return (
      <div className="container mt-5">
        { this.state.success ? alert : '' }
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Edit exercise
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="exerciseName">Exercise name</label>
                <label className="ml-1">{this.state.errors.name.join(', ')}</label>
                <input
                  type="text"
                  name="name"
                  id="exerciseName"
                  className="form-control"
                  required
                  onChange={this.onChange}
                  value={this.state.name}
                />
              </div>
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="5"
                onChange={this.onChange}
                value={this.state.description}
              />
              <button type="submit" className="btn submit-button custom-button mt-3">
                Save
              </button>
              <Link to="/admin/exercises" className="btn btn-link mt-3">
                Back to exercises
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;