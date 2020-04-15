import React from 'react';
import Base from '../Base';
import { Link } from "react-router-dom";

class Index extends Base {
  constructor(props) {
    super(props)
    this.state = { sessions: [] }
  }

  componentDidMount() {
    const url = "/api/v1/sessions"
    fetch(url)
      .then(response => {
        if (response.ok)
          return response.json()

        throw new Error("Network response was not ok.")
      })
      .then(response => this.setState({ sessions: response }))
      .catch(error => console.log(error.message))
  }

  sessionList() {
    return (
      this.state.sessions.map((session, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          <div className="card mb-4 session">
            <div className="card-body">
              <h5 className="card-title">{session.name}</h5>
              <Link to={`/sessions/${session.id}`} className="btn btn-info view-session">
                View Session
              </Link>
            </div>
          </div>
        </div>
      ))
    )
  }

  noSessions() {
    return (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4 className='no-sessions'>
          No sessions
        </h4>
      </div>
    );
  }

  render() {
    return (
      <>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/sessions/new" className="btn btn-info add-session">
                Create New Session
              </Link>
            </div>
            <div className="row">
              {this.state.sessions.length > 0 ? this.sessionList() : this.noSessions()}
            </div>
          </main>
        </div>
      </>
    )
  }
}

export default Index
