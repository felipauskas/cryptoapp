import styled from "styled-components";

export const CoinDiv = styled.div`
	display: flex;
	flex-flow: row;
	width: 100%;
	height: 300px;
	gap: 2%;
	margin-bottom: 20px;
`;

export const ImgCoinDiv = styled.div`
	display: flex;
	flex-flow: column;
	background: #191b1f;
	border-radius: 12px;
	justify-content: center;
	align-items: center;
	width: 15%;
	height: 100%;
`;

export const ImageDiv = styled.div`
	background: #1f2128;
	width: 50%;
	height: 40%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const CoinName = styled.span`
	text-align: center;
`;

export const DetailsDiv = styled.div`
	display: flex;
	flex-flow: column;
	width: 80%;
	height: 100%;
	gap: 1%;
	justify-content: space-between;
`;

export const MarketPriceDiv = styled.div`
	display: flex;
	align-items: center;
	height: 10%;
	font-size: 14px;
`;

export const MarketDetails = styled.div`
	display: flex;
	flex-flow: row;
	align-items: center;
	justify-content: center;
	gap: 20px;
	background: #191b1f;
	border-radius: 12px;
	width: 100%;
	height: 37%;
`;

export const CoinPriceDiv = styled.div`
	display: flex;
	align-items: center;
	height: 10%;
	font-size: 14px;
`;

export const CoinDetails = styled.div`
	display: flex;
	flex-flow: row;
	align-items: center;
	justify-content: center;
	gap: 20px;
	width: 100%;
	background: #191b1f;
	border-radius: 12px;
	height: 37%;
`;

export const DetailsWrapper = styled.div`
	display: flex;
	flex-flow: row;
	width: 22%;
`;

export const BoldDetails = styled.span`
	font-weight: 900;
	margin: 0 5px 0 0;
`;

export const LightDetails = styled.span`
	font-weight: 300;
	font-style: italic;
`;

export const CurrentPrice = styled.span`
	font-weight: 300;
`;

export const PriceChange = styled.span``;

export const Amount = styled.span``;

export const Value = styled.span``;
