import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Coins from "./pages/Coins";
import CoinDetails from "./pages/CoinDetails";
import { GlobalStyle, Wrapper } from "./theme/GlobalStyle/styles";
import NavBar from "./components/NavBar";
import MarketBar from "./components/MarketBar";

export default class App extends Component {
	state = {
		currency: "usd",
	};

	handleCurrency = (currency) => {
		this.setState({ currency: currency.toLowerCase() });
	};

	componentDidUpdate() {}

	render() {
		return (
			<Wrapper>
				<GlobalStyle />
				<Router>
					<NavBar handleChange={this.handleCurrency} />
					<MarketBar currency={this.state.currency} />
					<Switch>
						<Route exact path="/" render={(props) => <Coins currency={this.state.currency} />} />
						<Route
							exact
							path="/coins/:coin"
							render={(props) => <CoinDetails currency={this.state.currency} {...props} />}
						/>
						<Route exact path="/portfolio" component={Portfolio} />
					</Switch>
				</Router>
			</Wrapper>
		);
	}
}
