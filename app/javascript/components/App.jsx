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
  constructor(props) {
    super(props)
    this.state = {
      areaTitle: null
    }
  }

  setAreaTitle(title) {
    this.setState({areaTitle: title})
  }

  areaTitle() {
    if (this.state.areaTitle) {
      return (
        <div className="col-12">
          <h2>{this.state.areaTitle}</h2>
        </div>
      )
    } else {
      return <></>
    }
  }

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
              <Route key={i} path={path} exact render={(props) => <C {...props} setAreaTitle={this.setAreaTitle.bind(this)} />} />
            ))}
          </Switch>
          <footer></footer>
        </Router>
      </div>
    )
  }
}

export default App