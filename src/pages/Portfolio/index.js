import AddAsset from "components/PortfolioAddAsset";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { getCoinList } from "store/coinList/coinListActions";
import { cleanGetCoin } from "store/coinDetails/detailsActions";
import PortfolioCoin from "components/PortfolioCoins";
import { coinsPrice, largeConfig, smallConfig } from "./utils";
import { AddAssetBtn, PortfolioCoinsDiv, PortfolioContainer, Statistics } from "./styles";
import { updateCoinPortfolio } from "store/portfolio/portfolioActions";
import { useViewport } from "utils";

export default function Portfolio(props) {
	const dispatch = useDispatch();
	const { coins } = useSelector((state) => state.portfolio);
	const { hasData } = useSelector((state) => state.coinList);
	const { currency } = useSelector((state) => state.currency);
	const [showAddCoin, setAddCoin] = useState(false);
	const currentCoins = coinsPrice(coins);
	const { width } = useViewport();
	const breakpoint = 769;

	useEffect(() => {
		dispatch(updateCoinPortfolio(currency, currentCoins));
	}, [currentCoins, currency]);

	const handleClick = () => {
		setAddCoin(true);
		if (!hasData) {
			dispatch(getCoinList());
		}
		dispatch(cleanGetCoin());
	};

	const handleClose = (e) => {
		setAddCoin(false);
	};

	return (
		<PortfolioContainer>
			<ReactModal
				ariaHideApp={false}
				isOpen={showAddCoin}
				style={width > breakpoint ? largeConfig : smallConfig}
			>
				<AddAsset close={handleClose} />
			</ReactModal>
			<AddAssetBtn onClick={handleClick}>
				<span>Add Asset</span>
			</AddAssetBtn>
			<PortfolioCoinsDiv>
				<Statistics>Your Statistics</Statistics>
				{coins &&
					width > breakpoint &&
					coins.map((el) => (
						<PortfolioCoin key={el.purchasedData.market_data.current_price.usd} coinData={el} />
					))}
				{coins && width < breakpoint && (
					<Carousel swipeScrollTolerance={20} showIndicators={false}>
						{coins.map((el) => (
							<PortfolioCoin key={el.purchasedData.market_data.current_price.usd} coinData={el} />
						))}
					</Carousel>
				)}
			</PortfolioCoinsDiv>
		</PortfolioContainer>
	);
}
