import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../components/Home";
import Admin from "../components/Admin";
import AdminNavbar from "../components/admin/NavBar";
import AdminExercises from '../components/admin/exercises/Index';
import Login from '../components/devise/sessions/New';
import LogoutButton from '../components/devise/sessions/Destroy';

const routes = [
  {path: '/', component: Home},
  {path: '/admin', component: Admin},
  {path: '/admin/exercises', component: AdminExercises},
  {path: '/login', component: Login}
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
          <nav>
            <Link to="/" className="btn btn-lg custom-button" role="button"><h1>Our Fitness Pal</h1></Link>
            <Link to="login" className='btn btn-info' role='button'>Sign in</Link>
            <LogoutButton />
          </nav>
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