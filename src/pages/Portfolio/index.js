import React, { useState } from "react";
import {
	AddAssetBtn,
	ImageDiv,
	ImgCoinDiv,
	PortfolioContainer,
	SelectContainer,
	CoinDiv,
	SelectTitle,
	SelectDiv,
	SelectCoin,
	SelectAmount,
	SelectDate,
	Buttons,
	CloseBtn,
	SaveBtn,
} from "./styles";

export default function Portfolio(props) {
	const [showAddCoin, setAddCoin] = useState(false);

	const handleClick = (e) => {
		setAddCoin(true);
	};

	const handleClose = (e) => {
		setAddCoin(false);
	};

	return (
		<PortfolioContainer>
			{showAddCoin && (
				<SelectContainer>
					<SelectTitle>Select Coins</SelectTitle>
					<CoinDiv>
						<ImgCoinDiv>
							<ImageDiv></ImageDiv>
							<span>Bitcoin</span>
						</ImgCoinDiv>
						<SelectDiv>
							<SelectCoin></SelectCoin>
							<SelectAmount></SelectAmount>
							<SelectDate></SelectDate>
						</SelectDiv>
						<Buttons>
							<CloseBtn onClick={handleClose}>Close</CloseBtn>
							<SaveBtn>Save</SaveBtn>
						</Buttons>
					</CoinDiv>
				</SelectContainer>
			)}
			<AddAssetBtn onClick={handleClick}>
				<span>Add Asset</span>
			</AddAssetBtn>
		</PortfolioContainer>
	);
}
