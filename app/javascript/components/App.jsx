import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../components/Home";
import Admin from "../components/Admin";
import AdminExercises from '../components/admin/exercises/Index'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <nav>
            <Link to="/" className="btn btn-lg custom-button" role="button"><h1>Our Fitness Pal</h1></Link>
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/admin/exercises" exact component={AdminExercises} />
          </Switch>
          <footer></footer>
        </Router>
      </div>
    )
  }
}

export default App