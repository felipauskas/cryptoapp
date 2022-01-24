import React, { useState, useEffect } from "react";
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

const MarketBar = (props) => {
	const [isLoading, setLoading] = useState(false);
	const [hasError, setError] = useState(false);
	const [marketData, setMarketData] = useState("");
	const [hasData, setData] = useState(false);

	const getCrypto = async () => {
		setError(false);
		setLoading(true);
		try {
			const { data } = await axios(`https://api.coingecko.com/api/v3/global`);
			setLoading(false);
			setMarketData(data);
			setData(true);
		} catch (error) {
			console.log(error);
			setLoading(false);
			setError(true);
		}
	};

	useEffect(() => {
		getCrypto();
	}, [props.currency]);

	const { data } = marketData;

	return (
		<>
			<MarketDiv>
				{hasData && (
					<MarketDisplay>
						<span>Coins {data.active_cryptocurrencies}</span>
						<span>Exchanges {data.markets}</span>
						<li>${millify(data.total_market_cap[props.currency])}</li>
						<SliderDiv>
							<li>${millify(data.total_volume[props.currency])}</li>
							<Slider>
								<Completion
									size={
										(data.total_volume[props.currency] / data.total_market_cap[props.currency]) *
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
};

export default MarketBar;
