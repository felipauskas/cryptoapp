import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Portfolio from "./Pages/Portfolio"
import Coins from "./Pages/Coins"


export default class App extends Component {
  state = {
  };

  render() {
    return (
        <Router>
              <Link to="/coins">Coins</Link>
              <Link to="/portfolio">Portfolio</Link>
          <Switch>
            <Route exact path="/" component={Coins} />
            <Route exact path="/coins" component={Coins} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </Router>
    );
  }
}
