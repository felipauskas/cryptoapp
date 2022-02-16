import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import millify from "millify";
import { getMarketData } from "store/marketBar/marketActions";
import { useViewport } from "utils";
import {
	Slider,
	MarketDisplay,
	MarketDiv,
	Completion,
	StyledBTC,
	StyledETH,
	SliderDiv,
} from "./styles";

const MarketBar = () => {
	const dispatch = useDispatch();
	const { hasData, marketData } = useSelector((state) => state.market);
	const { currency } = useSelector((state) => state.currency);
	const { data } = marketData;
	const { width } = useViewport();
	const breakpoint = 769;

	useEffect(() => {
		dispatch(getMarketData());
	}, [currency]);

	return (
		<MarketDiv>
			{width > breakpoint && (
				<MarketDisplay>
					{hasData && (
						<>
							<span>Coins: {data.active_cryptocurrencies}</span>
							<span>Exchanges: {data.markets}</span>
							<li>${millify(data.total_market_cap[currency])}</li>
							<SliderDiv>
								<li>${millify(data.total_volume[currency])}</li>
								<Slider>
									<Completion
										size={(data.total_volume[currency] / data.total_market_cap[currency]) * 100}
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
						</>
					)}
				</MarketDisplay>
			)}
			{width < breakpoint && (
				<MarketDisplay>
					{hasData && (
						<>
							<span>Coins: {data.active_cryptocurrencies}</span>
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
						</>
					)}
				</MarketDisplay>
			)}
		</MarketDiv>
	);
};

export default MarketBar;
