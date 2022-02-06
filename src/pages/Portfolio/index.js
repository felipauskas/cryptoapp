import AddAsset from "components/PortfolioAddAsset";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";
import { AddAssetBtn, PortfolioCoinsDiv, PortfolioContainer, Statistics } from "./styles";
import { getCoinList } from "store/coinList/coinListActions";
import { cleanGetCoin } from "store/coinDetails/detailsActions";
import { modalConfig } from "./utils";
import PortfolioCoin from "components/PortfolioCoins";

export default function Portfolio(props) {
	const dispatch = useDispatch();
	const { coins } = useSelector((state) => state.portfolio);
	const { hasData } = useSelector((state) => state.coinList);
	const [showAddCoin, setAddCoin] = useState(false);

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
