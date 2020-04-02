import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <nav>
          <h1>Our Fitness Pal</h1>
        </nav>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/workouts" exact component={Workouts} /> */}
          </Switch>
        </Router>
        <footer></footer>
      </div>
    )
  }
}

export default App