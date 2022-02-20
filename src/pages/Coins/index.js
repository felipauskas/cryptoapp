import React, { Component } from "react";
import { CoinTable, CryptoChart } from "components";
import { Container, Overview } from "./styles";

export default class Coins extends Component {
	render() {
		return (
			<Container>
				<Overview>BITCOIN OVERVIEW</Overview>
				<CryptoChart currency={this.props.currency} />
				<Overview>MARKET OVERVIEW</Overview>
				<CoinTable currency={this.props.currency} />
			</Container>
		);
	}
}
