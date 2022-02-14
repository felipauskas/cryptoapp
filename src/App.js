import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Coins from "./pages/Coins";
import CoinDetails from "./pages/CoinDetails";
import { GlobalStyle, Wrapper } from "./theme/GlobalStyle/styles";
import NavBar from "./components/NavBar";
import MarketBar from "./components/MarketBar";
import { ViewportProvider } from "utils";

export default function App() {
	const [currency, setCurrency] = useState("usd");

	const handleCurrency = (currency) => {
		setCurrency(currency.toLowerCase());
	};

	return (
		<ViewportProvider>
			<Wrapper>
				<GlobalStyle />
				<Router>
					<NavBar handleChange={handleCurrency} />
					<MarketBar currency={currency} />
					<Switch>
						<Route exact path="/" render={(props) => <Coins currency={currency} />} />
						<Route
							exact
							path="/coins/:coin"
							render={(props) => <CoinDetails currency={currency} {...props} />}
						/>
						<Route exact path="/portfolio" component={Portfolio} />
					</Switch>
				</Router>
			</Wrapper>
		</ViewportProvider>
	);
	// }
}
