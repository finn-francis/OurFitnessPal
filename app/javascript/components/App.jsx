import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from './Navbar';
import Admin from "./Admin";
import AdminNavbar from "./admin/NavBar";
import AdminExercises from './admin/exercises/Index';
import AdminExercisesShow  from './admin/exercises/Show';
import Login from './devise/sessions/New';
import Signup from './devise/registrations/New';

const routes = [
  {path: '/', component: Home},
  {path: '/admin', component: Admin},
  {path: '/admin/exercises', component: AdminExercises},
  {path: '/admin/exercises/:id', component: AdminExercisesShow},
  {path: '/login', component: Login},
  {path: '/signup', component: Signup}
]
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      areaTitle: null,
      area: 'admin'
    }
  }

  setAreaTitle(title) {
    this.setState({areaTitle: title})
  }

  setArea(area) {
    this.setState({area: area})
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
          <Navbar />
          {this.areaTitle()}
          <AdminNavbar area={this.state.area} />
          <Switch>
            {routes.map(({path, component: C}, i) => (
              <Route
                key={i} path={path} exact
                render={(props) => {
                  return (
                    <C
                      {...props}
                      setAreaTitle={this.setAreaTitle.bind(this)}
                      setArea={this.setArea.bind(this)}
                    />
                  )
                }}
              />
            ))}
          </Switch>
          <footer></footer>
        </Router>
      </div>
    )
  }
}

export default App