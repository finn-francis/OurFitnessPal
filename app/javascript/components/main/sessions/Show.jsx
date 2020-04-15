import React from 'react';
import Base from '../Base';
import { Link } from 'react-router-dom';

class Show extends Base {
  constructor(props) {
    super(props)
    this.state = { session: {} }
  }

  render() {
    const { session } = this.state;

    return (
      <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <div className="overlay position-absolute" />
          <h1 className="display-4 position-relative session-name">
            {session.name}
          </h1>
        </div>
        <div className="container py-3">
          <div className="row">
            <div className="col-sm-12 col-lg-7">
              <h5 className="mb-2">Session Notes</h5>
              <p className="session-notes">{session.notes}</p>
            </div>
          </div>
          <Link to="/sessions" className="btn btn-link">
            Back to sessions
          </Link>
        </div>
      </div>
    );
  }
}

export default Show;