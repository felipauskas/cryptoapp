import styled from "styled-components";

export const PortfolioContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const AddAssetBtn = styled.div`
	display: flex;
	background: #06d554;
	width: 500px;
	justify-content: center;
	align-items: center;
	height: 80px;
	border-radius: 12px;
	margin: 50px 0 0 0;
	cursor: pointer;
`;

export const SelectContainer = styled.div`
	display: flex;
	flex-flow: column;
	position: absolute;
	width: 800px;
	height: 400px;
	border-radius: 12px;
	left: 50%;
	transform: translateX(-50%);
	background: #2c2f36;
	align-items: center;
`;

export const SelectTitle = styled.span`
	font-weight: 900;
	font-size: 24px;
	margin: 15px 0 15px 0;
`;

export const CoinDiv = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	width: 70%;
	height: 80%;
	gap: 2.5%;
`;

export const ImgCoinDiv = styled.div`
	display: flex;
	flex-flow: column;
	background: #191b1f;
	border-radius: 12px;
	justify-content: center;
	align-items: center;
	width: 150px;
	height: 200px;
`;

export const ImageDiv = styled.div`
	background: #1f2128;
	width: 85px;
	height: 90px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const SelectDiv = styled.div`
	display: flex;
	flex-flow: column;
	width: 60%;
	height: 200px;
	justify-content: space-between;
`;

export const SelectCoin = styled.input`
	background: #191b1f;
	width: 98%;
	height: 50px;
	border-radius: 12px;
	outline: none;
	border: none;
	color: white;
	padding: 0 0 0 2%;
`;

export const SelectAmount = styled.input`
	background: #191b1f;
	width: 98%;
	height: 50px;
	border-radius: 12px;
	outline: none;
	border: none;
	color: white;
	padding: 0 0 0 2%;
`;

export const SelectDate = styled.input`
	background: #191b1f;
	width: 98%;
	height: 50px;
	border-radius: 12px;
	outline: none;
	border: none;
	color: white;
	padding: 0 0 0 2%;
`;

export const Buttons = styled.div`
	display: flex;
	flex-flow: row;
	width: 100%;
	justify-content: center;
	gap: 20px;
	height: 40px;
`;

export const CloseBtn = styled.div`
	display: flex;
	background: #ffffff;
	align-items: center;
	justify-content: center;
	border-radius: 12px;
	width: 40%;
	height: 40px;
	color: #06d554;
`;

export const SaveBtn = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 12px;
	width: 40%;
	height: 40px;
	background: #06d554;
`;
