import React from "react";
import Base from "../Base";
import { Link } from "react-router-dom";

class New extends Base {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      password_confirmation: ""
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault()
    const url = "/api/v1/login"
    const { email, password, password_confirmation } = this.state

    if (email.length == 0 || password.length == 0 || password_confirmation.length == 0)
      return

    const body = { user: { email, password, password_confirmation } }
    const token = document.querySelector('meta[name="csrf-token"]').content

    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("Network response was not ok.")
      })
      .then(_response => this.props.history.push('/'))
      .catch(error => console.log(error.message))
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">Log in</h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password_confirmation">Password Confirmation</label>
                <input
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className="btn btn-success mt-3">
                Sign in
              </button>
              <Link to="/" className="btn btn-link mt-3">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default New