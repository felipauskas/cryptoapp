import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Portfolio, Coins, CoinDetails } from "pages";
import { NavBar, MarketBar } from "components";
import { ViewportProvider } from "utils";
import { GlobalStyle, Wrapper } from "./theme/GlobalStyle/styles";

export default function App() {
	const [currency, setCurrency] = useState("usd");
	const { theme } = useSelector((state) => state);

	const handleCurrency = (currency) => {
		setCurrency(currency.toLowerCase());
	};

	return (
		<ViewportProvider>
			<Wrapper>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Router>
						<NavBar handleChange={handleCurrency} />
						<MarketBar currency={currency} />
						<Switch>
							<Route exact path="/" render={(props) => <Coins currency={currency} />} />
							<Route exact path="/coins/:coin" render={(props) => <CoinDetails currency={currency} {...props} />} />
							<Route exact path="/portfolio" component={Portfolio} />
						</Switch>
					</Router>
				</ThemeProvider>
			</Wrapper>
		</ViewportProvider>
	);
	// }
}
