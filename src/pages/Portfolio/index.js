import AddAsset from "components/PortfolioAddAsset";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";
import { getCoinList } from "store/coinList/coinListActions";
import { cleanGetCoin } from "store/coinDetails/detailsActions";
import PortfolioCoin from "components/PortfolioCoins";
import { coinsPrice, modalConfig } from "./utils";
import { AddAssetBtn, PortfolioCoinsDiv, PortfolioContainer, Statistics } from "./styles";
import { updateCoinPortfolio } from "store/portfolio/portfolioActions";

export default function Portfolio(props) {
	const dispatch = useDispatch();
	const { coins, currentPrice } = useSelector((state) => state.portfolio);
	const { hasData } = useSelector((state) => state.coinList);
	const { currency } = useSelector((state) => state.currency);
	const [showAddCoin, setAddCoin] = useState(false);
	const currentCoins = coinsPrice(coins);

	useEffect(() => {
		dispatch(updateCoinPortfolio(currency, currentCoins));
	}, [currentCoins, currency]);

	const handleClick = (e) => {
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
			<ReactModal ariaHideApp={false} isOpen={showAddCoin} style={modalConfig}>
				<AddAsset close={handleClose} />
			</ReactModal>
			<AddAssetBtn onClick={handleClick}>
				<span>Add Asset</span>
			</AddAssetBtn>
			<PortfolioCoinsDiv>
				<Statistics>Your Statistics</Statistics>
				{coins && coins.map((el) => <PortfolioCoin key={el.coinName} coinData={el} />)}
			</PortfolioCoinsDiv>
		</PortfolioContainer>
	);
}
