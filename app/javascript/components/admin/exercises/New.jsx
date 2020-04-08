import React from "react";
import { Link } from "react-router-dom";
import { defaultHeaders } from "../../../utils/request";

class New extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: ""
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
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
    const url = "/api/v1/exercises";
    const { name, description } = this.state;

    if (name.length == 0)
      return;

    const body = {
      name,
      description: description.replace(/\n/g, "<br> <br>")
    };

    fetch(url, {
      method: "POST",
      headers: defaultHeaders(),
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Add a new exercise
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="exerciseName">Exercise name</label>
                <input
                  type="text"
                  name="name"
                  id="exerciseName"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="5"
                required
                onChange={this.onChange}
              />
              <button type="submit" className="btn submit-button custom-button mt-3">
                Create Exercise
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

export default New;