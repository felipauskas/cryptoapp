import styled from "styled-components";

export const TableDiv = styled.div`
	display: flex;
	flex-flow: column wrap;
	width: 89%;
	min-height: 200px;
	background: #191b1f;
	margin: 0px 0px 0 100px;
	border-radius: 12px;
`;

export const TableName = styled.div`
	display: flex;
	flex-flow: row;
	color: white;
	margin: 20px;
	height: 50px;
	align-items: center;
`;

export const CoinDisplayDiv = styled.div`
	display: flex;
	flex-flow: row;
	color: white;
	margin: 20px;
	border-bottom: 1px solid #707070;
	height: 50px;
	align-items: center;
`;

export const CoinRank = styled.span`
	width: 50px;
	text-align: center;
`;

export const CoinImage = styled.img`
	width: 30px;
	height: 30px;
`;

export const CoinName = styled.span`
	width: 150px;
	margin: 0 0 0 5px;
`;

export const CoinPrice = styled.span`
	width: 150px;
`;

export const HourChange = styled.span``;

export const DayChange = styled.span``;

export const WeekChange = styled.span``;

export const VolumeMarket = styled.div``;

export const CirculatingSupply = styled.div``;

export const Last7d = styled.div``;
