import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Portfolio, Coins, CoinDetails } from "pages";
import { NavBar, MarketBar } from "components";
import { ViewportProvider } from "utils";
import { GlobalStyle, Wrapper } from "./theme/GlobalStyle/styles";

export default function App() {
	const { theme } = useSelector((state) => state);

	return (
		<ViewportProvider>
			<Wrapper>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Router>
						<NavBar />
						<MarketBar />
						<Switch>
							<Route exact path="/" component={Coins} />
							<Route exact path="/coins/:coin" render={(props) => <CoinDetails {...props} />} />
							<Route exact path="/portfolio" component={Portfolio} />
						</Switch>
					</Router>
				</ThemeProvider>
			</Wrapper>
		</ViewportProvider>
	);
}
