import React, { Component } from "react";
import axios from "axios";
import {
	Slider,
	MarketDisplay,
	MarketDiv,
	Completion,
	StyledBTC,
	StyledETH,
	SliderDiv,
} from "./styles";
import millify from "millify";

export default class MarketBar extends Component {
	state = {
		isLoading: false,
		hasError: false,
		hasData: false,
		marketDetails: "",
	};

	getCrypto = async () => {
		this.setState({ isLoading: true, hasError: false, hasData: false });
		try {
			const { data } = await axios(`https://api.coingecko.com/api/v3/global`);
			this.setState({ isLoading: false, marketDetails: data, hasData: true });
		} catch (error) {
			console.log(error);
			this.setState({ isLoading: false, hasError: true });
		}
	};

	componentDidMount() {
		this.getCrypto();
	}

	render() {
		const { isLoading, hasError, hasData, marketDetails } = this.state;
		const { data } = marketDetails;
		return (
			<>
				<MarketDiv>
					{hasData && (
						<MarketDisplay>
							<span>Coins {data.active_cryptocurrencies}</span>
							<span>Exchanges {data.markets}</span>
							<li>${millify(data.total_market_cap[this.props.currency])}</li>
							<SliderDiv>
								<li>${millify(data.total_volume[this.props.currency])}</li>
								<Slider>
									<Completion
										size={
											(data.total_volume[this.props.currency] /
												data.total_market_cap[this.props.currency]) *
											100
										}
									/>
								</Slider>
							</SliderDiv>
							<SliderDiv>
								<StyledBTC />
								<span>{data.market_cap_percentage.btc.toFixed(0)}%</span>
								<Slider>
									<Completion size={data.market_cap_percentage.btc} />
								</Slider>
							</SliderDiv>
							<SliderDiv>
								<StyledETH />
								<span>{data.market_cap_percentage.eth.toFixed(0)}%</span>
								<Slider>
									<Completion size={data.market_cap_percentage.eth} />
								</Slider>
							</SliderDiv>
						</MarketDisplay>
					)}
				</MarketDiv>
			</>
		);
	}
}
