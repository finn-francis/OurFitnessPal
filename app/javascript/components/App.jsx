import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../components/Home";
import Admin from "../components/Admin";
import AdminExercises from '../components/admin/exercises/Index'

const routes = [
  {path: '/', component: Home},
  {path: '/admin', component: Admin},
  {path: '/admin/exercises', component: AdminExercises}
]
class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <nav>
            <Link to="/" className="btn btn-lg custom-button" role="button"><h1>Our Fitness Pal</h1></Link>
          </nav>
          {this.areaTitle()}
          <Switch>
            {routes.map(({path, component: C}, i) => (
              <Route key={i} path={path} exact render={(props) => <C {...props} />} />
            ))}
          </Switch>
          <footer></footer>
        </Router>
      </div>
    )
  }
}

export default App