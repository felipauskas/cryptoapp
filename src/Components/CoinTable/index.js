import React, { Component } from "react";
import axios from "axios";
import { TableDiv } from "./styles";
import CoinTableTitle from "../CoinTableTitle";
import CoinTableData from "../CoinTableData";

export default class CoinTable extends Component {
	state = {
		isLoading: false,
		hasError: false,
		hasData: false,
		coinData: [],
	};

	getData = async (currency) => {
		this.setState({ isLoading: true, hasError: false, hasData: false });
		try {
			const { data } = await axios(
				`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=8&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
			);
			this.setState({ isLoading: false, hasData: true, coinData: data });
		} catch (error) {
			console.log(error);
			this.setState({ isLoading: false, hasError: true, hasData: false });
		}
	};

	componentDidMount() {
		this.getData(this.props.currency);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.currency !== this.props.currency) {
			this.getData(this.props.currency);
		}
	}

	render() {
		const { coinData, hasData } = this.state;
		return (
			<>
				{hasData && (
					<TableDiv>
						<CoinTableTitle />
						{coinData.map((element) => (
							<CoinTableData
								key={element.market_cap_rank}
								{...element}
								hourchange={element.price_change_percentage_1h_in_currency}
								daychange={element.price_change_percentage_24h_in_currency}
								weekchange={element.price_change_percentage_7d_in_currency}
							/>
						))}
					</TableDiv>
				)}
			</>
		);
	}
}
