import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencyFormat } from "utils";
import { getCoin } from "store/coinDetails/detailsActions";
import {
	CoinDetails,
	CoinDiv,
	CoinName,
	DetailsDiv,
	CoinPriceDiv,
	ImageDiv,
	ImgCoinDiv,
	MarketDetails,
	MarketPriceDiv,
	BoldDetails,
	DetailsWrapper,
	LightDetails,
	PriceChange,
} from "./styles";

export default function PortfolioCoin(props) {
	const dispatch = useDispatch();

	const { currency } = useSelector((state) => state.currency);
	const { currentPrice } = useSelector((state) => state.portfolio);
	const { amountPurchased, currencyPurchased, datePurchased, purchasedData } = props.coinData;
	const currentData = currentPrice.filter((el) => el.id === purchasedData.id);

	useEffect(() => {
		dispatch(getCoin(purchasedData.id));
	}, []);

	const actualPrice = currentData[0]?.current_price;
	const change24h = currentData[0]?.price_change_percentage_24h?.toFixed(2);
	const change7d = currentData[0]?.price_change_percentage_7d_in_currency?.toFixed(2);
	const change30d = currentData[0]?.price_change_percentage_30d_in_currency?.toFixed(2);
	const purchasedPrice = Object(purchasedData.market_data.current_price);
	const coinAmount = amountPurchased / purchasedPrice[currencyPurchased];
	const totalValue = coinAmount * actualPrice;
	const difference = (1 - purchasedPrice[currency] / actualPrice) * 100;
	const { image, name } = Object(purchasedData);

	return (
		<CoinDiv>
			<ImgCoinDiv>
				<ImageDiv>
					<img src={image.small} alt={name} />
				</ImageDiv>
				<CoinName>{name}</CoinName>
			</ImgCoinDiv>
			<DetailsDiv>
				<MarketPriceDiv>MARKET PRICE:</MarketPriceDiv>
				<MarketDetails>
					<DetailsWrapper>
						<BoldDetails>Current price: </BoldDetails>
						<LightDetails>{currencyFormat(currency, 2, actualPrice)}</LightDetails>
					</DetailsWrapper>
					<DetailsWrapper>
						<BoldDetails>Change 24h:</BoldDetails>
						<PriceChange isPositive={change24h > 0}>{change24h}%</PriceChange>
					</DetailsWrapper>
					<DetailsWrapper>
						<BoldDetails>Change 7D: </BoldDetails>
						<PriceChange isPositive={change7d > 0}>{change7d}%</PriceChange>
					</DetailsWrapper>
					<DetailsWrapper>
						<BoldDetails>Change 30D: </BoldDetails>
						<PriceChange isPositive={change30d > 0}>{change30d}%</PriceChange>
					</DetailsWrapper>
				</MarketDetails>
				<CoinPriceDiv>YOUR COIN:</CoinPriceDiv>
				<CoinDetails>
					<DetailsWrapper>
						<BoldDetails>Purchased price: </BoldDetails>
						<LightDetails>{currencyFormat(currency, 2, purchasedPrice[currency])}</LightDetails>
						<PriceChange isPositive={difference > 0}>({difference.toFixed(2)}%)</PriceChange>
					</DetailsWrapper>
					<DetailsWrapper>
						<BoldDetails>Coin Amount:</BoldDetails>
						<LightDetails>{coinAmount.toFixed(2)}</LightDetails>
					</DetailsWrapper>
					<DetailsWrapper>
						<BoldDetails>Total Value: </BoldDetails>
						<LightDetails>{currencyFormat(currency, 2, totalValue)}</LightDetails>
					</DetailsWrapper>
					<DetailsWrapper>
						<BoldDetails>Purchase Date:</BoldDetails>
						<LightDetails>{datePurchased}</LightDetails>
					</DetailsWrapper>
				</CoinDetails>
			</DetailsDiv>
		</CoinDiv>
	);
}
