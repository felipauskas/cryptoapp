import React, { Component } from "react";
import CoinDetailsData from "components/CoinDetailsData";
import { Container, Summary } from "./styles";

export default class CoinDetails extends Component {
	render() {
		return (
			<Container>
				<CoinDetailsData
					coin={this.props.match.params.coin}
					currency={this.props.currency}
				></CoinDetailsData>
			</Container>
		);
	}
}
