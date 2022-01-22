import React, { Component } from "react";
import axios from "axios";
import {
	AllTime,
	CoinName,
	Container,
	Date,
	IconDiv,
	ImageContainer,
	ImageDiv,
	LayerSVG,
	MarketDiv,
	Price,
	PriceDiv,
	SiteDiv,
	SiteName,
	Title,
	Details,
} from "./styles";

export default class CoinDetailsData extends Component {
	state = {
		coinData: [],
		isLoading: false,
		hasError: false,
		hasData: false,
	};

	getCoin = async (coinName) => {
		try {
			this.setState({ isLoading: true, hasData: false, hasError: false });
			const { data } =
				await axios(`https://api.coingecko.com/api/v3/coins/${coinName}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false
            `);
			this.setState({ coinData: data, isLoading: false, hasData: true });
		} catch (error) {
			console.log(error);
		}
	};

	componentDidMount() {
		this.getCoin(this.props.coin);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.coin !== this.props.coin) {
			this.getCoin(this.props.coin);
		}
	}

	render() {
		const { hasData, coinData } = this.state;
		const currency = this.props.currency;
		const { image, name, market_data, links } = coinData;
		const {
			current_price,
			ath,
			atl,
			atl_date,
			ath_date,
			market_cap,
			fully_diluted_valuation,
		} = Object(market_data);
		return (
			<>
				{hasData && (
					<Container>
						<ImageContainer>
							<ImageDiv>
								<IconDiv>
									<img src={image.small} alt={name} />
								</IconDiv>
								<CoinName>{name}</CoinName>
							</ImageDiv>
							<SiteDiv>
								<SiteName>{links.homepage[0]}</SiteName>
							</SiteDiv>
						</ImageContainer>
						<PriceDiv>
							<Price>{current_price[currency]}</Price>
							<LayerSVG />
							<AllTime>All Time High: {ath[currency]}</AllTime>
							<Date>{ath_date[currency]}</Date>
							<AllTime>All Time Low: {atl[currency]}</AllTime>
							<Date>{atl_date[currency]}</Date>
						</PriceDiv>
						<MarketDiv>
							<Title>Market Cap: {market_cap[currency]}</Title>
							<Title>
								Fully Diluted Valudation: {fully_diluted_valuation[currency]}
							</Title>
							<Title>Volume 24h:</Title>
							<Title>Volume / Market:</Title>
							<Title>Total Volume:</Title>
						</MarketDiv>
					</Container>
				)}
			</>
		);
	}
}
