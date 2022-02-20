import styled from "styled-components";

export const CoinDiv = styled.div`
	display: flex;
	flex-flow: row;
	width: 100%;
	height: 300px;
	gap: 2%;
	margin-bottom: 20px;

	@media (max-width: 769px) {
		flex-flow: column;
		align-items: center;
		gap: 0;
		padding-bottom: 50px;
		height: 100%;
	}
`;

export const ImgCoinDiv = styled.div`
	display: flex;
	flex-flow: column;
	background: ${(props) => props.theme.styles[props.theme.current].mainBg};
	border-radius: 12px;
	justify-content: center;
	align-items: center;
	width: 15%;
	height: 100%;

	@media (max-width: 769px) {
		width: 30%;
		height: 40%;
	}
`;

export const ImageDiv = styled.div`
	background: ${(props) => props.theme.styles[props.theme.current].componentBg};
	width: 50%;
	height: 40%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 769px) {
		width: 50%;
		height: 50%;
		background: transparent;
	}
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

	@media (max-width: 769px) {
		width: 100%;
		gap: 0;
		align-items: center;
	}
`;

export const MarketPriceDiv = styled.div`
	display: flex;
	align-items: center;
	height: 10%;
	font-size: 14px;
	align-self: flex-start;

	@media (max-width: 769px) {
		margin: 15px 0 15px 0;
	}
`;

export const MarketDetails = styled.div`
	display: flex;
	flex-flow: row;
	align-items: center;
	justify-content: center;
	gap: 20px;
	background: ${(props) => props.theme.styles[props.theme.current].mainBg};
	border-radius: 12px;
	width: 100%;
	height: 37%;

	@media (max-width: 769px) {
		width: 95%;
		flex-flow: column;
		align-items: center;
		justify-content: center;
		background: ${(props) => props.theme.styles[props.theme.current].componentBg};
		height: 100%;
		gap: 0px;
	}
`;

export const CoinPriceDiv = styled.div`
	display: flex;
	align-items: center;
	height: 10%;
	font-size: 14px;
	align-self: flex-start;

	@media (max-width: 769px) {
		margin: 15px 0 15px 0;
	}
`;

export const CoinDetails = styled.div`
	display: flex;
	flex-flow: row;
	align-items: center;
	justify-content: center;
	gap: 20px;
	width: 100%;
	background: ${(props) => props.theme.styles[props.theme.current].mainBg};
	border-radius: 12px;
	height: 37%;

	@media (max-width: 769px) {
		width: 95%;
		flex-flow: column;
		align-items: center;
		background: ${(props) => props.theme.styles[props.theme.current].componentBg};
		height: 100%;
		gap: 0px;
	}
`;

export const DetailsWrapper = styled.div`
	display: flex;
	flex-flow: row;
	width: 22%;

	@media (max-width: 769px) {
		width: 100%;
		height: 30px;
		border-radius: 12px;
		padding: 0 20px;
		background: ${(props) => props.theme.styles[props.theme.current].componentBg};
		align-items: center;
		justify-content: center;
	}
`;

export const BoldDetails = styled.span`
	font-weight: 900;
	margin: 0 5px 0 0;

	@media (max-width: 769px) {
		font-size: 14px;
	}
`;

export const LightDetails = styled.span`
	font-weight: 300;
	font-style: italic;
	margin: 0 5px 0 0;

	@media (max-width: 769px) {
		font-size: 14px;
	}
`;

export const CurrentPrice = styled.span`
	font-weight: 300;
`;

export const PriceChange = styled.span`
	font-weight: 300;
	font-style: italic;
	color: ${(props) => (props.isPositive ? "#00FC2A" : "#FE1040")};

	@media (max-width: 769px) {
		font-size: 14px;
	}
`;

export const Amount = styled.span``;

export const Value = styled.span``;
