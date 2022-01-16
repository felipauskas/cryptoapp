import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Portfolio from "./Pages/Portfolio"
import Coins from "./Pages/Coins"
import {GlobalStyle, Wrapper} from "./theme/GlobalStyle/styles"
import NavBar from './Components/NavBar';
import MarketBar from './Components/MarketBar';


export default class App extends Component {
  state = {
  };

  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <Router>
          <NavBar/>
          <MarketBar/>
          <Switch>
            <Route exact path="/" component={Coins} />
            <Route exact path="/coins" component={Coins} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </Router>
      </Wrapper>
    );
  }
}