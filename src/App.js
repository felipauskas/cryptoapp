import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio"
import Coins from "./pages/Coins"
import {GlobalStyle, Wrapper} from "./theme/GlobalStyle/styles"
import NavBar from './components/NavBar';
import MarketBar from './components/MarketBar';


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