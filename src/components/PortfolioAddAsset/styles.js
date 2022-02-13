import styled from "styled-components";
import { AutoComplete, DatePicker } from "antd";
const { Option } = AutoComplete;

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
	margin: 40px 0 0 0;
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

export const CoinName = styled.span`
	text-align: center;
`;

export const SelectDiv = styled.div`
	display: flex;
	flex-flow: column;
	width: 60%;
	height: 200px;
	justify-content: space-between;
`;

export const SelectCoin = styled.input`
	font-family: "Poppins", sans-serif;
	font-size: 14px;
	background: #191b1f;
	width: 95%;
	min-height: 50px;
	border-radius: 12px;
	outline: none;
	border: none;
	padding: 0 0 0 5%;
	color: white;
`;

export const StyledComplete = styled(AutoComplete)`
	color: #fff;
	width: 95%;
`;

export const StyledOption = styled(Option)``;

export const CoinResultDiv = styled.div`
	width: 42%;
	top: 108px;
	background: #191b1f;
	border-radius: 0px 0px 12px 12px;
	position: absolute;
	z-index: 1;
	display: flex;
	flex-flow: column;
`;

export const CoinResult = styled.div`
	font-size: 14px;
	height: 25px;
	padding: 0 0 0 5%;
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #fff;

	&:hover {
		background: #fff;
		color: #191b1f;
	}
`;

export const SelectAmount = styled.input`
	font-family: "Poppins", sans-serif;
	font-size: 14px;
	background: #191b1f;
	width: 95%;
	height: 50px;
	border-radius: 12px;
	outline: none;
	border: none;
	color: white;
	padding: 0 0 0 5%;
`;

export const StyledDate = styled(DatePicker)`
	font-family: "Poppins", sans-serif;
	font-size: 14px;
	background: #191b1f;
	width: 95%;
	height: 50px;
	border-radius: 12px;
	outline: none;
	border: none;
	padding: 0 0 0 5%;
	box-shadow: none !important;

	.ant-picker-input > input::placeholder {
		color: #757575;
	}

	.ant-picker-input > input {
		color: #fff;
	}
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
